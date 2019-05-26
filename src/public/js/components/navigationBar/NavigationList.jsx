const React = require('react');
const NavigationListItem = require('./NavigationListItem');
const Paths = require('../../conf/paths');
const isSelected = require('./isSelected');

const NavigationList = props => {
  const pathname = window.location.pathname;

  return (
    <nav className="navigation-bar__nav">
      <ul className="navigation-bar__ul">
        <NavigationListItem
          label="Inbox"
          isSelected={isSelected(pathname, Paths.inbox)}
          path={Paths.inbox}
        />
        <NavigationListItem
          label="Important"
          isSelected={isSelected(pathname, Paths.important)}
          path={Paths.important}
        />
        <NavigationListItem
          label="SentMail"
          isSelected={isSelected(pathname, Paths.sentMail)}
          path={Paths.sentMail}
        />
        <NavigationListItem
          label="Drafts"
          isSelected={isSelected(pathname, Paths.drafts)}
          path={Paths.drafts}
        />
        <NavigationListItem
          label="Spam"
          isSelected={isSelected(pathname, Paths.spam)}
          path={Paths.spam}
        />
      </ul>
    </nav>
  );
};

module.exports = NavigationList;
