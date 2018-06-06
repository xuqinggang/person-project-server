/**
 * 启动入口文件
 * author xuqinggang
 * @date 2017-10-19 20:11
 */
'use strict';

import fs from 'fs';
import co from 'co';
import path from 'path';
import Koa from 'koa';
import logger from 'util/log';
import errorHandleMiddle from 'middleware/error.middleware';
import config from 'config/env';
import koaConf from 'config/koa';
import mongoose from './connect';
import Article from 'model/article.model';
import Tags from 'model/tags.model';
import routerConf from 'router';
// import initData from 'config/seed';
// initData();


const app = new Koa();

// log记录
// router use : this.logger.error('msg')
app.use(async (ctx, next) => {
	ctx.logger = logger
	await next()
});

//错误处理中间件
app.use(errorHandleMiddle());

// koa基本配置

koaConf(app);
routerConf(app);
app.listen(3000);

// logger.error({url:'123'});

// import mongoose from './connect';

// function readFile(path) {
//     return (cb) => {
//         console.log('cb  before');
//         fs.readFile(path, { encoding: 'utf8' }, cb);
//         console.log('cb  after');
//     }
// }
// co(function *() {
//     try {
//     var dataA = yield readFile('a.js');
//     console.log(dataA);
//     } catch(e) {
//         console.log('e', e)
//     }
// })
    // .catch(err => {
    // console.log('err');
// });

//错误监听
app.on('error', (err, ctx) => {
	if (process.env.NODE_ENV != 'test') {
		console.error('error', err)
        ctx.logger.error({ url: ctx.req.url }, err);
	}
})

