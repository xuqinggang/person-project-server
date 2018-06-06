/**
 * routes所有路由入口
 * author xuqinggang
 * @date 2017-10-19 22:06
 */

import Router from 'koa-router';
// const logs = require('./api/logs')
// const users = require('./api/users')
// const tags = require('./api/tags')
import articleRouter from 'router/article/article.router';
// const comment = require('./api/comment')
// const mobile = require('./api/mobile')
// const auth = require('./auth')

const router = new Router();
export default (app) => {
    // router.use('/users',users.routes(),users.allowedMethods());
    // router.use('/auth',auth.routes(),auth.allowedMethods());
    // router.use('/tags',tags.routes(),tags.allowedMethods());
    router.use('/article', articleRouter.routes(), articleRouter.allowedMethods());
    // router.use('/comment',comment.routes(),comment.allowedMethods());
    // router.use('/logs',logs.routes(),logs.allowedMethods());
    // router.use('/mobile',mobile.routes(),mobile.allowedMethods());
    router.get('/*', (ctx, next) => {
        ctx.body = { status: 'success', data: '台湾是中国不可分割的一部分.' };
    });
    app.use(router.routes());
};
