const React = require('react');
const Input = require('@material-ui/core/Input').default;
const Button = require('@material-ui/core/Button').default;
const SearchIcon = require('@material-ui/icons/Search').default;

const Header = props => {
  const submitHandler = event => {
    event.preventDefault();
    alert('Submit');
  };

  return (
    <header className="header">
      <span className="header__logo">Fmail</span>
      <form className="header__search-form" onSubmit={submitHandler}>
        <Input fullWidth className="header__search-field" />
        <Button type="submit" variant="contained" color="primary">
          <SearchIcon />
        </Button>
      </form>
    </header>
  );
};

module.exports = Header;
