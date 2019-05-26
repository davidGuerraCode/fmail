const InboxEmail = require('../inboxEmail');

describe('InboxEmail', () => {
  it('has a module', () => {
    expect(InboxEmail).toBeDefined();
    const expected = 'function';
    const actual = typeof InboxEmail;
    expect(expected).toEqual(actual);
  });

  it('shold return empty values for a invalid IncomingEmail', () => {
    const incomingEmail = {};
    const expected = {
      id: '',
      subject: '',
      body: '',
      timestamp: '',
      viewedAt: '',
      isImportant: false
    };

    const actual = InboxEmail(incomingEmail);
    expect(expected).toEqual(actual);
  });

  it('should return correct values for a valid IncomingEmail', () => {
    const dateTime = '2018-08-19T09:29:21.318Z';
    const formattedDateTime = '2018-08-19 09:29';
    const incomingEmail = {
      id: '1',
      subject: 'foo',
      body:
        'This is my email, and it is super long so that we are forced to cut it short',
      timestamp: Date.parse(dateTime),
      viewedAt: Date.now(),
      isImportant: false
    };
    const expected = {
      id: '1',
      subject: 'foo',
      body:
        'This is my email, and it is super long so that we are forced to cut it short',
      viewedAt: Date.now(),
      timestamp: formattedDateTime,
      isImportant: false
    };
    const actual = InboxEmail(incomingEmail);
    expect(expected).toEqual(actual);
  });
});
