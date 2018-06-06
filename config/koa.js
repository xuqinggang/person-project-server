/**
 * koa相关配置
 * author xuqinggang
 * @date 2017-10-19 21:57
 */
'use strict'

import path from 'path';
// import session from 'koa-generic-session';
// import RedisStore from 'koa-redis';
// import responseTime from 'koa-response-time';
import logger from 'koa-logger';
import json from 'koa-json';
// import compress from 'koa-compress';
import bodyParser from 'koa-bodyparser';
// import cors from 'kcors';
// import passport from 'koa-passport';
import conf from './env';

export default function(app) {
    if(conf.env === 'dev'){
        // app.use(responseTime());
        app.use(logger());
    }

    // app.use(cors({
    //     credentials: true
    // }))
    app.use(bodyParser());
    app.use(json());
    // app.keys = [config.session.secrets]
    // app.use(session({
    //     key: 'jackblog.sid',
    //     store: RedisStore({
    //         host:config.redis.host,
    //         port:config.redis.port,
    //         auth_pass:config.redis.password || ''
    //     }),
    //     cookie: config.session.cookie
    // }))
    // app.use(passport.initialize())
    // app.use(compress())
}
