const http = require("http");
const fs = require('fs');
const urlMod = require("url");
const req2Obj = require("./requestBody2Obj");
const mmss = require("./testConnectMysql");
// const mysql = require("/usr/local/lib/node_modules/mysql");

const server = http.createServer((req, res) => {
    const { headers, method, url } = req;
    let body = [];
    req.on("error", (err) => {
        console.log(err);
    }).on("data", (param) => {
        body.push(param);
    }).on("end", () => {
        body = Buffer.concat(body).toString();
        let bodyStr = decodeURIComponent(body.toString());
        console.log(req2Obj.reqBody2Obj(bodyStr));
    });
    if (url == "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end();
            } else {
                //data是二进制数据
                res.setHeader("Content-Type", "text/html;charset=utf-8");
                res.end(data);
            }
        });
    } else if (url == "/goodsDetail") {
        //渲染一波json数据
        let jsonObj = { name: "晓锟", age: 26, job: "软件开发工程师" };
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        res.end(JSON.stringify(jsonObj));
    }
}).listen(2000, () => {
    console.log("服务器启动了");
});

/*
server.on("request", (req, res) => {
    let url = req.url;
    if (url == "/") {
        fs.readFile("./index.html", (err, data) => {
            if (err) {
                res.setHeader("Content-Type", "text/plain;charset=utf-8");
                res.end();
            } else {
                //data是二进制数据
                res.setHeader("Content-Type", "text/html;charset=utf-8");
                res.end(data);
            }
        });
    } else if (url == "/goodsDetail") {
        console.log(req.incomingMessage);
        console.log(res);
        //渲染一波json数据
        let jsonObj = { name: "晓锟", age: 26, job: "软件开发工程师" };
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        res.end(JSON.stringify(jsonObj));
    }
});


server.listen(2000, () => {
    console.log("服务器启动了")
});
*/