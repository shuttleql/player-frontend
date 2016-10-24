import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, Redirect } from 'react-router'

import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/app.jsx';
import Login from './components/Login/login.jsx';
import Home from './components/Home/home.jsx';

// Needed for onTouchTap 
// http://stackoverflow.com/a/34015469/988941 
injectTapEventPlugin();

render(<App/>, document.querySelector("#root"));

render((
  <Router history={browserHistory}>
    <Redirect from='/' to='/login'/>
    <Route path="/login" component={Login}/>
    <Route path="/home" component={Home}/>
  </Router>
), document.getElementById('main'))