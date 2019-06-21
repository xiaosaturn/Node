const atemplate = require("/usr/local/lib/node_modules/art-template");
const fs = require("fs");

fs.readFile("./tpl.html", (err, data) => {
    if (err) throw err
    let result = atemplate.render(data.toString(), {
        name: "Anker",
        age: 22,
        province: "上海市徐家汇",
        hobbies: [
            "coding",
            "打游戏",
            "唱歌"
        ]
    });
    console.log(result);
});