// import Lib
import React, { ReactElement, FC } from 'react';
import Loadable from 'react-loadable';
import RouteWrapper from 'routes/config';
import { RouteProps } from 'react-router';
// import Components
import loadingComponent from '../../components/Loader';

const OrderModule = Loadable({
  loader: () => import('./pages'),
  loading: loadingComponent
});

const orderRoutes = [
  {
    path: '/order',
    auth: false,
    element: <RouteWrapper auth={false} element={<OrderModule />} titleId="title.login" />
  },
];

export default orderRoutes;