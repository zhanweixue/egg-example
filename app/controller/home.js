'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const axios = require('axios');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const path = process.cwd() + '/dist/index.html';
    ctx.set('content-type', 'text/html; charset=utf-8');
    ctx.body = fs.createReadStream(path);
  }
  async activity() {
    try{
      let result = await axios({
        method: 'get',
        url: 'http://www.baidu.com',
      });
      this.ctx.set('content-type', 'text/html; charset=utf-8');
      this.ctx.body = result.data;
    }catch(error){
      console.log(error);
      throw new Error( error );
    }
  }
}

module.exports = HomeController;
