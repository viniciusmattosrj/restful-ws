const server = require("../server");

const routes = (server) => {
    server.get('/', (req, res, next) => {
        res.send('Hello Word');
        next();
    });
};

module.exports = routes;