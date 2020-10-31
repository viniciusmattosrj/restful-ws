const corsMiddleware = require('restify-cors-middleware');
const server = require('.');

const cors = corsMiddleware({
    preflightMaxAge: 5,
    origins: ['*'],
    allowHeaders: ['*'],
    exposeHeaders: ['*']
});

server.pre(cors.preflight);

server.use(cors.actual);