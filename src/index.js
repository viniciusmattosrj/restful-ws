const restify = require('restify');

const server = restify.createServer();

server.get('/', (req, res, next) => {
    next();
});

server.listen('3456');