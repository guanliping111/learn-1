console.log('1 开始');
var done = false;
module.exports.done = done;
let obj = {
    a:1, b :2
}
const comm2 = require('./common2');

module.exports.obj = obj;
setTimeout(() => {
    done = true;
    obj.a = 111;
},3000)
 