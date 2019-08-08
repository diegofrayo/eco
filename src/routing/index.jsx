import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from 'pages/About';
// import Home from 'pages/Home';
import SignIn from 'pages/SignIn';

const Routes = {
  HOME: '/',
  ABOUT: '/about',
  SIGN_IN: '/sign-in',
};

const Router = () => (
  <Switch>
    <Route exact path={Routes.HOME} component={SignIn} />
    <Route exact path={Routes.ABOUT} component={About} />
    <Route exact path={Routes.SIGN_IN} component={SignIn} />
  </Switch>
);

export { Router, Routes };
