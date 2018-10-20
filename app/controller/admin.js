'use strict';

const Controller = require('egg').Controller;

class AdminController extends Controller {
  async index() {
    // koa ctx.body = 'news.js'; 响应信息
    this.ctx.body = '用户管理';
  }
}

module.exports = AdminController;
