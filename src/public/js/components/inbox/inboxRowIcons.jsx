const React = require('react');
const IconButton = require('@material-ui/core/IconButton').default;
const StartIcon = require('@material-ui/icons/Start').default;
const StartBorderIcon = require('@material-ui/icons/StartBorder').default;

const InboxRowIcons = props => {
  const onClickHandler = alert(`Set ${props.emailID} to important`);

  return (
    <div>
      <IconButton onClick={onClickHandler}>
        {props.isImportant ? <StartIcon className="inbox__start" /> : <StartBorderIcon />}
      </IconButton>
    </div>
  );
};

module.exports = InboxRowIcons;
