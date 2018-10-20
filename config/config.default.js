'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532511512428_3477';

  // add your config here
  config.middleware = [ 'auth', 'printdate', 'forbidip' ];
  config.printdate = {
    aaa: 'aaaaa',
  };
  config.forbidip = {
    forbidips: [ '127.2.0.1', '127.9.0.1', '127.0.0.1' ],
  };

  // 配置模版引擎
  exports.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  exports.api = 'http://www.phonegap100.com/';

  return config;
};
