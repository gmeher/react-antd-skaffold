import React from 'react';
import { DefaultFooter } from '@ant-design/pro-layout';
import { Helmet } from 'react-helmet';
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo/dunzo-logo.png';
import './UserLayout.less';

const PublicLayout = () => {

  const title = "Hyper Local";

  const defaultFooterDom = (
    <DefaultFooter
      copyright={`${new Date().getFullYear()} - Hyper-Local (0.0.1)`}
      links={[]}
    />
  );

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <div className="container login-container">
        <div className="content">
          <div className="top">
            <div className="header">
              <Link to="/">
                <img alt="logo" className="logo" src={logo} />
              </Link>
            </div>
            <div className="desc"></div>
          </div>
          <Outlet />
        </div>
        {defaultFooterDom}
      </div>
    </>
  );
};

export default PublicLayout;