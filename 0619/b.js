console.log("b.js 文件被加载执行了");

let vari = "b里面的变量";
let addFunc = function(x, y) {
    return x + y;
}

module.exports = {
    addFunc,
    vari
};