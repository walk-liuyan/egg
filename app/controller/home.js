'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    // const list = await this.service.news.getNewsList();
    // const user = await this.service.user.getUserInfo();
    // this.ctx.body = '你好egg.js';
    this.ctx.cookies.set('username', 'wlak;刘艳', {
      maxAge: 1000 * 3600 * 24,
      httpOnly: true,
      signed: true, // 防止cookie被修改
      encrypt: true, // 获取时要解密操作
    });
    await this.ctx.render('home');
  }
  async add() {
    console.log(this.ctx.request.body);
    this.ctx.body = this.ctx.request.body;
  }
  async news() {
    this.ctx.body = 'news.js';
  }
}

module.exports = HomeController;

// remove cookie
/* this.ctx.cookies.set('username', null);
this.ctx.redirect('/news'); */
