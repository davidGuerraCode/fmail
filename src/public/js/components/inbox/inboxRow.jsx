const React = require('react');
const TableRow = require('@material-ui/core/TableRow').default;
const TableCell = require('@material-ui/core/TableCell').default;
const InboxRowIcons = require('./inboxRowIcons');
const Link = require('react-router-dom').Link;
const Paths = require('../../conf/paths');

const InboxRow = ({ email }) => {
  const className = email.viewedAt ? 'inbox__table--row--viewed' : 'inbox__table-row';

  return (
    <TableRow className={className}>
      <TableCell className="inbox__table-cell">
        <InboxRowIcons isImportant={email.isImportant} emailID={email.id} />
      </TableCell>
      <TableCell className="inbox__table-cell--bold">
        <Link className="link inbox__link" to={Paths.email(email.id)}>
          {email.subject}
        </Link>
      </TableCell>
      <TableCell className="inbox__table-cell">
        <Link className="link inbox__link" to={Paths.email(email.id)}>
          {email.body}
        </Link>
      </TableCell>
      <TableCell className="inbox__table-cell--bold">
        <Link className="link inbox__link" to={Paths.email(email.id)}>
          {email.timestamp}
        </Link>
      </TableCell>
    </TableRow>
  );
};

module.exports = InboxRow;
