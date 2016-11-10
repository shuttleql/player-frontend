import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/app';
import Login from './components/Login/login';
import Home from './components/Home/home';
import tokenManager from './tokenManager';

function requireAuth(nextState, replace) {
  if (!tokenManager.getToken()) {
    replace({
      pathname: '/login'
    });
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="home" />
    <Route path="login" component={Login}/>
    <Route path="home" component={Home} onEnter={requireAuth}/>
  </Route>
);
