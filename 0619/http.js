let http = require("http");
let server = http.createServer();
server.on("request", (req, res) => {
    let url = req.url;
    if (url == "/plain") {
        res.setHeader("Content-Type", "text/plain;charset=utf-8"); //解决乱码问题
        res.end("你好啊");
    } else if (url == "/html") {
        res.setHeader("Content-Type", "text/html;charset=utf-8"); //解决乱码问题
        res.end("<h1>hello html <a href=''>点我</a></h1>");
    } else {
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        let htmlStr = "\
            <h2 style='color: red;'>哎呀，出错了，请稍后再试</h2>          \
        ";
        res.end(htmlStr);
    }
});
server.listen(3000, () => {
    console.log("Server is running...");
});