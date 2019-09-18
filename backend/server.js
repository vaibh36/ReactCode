const app = require("./app");
const normalizePort = require('normalize-port');

const debug = require("debug")("node-angular");
const http = require("http");

const port = normalizePort(process.env.PORT || "3000");

app.set('port',port)

const server = http.createServer(app);
server.listen(port);