'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUserInfo() {
    return {
      name: 'walk',
      age: '132',
    };
  }
}

module.exports = UserService;
