/**
 * util-log
 * author xuqinggang
 * @date 2017-10-19 17:44
 */
'use strict';

import path from 'path';
import bunyan from 'bunyan';
import config from 'config/env';

const logger = bunyan.createLogger({
    name: 'xuqinggang-blog',
    src: config.env === 'dev',
    serializers: {
        req: bunyan.stdSerializers.req,
        res: bunyan.stdSerializers.res,
        err: bunyan.stdSerializers.err,
    },
    streams: [
        {
            type: 'rotating-file',
            level: 'warn', // 40
            path: path.join(config.root, 'logs/', config.env + '.' + 'warn.log'),
            period: '1d', // daily rotation
            count: 7, // keep 7 back copies
        },
        {
            type: 'rotating-file',
            level: 'error', // 50
            path: path.join(config.root, 'logs/', config.env + '.' + 'error.log'),
            period: '1d', // daily rotation
            count: 7, // keep 7 back copies
        },
    ],
});

export default logger;
