import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from 'pages/Root';
import SignIn from 'pages/SignIn';
import Home from 'pages/Home';

const Routes = {
  ROOT: '/',
  HOME: '/home',
  SIGN_IN: '/sign-in',
};

const Router = () => (
  <Switch>
    <Route exact path={Routes.ROOT} component={Root} />
    <Route exact path={Routes.HOME} component={Home} />
    <Route exact path={Routes.SIGN_IN} component={SignIn} />
  </Switch>
);

const redirect = (route, history) => {
  history.push(route);
};

export { Router, Routes, redirect };
