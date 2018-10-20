'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
    async index() {
        this.ctx.body = '后台user文字管理'
      }

      async add() {
        this.ctx.body = '后台user文字管理add'
      }

      async edit() {
        this.ctx.body = '后台user文字管理edit'
      }
}

module.exports = ArticleController;
