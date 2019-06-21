const reqBody2Obj = function(paramStr) {
    let arr = paramStr.split("&");
    let obj = {};
    arr.forEach((ele) => {
        let eleArr = ele.split("=");
        if (eleArr.length == 2) {
            // obj.defineProperty(eleArr[0], eleArr[1]);
            obj[eleArr[0]] = eleArr[1];
        }
    });
    return obj;
}
module.exports = {
    reqBody2Obj
}