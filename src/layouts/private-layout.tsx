import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import ProLayout, {BasicLayoutProps} from '@ant-design/pro-layout';
import { isEmpty } from 'lodash';
import {route} from './menu';

import logo from '../assets/logo/dunzo-logo.png';
import './UserLayout.less';


const setting:BasicLayoutProps = {
    "navTheme": "light",
    "primaryColor": "dust",
    "layout": "top",
    "contentWidth": "Fluid",
    "fixedHeader": true,
    "autoHideHeader": false,
    "fixSiderbar": false,
    "menu": {
        "locale": true
    },
    "title": "",
    "pwa": true,
    "iconfontUrl": "",
    "collapse": false,
    "language": "en"
}

const PrivateLayout = (props: any) => {
  const {
    children,
  } = props;



  const [collapsed, handleMenuCollapse] = useState(true);


  const menuDataRender = (menuList: any[]) => {
    return menuList.map(item => {
      return item;
    });
  }


  const renderMenuItem = (menuItemProps: any, defaultDom: any) => {
      if(menuItemProps.isUrl){
          return defaultDom
      }

      return <Link to={menuItemProps.path} className="header-menu-link">
          <span className="menu-item-name">{menuItemProps.name}</span>
      </Link>
  }

  return (
    <ProLayout
        collapsed={collapsed}
        onCollapse={handleMenuCollapse}
        logo={logo}
        route={route}
        menuItemRender = {renderMenuItem}
        {...setting}
        menuDataRender={menuDataRender}
        navTheme = "light"
    >
      <Outlet />
    </ProLayout>
  );
};

export default PrivateLayout;