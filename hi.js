var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'myapp',
    // streams: [
    //     {
    //         level: 'info', // 30
			// stream: process.stdout,
    //     },
    //     {
    //         level: 'warn', // 30
			// stream: process.stdout,
    //     },
    // ]
}
);
log.warn({lang: 'fr'}, 'au revoir');
