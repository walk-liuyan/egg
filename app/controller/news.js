'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const username = this.ctx.cookies.get('username', {
      encrypt: true, // 解密操作
    });
    const msg = 'ejs';
    const list = await this.service.news.getNewsList();
    const syncUser = await this.service.syncUser.echo();
    // 内置对象
    console.log('his.ctx.request----', this.ctx.request.foo());
    console.log('his.ctx.helper----', this.ctx.helper.getHelperDate());
    console.log('this.app.foo----', this.app.foo());
    console.log('this.ctx.getHost----', this.ctx.getHost());
    await this.ctx.render('news', {
      username,
      msg,
      list,
      api: this.config.api,
      syncUser,
    });
    // this.ctx.body = '新闻页面';
  }
  async content() {
    // koa ctx.query
    const aid = this.ctx.query.aid;
    const list = await this.service.news.getNewsContent(aid);
    await this.ctx.render('newsContent', {
      list: list[0],
    });
  }
  async list() {
    // koa ctx.params
    const params = this.ctx.params;
    this.ctx.body = 'lsitmews' + params;

  }
}

module.exports = NewsController;
