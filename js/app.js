import React from 'react';
import Router from 'react-router';
import {DefaultRoute, Link, Route, RouteHandler} from 'react-router';

// Global Styles
import '../assets/styles/bootstrap.css'
import '../assets/styles/index.less'


// Components
import LoginHandler from './components/login.js';
import Nav from './components/nav.js';


let App = React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, document.body);
});