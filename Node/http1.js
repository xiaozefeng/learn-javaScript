'use strict'

var http = require('http');

//创建一个http server 传入一个回调函数，包含request response
var server = http.createServer(function (request,response) {
    //获取http 的header
    console.log(request.method + ' :'+request.url);
    //将响应码200 写入response 同时设置content-type 为 text/html
    response.writeHead(200,{'Content-type':'text/html'});
    response.end('<h1>Hello World!</h1>');

});
server.listen(8080);
console.log('server is running 8080');
