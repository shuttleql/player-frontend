import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/app';
import Login from './components/Login/login';
import Home from './components/Home/home';
import token from './token';

function requireAuth(nextState, replace) {
  if (!token.getToken()) {
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
