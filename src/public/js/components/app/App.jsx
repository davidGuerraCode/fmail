const React = require('react');
const Router = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Paths = require('../../conf/paths');
const { Inbox } = require('../inbox');
const { NavigationBar } = require('../navigationBar');
const { Header } = require('../header');

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="content">
          <NavigationBar />
          <Route exact path={Paths.root} component={Inbox} />
          <Route path={Paths.inbox} component={Inbox} />
          <Route path={Paths.important} component={Inbox} />
          <Route path={Paths.sentMail} component={Inbox} />
          <Route path={Paths.drafts} component={Inbox} />
          <Route path={Paths.span} component={Inbox} />
        </div>
      </div>
    </Router>
  );
};

module.exports = App;
