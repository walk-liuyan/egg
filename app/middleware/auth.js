module.exports = (options, app) => {
  return async function auth(ctx, next) {
      console.log('auth', new Date(), options)
      ctx.state.csrf = ctx.csrf; //设置全局变量
      await next();
  }
}

/*
demo

module.exports = (options, app) => {
  return async function auth(ctx, next) {
    console.log(new Date())
      await next();
  }
}
*/