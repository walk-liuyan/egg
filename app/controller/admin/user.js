'use strict';

const BaseController = require('../../core/base.js')
class UserController extends BaseController {
  async index() {
    this.ctx.body = 'index'
    await this.ctx.render('login')
  }
  async login() {
    await this.ctx.render('login')
  }
  async register() {
    await this.ctx.render('register')
  }
  async doLogin() {
    console.log(this.ctx.request.body)
    await this.success('/login')
    // this.ctx.render('public/success', {url: '/'})
  }

  async doRegister() {
    console.log(this.ctx.request.body)
    await this.error('/register')
    // this.ctx.render('public/error', {url: '/'})
  }
}

module.exports = UserController;
