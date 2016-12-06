

var fs = require('fs');
//读取文本文件
fs.readFile('smaple.txt','utf-8',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
    }
});
//读取图片
fs.readFile('images.jpeg',function(error,data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
        console.log(data.length);
        //将buffer转换成string
        console.log(data.toString('utf-8'));
    }
});
