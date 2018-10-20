'use strict';

const Service = require('egg').Service;

class SpiderService extends Service {
   async requestUrl(url) {
    const res = await this.ctx.curl(url)
    return res
  }
}

module.exports = SpiderService;
