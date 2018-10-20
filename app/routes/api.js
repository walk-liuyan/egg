module.exports = app => {
    const { router, controller } = app;
// api
router.get('/api/user', controller.api.user.index);
router.get('/api/product', controller.api.product.index);
}