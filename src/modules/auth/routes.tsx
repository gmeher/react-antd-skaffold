// import Lib
import React, { ReactElement, FC } from 'react';
import Loadable from 'react-loadable';
import RouteWrapper from 'routes/config';
import { RouteProps } from 'react-router';
// import Components
import loadingComponent from '../../components/Loader';

const LoginModule = Loadable({
  loader: () => import('./pages/login.page'),
  loading: loadingComponent
});

export default [
  {
    path: '/login',
    auth: false,
    element: <RouteWrapper auth={false} element={<LoginModule />} titleId="title.login" />
  },
];
