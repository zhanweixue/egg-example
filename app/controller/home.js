'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const path = process.cwd() + '/dist/index.html';
    ctx.set('content-type', 'text/html; charset=utf-8');
    ctx.body = fs.createReadStream(path);
  }
  async activity() {
    try{
      let query = this.ctx.query;
      if(query.marketId == 'AM628356758389129216'){
        console.log('进入marketId')
        return this.ctx.body = {"app":"AP328801193931309056","banner":"product/628356752827482112.png","channelId":"AC617003986976768000","channelName":"摩托姐姐","created":1569853525504,"creator":"U583978350473641984","delete":"NONE","itemCount":3,"itemList":[{"activityItemId":"AI628356759408345088","app":"AP328801193931309056","created":1569853525747,"creator":"U583978350473641984","delete":"NONE","itemId":"PI600727589006344192","itemImage":"product/600727588805017600.png","itemName":"优壹宁","marketId":"AM628356758389129216","marketPrice":1,"modified":1569853939338,"modifier":"U583978350473641984","onSale":true,"owner":"OG328853330094718977","saleAmount":0.06,"saleCount":6,"salePrice":0.01,"sort":2,"stime":1569853939338},{"activityItemId":"AI628356759420928000","app":"AP328801193931309056","created":1569853525750,"creator":"U583978350473641984","delete":"NONE","itemId":"PI598548467538722816","itemImage":"product/598548467236732928.png","itemName":"女士新全套精选套餐","marketId":"AM628356758389129216","marketPrice":1999,"modified":1569853905677,"modifier":"U583978350473641984","onSale":true,"owner":"OG328853330094718977","saleAmount":0,"saleCount":0,"salePrice":1999,"sort":1,"stime":1569853905677},{"activityItemId":"AI628356759362207744","app":"AP328801193931309056","created":1569853525736,"creator":"U583978350473641984","delete":"NONE","itemId":"PI601478598787858432","itemImage":"product/601478717197254656.png","itemName":"肠癌风险评估报告","marketId":"AM628356758389129216","marketPrice":199,"modified":1569853619164,"modifier":"U583978350473641984","onSale":true,"owner":"OG328853330094718977","saleAmount":0,"saleCount":0,"salePrice":199,"sort":0,"stime":1569853619164}],"marketId":"AM628356758389129216","modified":1569853525504,"modifier":"U583978350473641984","name":"压力测试201909302210","owner":"OG328853330094718977","saleAmount":0.06,"saleCount":6,"stime":1569853525504,"validFrom":1569772800990,"validTo":1570896000990}
        
      }else if(query.itemId == 'PI600727589006344192'){
        console.log('进入itemId')
        return this.ctx.body = {"app":"AP328801193931309056","channelId":"PC618531211928666112","channelName":"促销页(早筛)","channelWarningDay":7,"code":"PI600727589006344192","created":1563266218216,"creator":"U303823665105100075","delete":"NONE","desc":"<p>不做绑定使用；</p>","image":"product/600727588805017600.png","images":{"main":["product/601381065654796288.png","product/601381065679962112.png"]},"itemId":"PI600727589006344192","kind":"gene","mallId":"MA374887317040529408","modelName":"优壹宁1.1.201812","modified":1567511447518,"modifier":"U303823665105100075","name":"优壹宁","owner":"OG328853330094718977","packages":[{"geneDetectCategoryVOList":[{"count":1,"geneDetectCategoryId":"PGDC567668621216579584","geneDetectItems":[{"code":"ymlgjyyn","goodsId":"GD567668676426203136","name":"优壹宁-无创胃癌致病菌筛查与用药指导","salePrice":1499}],"name":"优壹宁-无创胃癌致病菌筛查与用药指导"}],"geneDetectItemIds":["GD567668676426203136"],"marketPrice":1,"name":"默认","packageGeneDetectItems":[],"packageId":"PIP600727589245419520","salePrice":0.01}],"panelId":"PP591191210236837888","panelName":"幽门螺杆菌检测(优壹宁)","payedSales":32,"productCode":"5c16f2e2242acb3ed6226a89","productId":"PD567668446771281920","productName":"优壹宁-无创胃癌致病菌筛查与用药指导-新BTO","reportingUrl":"/static/Stomach_hpYYN-V1.1/index.html?sampleCode=","review":"NONE","sales":75,"sequence":1,"shopCategoryIds":[],"shopId":"SP374887519809961984","state":"PENDING","stime":1563266218216,"top":0,"type":"PACKAGE","versionId":"PV591191264825704448","versionName":"1.0.0"}
        
      }
    }catch(error){
      console.log(error);
      throw new Error( error );
    }
  }
}

module.exports = HomeController;
