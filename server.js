'use strict';


require('egg').startCluster({
  baseDir: __dirname,
  hostname: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 8080,
});