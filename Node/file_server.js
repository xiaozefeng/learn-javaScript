'use strict';
var fs = require('fs');
var  url= require('url');
var http= require('http');
var path= require('path');
//获取当前目录
var root = path.resolve('.');
console.log('current Dir :'+root);
//创建http服务
var server = http.createServer(function (request,response) {
    //解析url
    var pathname = url.parse(request.url).pathname;
    //获取对应的本地路径
    var filepath = path.join(root,pathname);
    //获取文件状态
    fs.stat(filepath,function (err,stat) {
        if(!err&&stat.isFile()){
            console.log('200:'+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            //出错了或者文件不存在
            console.log('404 ' + request.url);
            // 发送404响应:
          response.writeHead(404);
          response.end('404 Not Found');
        }
    })
});
server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
