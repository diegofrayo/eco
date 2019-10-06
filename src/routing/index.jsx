import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Root from 'pages/Root';
import SignIn from 'pages/SignIn';

const Routes = {
  ROOT: '/',
  HOME: '/mi-perfil',
  LOCATION_ECOALIADOS: '/eco-aliados',
  SIGN_IN: '/iniciar-sesion',
  STATS: '/estadisticas',
  SUPPORT_CAUSES: '/apoya-causas',
};

const Router = () => (
  <Switch>
    <Route exact path={Routes.ROOT} component={Root} />
    <Route exact path={Routes.HOME} component={Home} />
    <Route exact path={Routes.LOCATION_ECOALIADOS} component={Home} />
    <Route exact path={Routes.SIGN_IN} component={SignIn} />
    <Route exact path={Routes.STATS} component={Home} />
    <Route exact path={Routes.SUPPORT_CAUSES} component={Home} />
  </Switch>
);

const redirect = (route, history) => {
  history.push(route);
};

export { Router, Routes, redirect };
