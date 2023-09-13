module.exports.GenericScopes = {
  ACTIVE: 'active', // deleted_at: null
  DEFAULT: 'defaultScope', // Depends on the model
};

module.exports.CompanyScopes = {
  APPROVED: 'approved', // approved_at: null
  NON_APPROVED: 'nonApproved', // approved_at: not null
};

module.exports.OrderScopes = {
  ONLY_RECURRING: 'onlyRecurring', // recurrence_id: not null
  INCLUDE_RECURRING: 'includeRecurring', // no conditions
  EXCLUDE_RECURRING: 'excludeRecurring', // recurrence_id: null
};

module.exports.RatingScopes = {
  TENANT_RATINGS: 'tenantRatings',
  CLIENT_RATINGS: 'clientRatings',
};
