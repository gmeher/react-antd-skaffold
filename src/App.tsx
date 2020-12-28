import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { lacaleConfig } from './locales';
import { ConfigProvider } from 'antd';
import { useAppState } from 'stores';
import RenderRouter from 'routes';

const App: React.FC = () => {
  const { locale } = useAppState(state => state.user);

  useEffect(() => {
    document
      .getElementsByTagName('HTML')[0]
      .setAttribute('data-theme', localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
  });
  return (
    <ConfigProvider componentSize="middle">
      <IntlProvider locale={locale.split('_')[0]} messages={lacaleConfig[locale]}>
        <BrowserRouter>
          <RenderRouter />
        </BrowserRouter>
      </IntlProvider>
    </ConfigProvider>
  );
};

export default App;
