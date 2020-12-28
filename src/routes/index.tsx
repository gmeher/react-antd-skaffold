import React, { FC, Suspense } from 'react';
import { PartialRouteObject, useLocation } from 'react-router';
import { Route, useNavigate, useRoutes } from 'react-router-dom';
import RouteWrapper from './config';
import { Button, Spin } from 'antd';
import { Outlet } from 'react-router';

import authRoutes from '../modules/auth/routes';
import PublicLayout from 'layouts/public-layout';
import PrivateLayout from 'layouts/private-layout';
import orderRoutes from 'modules/order/routes';


const routeList: PartialRouteObject[] = [
  {
    path: 'auth',
    element: <RouteWrapper auth={false} titleId="title.login" element={<PublicLayout />} />,
    children: [...authRoutes]
  },
  {
    path: 'dashboard',
    element: <RouteWrapper titleId="title.login" auth={false} element={<PrivateLayout />} />,
    children: [...orderRoutes]
  }
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);
  return element;
};

export default RenderRouter;
