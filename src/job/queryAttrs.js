/* eslint-disable max-lines */

'use strict';

const { constants } = require('stoke-app-common-api');
const { queryProjectionExpression } = require('stoke-app-common-api/config/constants');

const jobListType = {
    jobsPage: 'jobsPage',
    paymentsPage: 'paymentsPage',
    paymentsPageInvoicesData: 'paymentsPageInvoicesData',
    talentsPage: 'talentsPage',
    homePage: 'homePage',
    budgetPage: 'budgetPage',
    templatePage: 'templatePage',
    templateCenter: 'templateCenter',
    complianceInsight: 'complianceInsight',
    fundingPage: 'fundingPage',
    talentDirectoryPage: 'talentDirectoryPage',
    onboardingPage: 'onboardingPage',
};

const companyProviderFileds = {
    [jobListType.jobsPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isProviderSelfEmployedTalent}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.img}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.name}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.firstName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.lastName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.email}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.talentProfileReviews}`,
    ],
    [jobListType.homePage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.itemStatus,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isProviderSelfEmployedTalent}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.img}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.name}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.firstName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.lastName}`,
    ],
    [jobListType.paymentsPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.tags,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isProviderSelfEmployedTalent}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.img}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.name}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.firstName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.lastName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerEmail}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.email}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.country}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.companyTaxId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.address}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.state}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.postalCode}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.phone}`,
    ],
    [jobListType.talentsPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        constants.attributeNames.defaultAttributes.createdAt,
        constants.attributeNames.defaultAttributes.tags,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerEmail}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isProviderSelfEmployedTalent}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.firstName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.name}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.lastName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.workforceAudits}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isPayable}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.img}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.legalDocuments}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.uploadedFiles}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxFormStatus}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxFormStatusInfo}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxFormType}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.country}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.favoriteHiringManagerIds}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isMarketplace}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.paymentMethod}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.paymentSystem}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.legalCompliance}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxCompliance}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.workforceComplianceStatus}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.sequenceOfWork}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.registrationDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.invitationDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isCreatedByTalentApp}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.address}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.state}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.postalCode}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.phone}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.city}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isTalentWorkforceComplianceIgnored}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.talentProfileReviews}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.talentProfileComments}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.talentProfileData}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.languagesAddedByEmployer}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.skillsAddedByEmployer}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.portfoliosAddedByEmployer}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.pinnedSearchHiringManagerIds}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.email}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.departments}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.companyProvider.backgroundStatusCheck}`,
    ],
    [jobListType.talentDirectoryPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.tags,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isProviderSelfEmployedTalent}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.firstName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.name}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.lastName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.country}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerEmail}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.enrollData}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.talentProfileData}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.languagesAddedByEmployer}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.skillsAddedByEmployer}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.email}`,
    ],
    [jobListType.complianceInsight]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.itemStatus,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isProviderSelfEmployedTalent}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.img}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.name}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.firstName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.lastName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isPayable}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.country}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.legalDocuments}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.uploadedFiles}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.sequenceOfWork}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.workforceComplianceStatus}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.workforceAudits}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.legalCompliance}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.talentProfileData}`,
    ]
};

