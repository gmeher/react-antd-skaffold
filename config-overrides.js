const { override, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path');

const resolve = dir => path.join(__dirname, '.', dir);

const rewiredSourceMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  return config;
};

module.exports = override(
  addLessLoader({
    javascriptEnabled: true
  }),
  addWebpackAlias({
    '~': resolve('src')
  }),
  rewiredSourceMap()
);
