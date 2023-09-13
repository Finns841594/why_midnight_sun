module.exports.OrderMessageTypes = {
  MANUAL: 'manual',
  SYSTEM: 'system',
};

module.exports.UserTypes = {
  PROPCOMP: 'propcomp',
  CONTRACTOR: 'contractor',
  TENANT: 'tenant',
  EXTCO: 'extco',
  SYSTEM: 'system',
};

module.exports.UserRoles = {
  STANDARD: 'standard',
  RESTRICTED: 'restricted',
  ADMIN: 'admin',
};

module.exports.CommunicationTypes = {
  SMS: 'sms',
  EMAIL: 'email',
};

module.exports.CommunicationResources = {
  USER: 'user',
  ORDER: 'order',
  COMPANY: 'company',
};

module.exports.RecurrenceLogResources = {
  ORDER: 'order',
};

module.exports.OrderStatus = Object.freeze({
  recurring: 'recurring',
  pending_sending: 'pending_sending',
  pending_confirmation: 'pending_confirmation',
  rejected: 'rejected',
  pending_work: 'pending_work',
  pending_rating: 'pending_rating',
  completed: 'completed',
  deleted: 'deleted',
});

module.exports.OrderCompanyRelations = Object.freeze({
  OFFER: 'offer',
});

module.exports.CompanyOfferStatus = Object.freeze({
  INIT: 'init',
  SENT: 'sent',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
});

// If you add an enum here, add it to translations too
module.exports.OrderEventTypes = Object.freeze({
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  REJECT: 'reject',
  MESSAGE: 'message',
  ADD_FILE: 'add_file',
  SUB_ORDER_UPDATE: 'sub_order_update',
  SUB_ORDER_ADD: 'sub_order_add',
  SUB_ORDER_REMOVE: 'sub_order_remove',
  STATUS_SENT: 'status_sent',
  STATUS_CONFIRM: 'status_confirm',
  STATUS_REJECT: 'status_reject',
  STATUS_COMPLETE: 'status_complete',
  STATUS_FINALISED: 'status_finalised',
  STATUS_RATE: 'status_rate',
  VISIT_CREATE: 'visit_create',
  VISIT_REJECT: 'visit_reject',
  VISIT_APPROVE: 'visit_approve',
  VISIT_DELETE: 'visit_delete',
  EXPENSE_CREATE: 'expense_create',
  EXPENSE_DELETE: 'expense_delete',
  TIME_CREATE: 'time_create',
  TIME_UPDATE: 'time_update',
  TIME_DELETE: 'time_delete',
  RATING_CREATE: 'rating_create',
  RATING_RESPONSE: 'rating_response',
  NOTE_CREATE: 'note_create',
  NOTE_UPDATE: 'note_update',
  NOTE_DELETE: 'note_delete',
});

module.exports.VisitTypes = Object.freeze({
  PROPOSAL: 'proposal',
  CONFIRMED: 'confirmed',
});

module.exports.UserFilter = Object.freeze({
  ALL: 'all',
  ADMINS: 'admins',
});

module.exports.PersonTypes = Object.freeze({
  NATURAL: 'natural',
  LEGAL: 'legal',
});

module.exports.ClientTypes = Object.freeze({
  MANAGER: 'manager',
  OWNER: 'owner',
  ADMIN: 'admin',
});

module.exports.AddressTypes = Object.freeze({
  LOCATION: 'location',
  DELIVERY: 'delivery',
  MAIN: 'main',
  VISITOR: 'visitor',
  POSTAL: 'postal',
  INVOICE: 'invoice',
});

module.exports.OrderUserRelationType = Object.freeze({
  CREATOR: 'creator',
  PROPCOMP_CONTACT: 'propcomp_contact',
  CONTRACTOR_CONTACT: 'contractor_contact',
});

module.exports.UserRelationType = Object.freeze({
  DEFAULT_ADMIN: 'default_admin',
  DEFAULT_FAULTS: 'default_faults',
  EVENT_ATTENDEE: 'event_attendee',
});

module.exports.FileLocations = Object.freeze({
  S3_PRIVATE: 's3-private',
  S3_PUBLIC: 's3-public',
  PUBLIC_WEBSITE: 'public',
});

module.exports.FileStatus = Object.freeze({
  INITED: 'inited',
  CLEAN: 'clean',
  INFECTED: 'infected',
  NOT_SCANNED: 'not_scanned',
});

module.exports.ClientCompanyRelations = Object.freeze({
  FAVOURITE: 'favourite',
  PRE_COLLAB: 'pre_collab',
});

module.exports.ReminderResources = {
  ORDER: 'order',
  VISIT: 'visit',
};

module.exports.ReminderTypes = {
  PENDING_RATING_PROPCOMP: 'pending_rating_propcomp',
  PENDING_CONFIRMATION_CONTRACTOR: 'pending_confirmation_contractor',
  VISIT: 'visit',
};

module.exports.DefaultUserRelationCategories = {
  DEFAULT_ADMIN: ['admin'],
  DEFAULT_FAULTS: ['fault', 'property_service'],
};

module.exports.RecurrenceTypes = {
  ORDER: 'order',
};

// The order is important here, as it is used to determine the order of the wanted language
module.exports.SupportedLanguages = Object.freeze({
  sv: 'sv',
  en: 'en',
});

module.exports.DefaultLanguage = 'sv';
