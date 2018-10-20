'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1532511512428_3477';

  // add your config here
  config.middleware = ['jsonp', 'compress', 'auth', 'printdate', 'forbidip'];
  /* config.auth = {
    match: '/news',
    match(ctx) {
      // ctx 上下文
      console.log(ctx.request.url)
      if (ctx.request.url === '/shop' || ctx.request.url === '/news') {
        return true
      }
      return false
    },
    title: 'this is auth'
  } */
  config.printdate = {
    aaa: 'aaaaa',
  };
  config.forbidip = {
    forbidips: ['127.2.0.1', '127.9.0.1', '127.0.0.1'],
  };

  config.bodyParser = {
    jsonLimit: '10mb'
  }
  // 通用配置：
  /*
  enabele: false
  match: '/news'
  ignore: '/news' 忽略该路径

  */
  config.compress = {
    enable: false,
    threshold: 1024
  }

  /* config.adminAuth = {
    match: '/admin'
  } */

  // 配置模版引擎
  exports.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  exports.api = 'http://www.phonegap100.com/';

  return config;
};