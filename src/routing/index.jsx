import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from 'pages/Root';
import SignIn from 'pages/SignIn';
import Home from 'pages/Home';

const Routes = {
  ROOT: '/',
  HOME: '/mi-perfil',
  LOCATION_ECOALIADOS: '/eco-aliados',
  SIGN_IN: '/iniciar-sesion',
};

const Router = () => (
  <Switch>
    <Route exact path={Routes.ROOT} component={Root} />
    <Route exact path={Routes.HOME} component={Home} />
    <Route exact path={Routes.LOCATION_ECOALIADOS} component={Home} />
    <Route exact path={Routes.SIGN_IN} component={SignIn} />
  </Switch>
);

const redirect = (route, history) => {
  history.push(route);
};

export { Router, Routes, redirect };
