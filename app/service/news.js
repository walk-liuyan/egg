'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewsList() {
    const user = await this.service.user.getUserInfo();
    console.log('------------', user);
    const response = await this.ctx.curl(this.config.api + 'appapi.php?a=getPortalList&catid=20&page=1');
    // response.data  <Buffer 7b 22 72 65 73 75 6c 74 22 3a 5b 7b 22 61 69 64 22 3a 22 34 39 39 22 2c 22 63 61 74 69 64 22 3a 22 32 30 22 2c 22 75 73 65 72 6e 61 6d 65 22 3a 22 61 ... >
    // Buffer=> obj
    return JSON.parse(response.data).result;
  }
  async getNewsContent(aid) {
    const api = this.config.api + 'appapi.php?a=getPortalArticle&aid=' + aid;
    const response = await this.ctx.curl(api);
    const data = JSON.parse(response.data);
    return data.result;
  }
}

module.exports = NewsService;
