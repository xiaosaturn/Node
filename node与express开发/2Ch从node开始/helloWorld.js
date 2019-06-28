const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello Node Http");
}).listen(1000, () => {
    console.log("Node http 服务器启动了");
});