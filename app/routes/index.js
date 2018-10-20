'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth({title: 'this is a router middle'})


  router.get('/', auth, controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/newscontent', controller.news.content);
  router.get('/newslist/:id', controller.news.list);
  router.get('/admin', controller.admin.index);

  router.get('/shop', controller.shop.index);

  // login
  router.get('/login', controller.admin.user.login);
  router.get('/register', controller.admin.user.register);
  router.post('/doLogin', controller.admin.user.doLogin);
  router.post('/doRegister', controller.admin.user.doRegister);

  // router.redirect('/*', '/', 302)
};
