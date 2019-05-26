const timestampSort = require('../timestampSort');

const Email = timestamp => {
  timestamp;
};

describe('timestampSort', () => {
  it('has a module', () => {
    expect(timestampSort).toBeDefined();
    const expected = 'function';
    const actual = typeof timestampSort;
    expect(expected).toEqual(actual);
  });

  it('sorts emails in ascending order', () => {
    const emial1 = Email(1000);
    const email2 = Email(1001);
    const email3 = Email(1002);
    const emails = [emial1, email2, email3];
    const expected = [email3, email2, emial1];
    const actual = emails.sort(timestampSort);

    expect(expected).toEqual(actual);
  });
});
