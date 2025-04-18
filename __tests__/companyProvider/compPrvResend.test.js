/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */

'use strict';

// tests for companyProviders.js functions
// Generated by serverless-jest-plugin

const mod = require('../../src/companyProviders');
const jestPlugin = require('serverless-jest-plugin');
const { constants, UsersService, CompanyProvidersService, permisionConstants } = require('stoke-app-common-api');
const companyProvidersService = new CompanyProvidersService(process.env.companyProvidersTableName, constants.projectionExpression.defaultAttributes, constants.attributeNames.defaultAttributes);
const usersService = new UsersService(process.env.consumerAuthTableName, constants.projectionExpression.defaultAttributes, constants.attributeNames.defaultAttributes);
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapperResendCompanyProviders = lambdaWrapper.wrap(mod, { handler: 'resendInvitation' });

const userId = "JEST-TEST-RESEND+-COMPANY-PROVIDERS";
const itemId = `${constants.prefix.provider}JEST-TEST-RESEND+-COMPANY-PROVIDERS-ITEM-ID`;
const notInvitedItemId = `${constants.prefix.provider}JEST-TEST-RESEND+-COMPANY-PROVIDERS-NOTINVITED-ITEM-ID`;
const companyId = "JEST-TEST-RESEND+-COMPANY-PROVIDERS";
const name = 'Test';

const provider = {
    itemId,
    companyId,
    createdBy: userId,
    modifiedBy: userId,
    itemStatus: constants.companyProvider.status.invited,
    itemData: {
        name
    }
};

const notInvitedProvider = {
    itemId: notInvitedItemId,
    companyId,
    createdBy: userId,
    modifiedBy: userId,
    itemStatus: constants.companyProvider.status.notInvited,
    itemData: {
        name
    }
};

const providerEvent = {
    body: JSON.stringify({ companyId, providerId: itemId }),
    requestContext: {
        identity: {
            cognitoIdentityId: userId
        }
    },
    pathParameters: {
        id: itemId
    }
}

const notInvitedProviderEvent = {
    body: JSON.stringify({ companyId, providerId: notInvitedItemId }),
    requestContext: {
        identity: {
            cognitoIdentityId: userId
        }
    },
    pathParameters: {
        id: notInvitedItemId
    }
}

const multipleNotInvitedProviderEvent = {
    body: JSON.stringify({ companyId, providerIds: [notInvitedItemId] }),
    requestContext: {
        identity: {
            cognitoIdentityId: userId
        }
    },
    pathParameters: {
        id: notInvitedItemId
    }
}

const providerNoAllowEvent = {
    body: JSON.stringify({
        companyId: companyId + '_COMPANY',
        providerId: itemId
    }),
    requestContext: {
        identity: {
            cognitoIdentityId: userId
        }
    },
    pathParameters: {
        id: itemId
    }
}

const providerMissingCompanyIdEvent = {
    body: JSON.stringify({ providerId: itemId }),
    requestContext: {
        identity: {
            cognitoIdentityId: userId
        }
    },
    pathParameters: {
        id: itemId
    }
}

const providerMissingItemIdEvent = {
    body: JSON.stringify({ companyId }),
    requestContext: {
        identity: {
            cognitoIdentityId: userId
        }
    }

}

const multipleMixInvitedProviderEvent = {
    body: JSON.stringify({ companyId, providerIds: [notInvitedItemId, providerNoAllowEvent] }),
    requestContext: {
        identity: {
            cognitoIdentityId: userId
        }
    },
    pathParameters: {
        id: notInvitedItemId
    }
}

describe('resendInvitation', () => {
    beforeEach(async () => {
        let response = await companyProvidersService.create(provider);
        expect(response.itemId).toBe(itemId);
        const user = {
            userId,
            entityId: userId,
            companyId,
            itemStatus: constants.user.status.active,
            itemData: { userRole: constants.user.role.admin, 
                permissionsComponents: {[permisionConstants.permissionsComponentsKeys.talents]: { isEditor: true } },
            }
        };
        await companyProvidersService.create(notInvitedProvider);
        response = await usersService.create(user);
        expect(response).toEqual(user);
    });

    it('resendInvitation, expect 200', async () => {
        let response = await wrapperResendCompanyProviders.run(providerEvent)
        expect(response.statusCode).toBe(200);
        const result = await companyProvidersService.get(companyId, itemId);
        expect(result.itemData.invitationDate).toBeTruthy()
    });

    it('resendInvitation not allow , expect 403', async () => {
        const response = await wrapperResendCompanyProviders.run(providerNoAllowEvent)
        expect(response.statusCode).toBe(403);
    });

    it('missing company id , expect 500', async () => {
        const response = await wrapperResendCompanyProviders.run(providerMissingCompanyIdEvent)
        expect(response.statusCode).toBe(500);
    });

    it('missing provider id , expect 500', async () => {
        const response = await wrapperResendCompanyProviders.run(providerMissingItemIdEvent)
        expect(response.statusCode).toBe(500);
    });

    it('invite not invited provide, expect 200', async () => {
        const response = await wrapperResendCompanyProviders.run(notInvitedProviderEvent);
        expect(response.statusCode).toBe(200);
        const result = await companyProvidersService.get(companyId, notInvitedItemId);
        expect(result.itemStatus).toBe(constants.companyProvider.status.invited);
    })

    it('multiple invite not invited provide, expect 200', async () => {
        const response = await wrapperResendCompanyProviders.run(multipleNotInvitedProviderEvent);
        expect(response.statusCode).toBe(200);
        const result = await companyProvidersService.get(companyId, notInvitedItemId);
        expect(result.itemStatus).toBe(constants.companyProvider.status.invited);
    })

    it('multiple invite mix invited / not invited provide, expect 200', async () => {
        const response = await wrapperResendCompanyProviders.run(multipleMixInvitedProviderEvent);
        expect(response.statusCode).toBe(200);
        const notInvitedItemresult = await companyProvidersService.get(companyId, notInvitedItemId);
        expect(notInvitedItemresult.itemStatus).toBe(constants.companyProvider.status.invited);
    })

    afterEach(async () => {
        //cleanup
        let result = await companyProvidersService.delete(companyId, itemId);
        expect(result).toBe(true);
        result = await companyProvidersService.delete(companyId, notInvitedItemId);
        expect(result).toBe(true);
    });
});

