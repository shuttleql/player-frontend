import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import App from './components/app';
import Login from './components/Login/login';
import Dashboard from './containers/Dashboard';
import Home from './components/Home/home';
import Matches from './components/Matches/matches';
import tokenManager from './tokenManager';

function requireAuth(nextState, replace) {
  if (!tokenManager.getToken()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="dashboard" />
    <Route path="login" component={Login}/>
    <Route path="dashboard" component={Dashboard} onEnter={requireAuth}>
      <IndexRedirect to="home" />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="matches" component={Matches} onEnter={requireAuth} />
    </Route>
  </Route>
);
