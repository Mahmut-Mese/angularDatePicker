const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('database.json');
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
var port = 3000;
server.listen(port, function () {
  console.log('Server running at ' + port);
});
