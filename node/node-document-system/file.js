var fs = require("fs");

// // 1.异步打开文件
// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function(err, fd) {
//     //r+ 以读写模式打开文件。如果文件不存在抛出异常。
//    if (err) {
//        return console.error(err);
//    }
//   console.log("文件打开成功！");     
// });

// //2.获取文件信息
// console.log("准备打开文件！");
// fs.stat('input.txt', function (err, stats) {
//    if (err) {
//        return console.error(err);
//    }
//    console.log(stats);
//    console.log("读取文件信息成功！");
   
//    // 检测文件类型
//    console.log("是否为文件(isFile) ? " + stats.isFile());
//    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());    
// });


//3.写入文件
console.log("准备写入文件");
fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
   if (err) {
       return console.error(err);
   }
   console.log("数据写入成功！");
   console.log("--------我是分割线-------------")
   console.log("读取写入的数据！");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("异步读取文件数据: " + data.toString());
   });
});