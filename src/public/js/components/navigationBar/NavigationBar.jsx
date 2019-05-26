const React = require('react');
const Button = require('@material-ui/core/Button').default;
const NavigationList = require('./NavigationList');

const NavigationBar = props => {
  const onCompose = event => {
    event.preventDefault();
    alert('onCompose');
  };

  return (
    <aside className="navigation-bar">
      <Button
        className="navigation-bar__compose-button"
        variant="contained"
        color="secondary"
        onClick={onCompose}
      >
        Compose
      </Button>
      <NavigationList />
    </aside>
  );
};

module.exports = NavigationBar;