const jobListFields = {
    [jobListType.jobsPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.createdAt,
        constants.attributeNames.defaultAttributes.itemStatus,
        constants.attributeNames.defaultAttributes.tags,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobTitle}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.talentId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.currency}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobDescription}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.scope}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobStartDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.startDateType}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.engagementType}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.customRateData}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobHandShakeStage}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobAcceptedTime}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobFlow}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.bids}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.draftMilestones}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.totalBudget}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.totalBudgetRange}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.title}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.jobId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.files}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.resultValidation}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.description}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.date}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.approversChain}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.approvals}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.cost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.costLocal}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.actualCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.actualRequestCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.taxInfo`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.comment`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.commentTime`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.status`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.isRejected}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.splittedMilestoneNumber}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.talentCompletedAt}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.rejectDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.lineItems}`,
        `${constants.attributeNames.defaultAttributes.itemData}.jobHireData`,
        `${constants.attributeNames.defaultAttributes.itemData}.jobRequestLevels`,
    ],
    [jobListType.paymentsPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        constants.attributeNames.defaultAttributes.tags,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobTitle}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.talentId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.currency}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.hourlyBudget}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobStartDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.engagementType}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.customRateData}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.title}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.jobId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.files}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.approversChain}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.approvals}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.isRejected}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.date}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.cost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.costLocal}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.actualCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.actualRequestCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.taxInfo`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.comment`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.commentTime`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.talentCompletedAt}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.endTime}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.status`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.billingAmount`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.paymentAmount`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.feeData`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.dueDate`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.valueDate`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.submittedDate`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.name`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.statusHistory`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.PendingDate`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.invoiceNumber}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.proFormaInvoiceNumber}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.autoProFormaInvoiceNumber}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.invoiceDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.proFormaInvoiceDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.autoProFormaInvoiceDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.splittedMilestoneNumber}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.lineItems}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.timeReport}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.requestedData}`,
    ],
    [jobListType.fundingPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.status`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.dueDate`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.PendingDate`,
    ],
    [jobListType.talentsPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        constants.attributeNames.defaultAttributes.tags,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobTitle}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.talentId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobStartDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.engagementType}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.startTime}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.splittedMilestoneNumber}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.jobId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.taxInfo.paymentCurrency`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.providerData}.taxInfo.total`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.actualCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.cost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.dueDate`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.feeData`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.name`,
        `${constants.attributeNames.defaultAttributes.itemData}.remoteJob`,
    ],
    [jobListType.onboardingPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        constants.attributeNames.defaultAttributes.createdAt,
        constants.attributeNames.defaultAttributes.createdBy,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerEmail}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isProviderSelfEmployedTalent}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.firstName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.name}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.lastName}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.isPayable}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.img}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.legalDocuments}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.uploadedFiles}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxFormStatus}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxFormStatusInfo}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxFormType}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.providerId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.paymentMethod}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.paymentSystem}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.legalCompliance}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.taxCompliance}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.workforceComplianceStatus}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.sequenceOfWork}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.companyProvider.registrationDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.talentProfileData}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.skillsAddedByEmployer}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.portfoliosAddedByEmployer}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.pinnedSearchHiringManagerIds}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.talent.email}`,
    ],
    [jobListType.budgetPage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.jobId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.date}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.approversChain}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.approvals}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.cost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.actualCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.actualRequestCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.savedBudget}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.title}`,
    ],
    [jobListType.templatePage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        `${constants.attributeNames.defaultAttributes.itemData}`,
    ],
    [jobListType.templateCenter]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        constants.attributeNames.defaultAttributes.createdAt,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.templateTitle}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.templateDescription}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.job.jobFlow}`,
    ],
    [jobListType.homePage]: [
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemStatus,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.job.jobTitle}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.job.talentId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.job.currency}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.job.jobStartDate}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.job.bids}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.job.totalBudget}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.startTime}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.postedAt}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.jobId}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.date}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.approversChain}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.approvals}`,
        `${constants.attributeNames.defaultAttributes.itemData}.requestLocal`,
        `${constants.attributeNames.defaultAttributes.itemData}.requestedFrom`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.payment}.status`,
        `${constants.attributeNames.defaultAttributes.itemData}.requested`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.cost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.costLocal}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.actualCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.savedBudget}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.actualRequestCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.providerData}.taxInfo.paymentCurrency`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.providerData}.taxInfo.total`,
        `${constants.attributeNames.defaultAttributes.itemData}.${constants.queryProjectionExpression.milestone.isRejected}`,
    ],
    paymentCyclesMinimalAttributes: [
        constants.attributeNames.defaultAttributes.entityId,
        constants.attributeNames.defaultAttributes.companyId,
        constants.attributeNames.defaultAttributes.itemId,
        constants.attributeNames.defaultAttributes.userId,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.cost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.actualCost}`,
        `${constants.attributeNames.defaultAttributes.itemData}.${queryProjectionExpression.milestone.payment}`,
        `${constants.attributeNames.defaultAttributes.itemData}.billingId`,
        constants.attributeNames.defaultAttributes.itemStatus,
        constants.attributeNames.defaultAttributes.createdAt,
        constants.attributeNames.defaultAttributes.createdBy,
        constants.attributeNames.defaultAttributes.modifiedAt,
        constants.attributeNames.defaultAttributes.modifiedBy,
        constants.attributeNames.defaultAttributes.scope,
    ]
};
module.exports = {
    jobListFields,
    jobListType,
    companyProviderFileds
}

