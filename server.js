const app = require('./app');
const http = require("http");
const port = process.env.PORT || 2000;

const server = http.createServer(app);
server.listen(port)
console.log(`Express running → PORT ${server.address().port}`);
