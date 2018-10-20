module.exports = app => {
    const {router, controller} = app
  // const adminAuth = app.middleware.adminAuth()
  // 后台
  // router.get('/admin/user', adminAuth, controller.admin.user.index);
  router.get('/admin/user', controller.admin.user.index);

  router.get('/admin/article', controller.admin.article.index);
  router.get('/admin/article/add', controller.admin.article.add);
  router.get('/admin/article/edit', controller.admin.article.edit);

  router.get('/admin/product', controller.admin.product.index);
  router.get('/admin/product/add', controller.admin.product.add);
  router.get('/admin/product/edit', controller.admin.product.edit);
}