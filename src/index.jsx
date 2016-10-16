import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, Redirect } from 'react-router'

import App from './components/app.jsx';
import Login from './components/login.jsx';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/login" component={Login}/>
  </Router>
), document.getElementById('root'))