'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = '后台user文字管理'
  }

}

module.exports = UserController;
