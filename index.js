import React from 'react';
import {render} from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './src/app'

// Global Styles
import './assets/styles/bootstrap.css'
import './assets/styles/index.less'

// Components
import Page1 from './src/components/page1.js';
import Page2 from './src/components/page2.js';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </Route>
  </Router>
), document.getElementById('app'));
