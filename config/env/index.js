/**
 * 环境配置
 * author xuqinggang
 * @date 2017-10-19 15:04
 */
'use strict'

import path from 'path';
import fs from 'fs';

const config = {
    env: process.env.NODE_ENV || 'dev',
    root: path.join(__dirname, '../../'),
    //mongodb配置
    mongo: {
        uri: `mongodb://localhost/xqgblog-dev`,
        options: {
            useMongoClient: true,
            // user: process.env.MONGO_USERNAME || '', 
            // pass: process.env.MONGO_PASSWORD || ''
        }
    },
};

export default config;
