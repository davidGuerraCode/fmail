const paths = {
  root: '/',
  inbox: '/inbox',
  important: '/important',
  sentMail: '/sentMail',
  drafts: '/drafts',
  spam: '/spam',
  emailTemplate: '/emails/:id',
  email: emailID => `/emails/${emailID}`
};

module.exports = paths;
