const React = require('react');
const Table = require('@material-ui/core/Table').default;
const TableBody = require('@material-ui/core/TableBody').default;
const InboxMail = require('./inboxEmail');

const timestampSort = require('./timestampSort');

const Inbox = props => {
  const [emails, setEmails] = React.useState([]);

  React.useEffect(() => {
    return async () => {
      const response = await fetch('/emails');
      const json = await response.json();
      const sortedEmails = json.sort(timestampSort);
      const emails = sortedEmails.map(incomingEmail => InboxMail(incomingEmail));
      setEmails(emails);
    };
  }, [emails]);

  return (
    <Table>
      <TableBody>
        {emails.map(email => {
          <InboxRow key={email.id} email={email} />;
        })}
      </TableBody>
    </Table>
  );
};
module.exports = Inbox;
