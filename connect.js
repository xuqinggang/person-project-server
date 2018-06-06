/**
 * mongodb连接
 * author xuqinggang
 * @date 2017-10-19 14:54
 */

import path from 'path';
import fs from 'fs';
import bluebird from 'bluebird';
import mongoose from 'mongoose';
import config from 'config/env';

// mongoose promise 风格;
mongoose.Promise = bluebird;
// mongoose.Promise = global.Promise


// 连接数据库.
mongoose.connect(config.mongo.uri, config.mongo.options)
    .then((info) => {
        console.log('mongo connect sucess!');
    })
    .catch((err) => {
        console.log('err:', err);
    });

// const modelsPath = path.join(__dirname, 'model')
// fs.readdirSync(modelsPath).forEach(function (file) {
// 	if (/(.*)\.(js$|coffee$)/.test(file)) {
// 		require(modelsPath + '/' + file)
// 	}
// })

export default mongoose;
