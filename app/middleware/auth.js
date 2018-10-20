module.exports = (options, app) => {
  return async function auth(ctx, next) {
      ctx.state.csrf = ctx.csrf; //设置全局变量
      await next();
  }
}