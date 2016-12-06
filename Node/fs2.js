'use strict';
var fs = require('fs');
//获取文件的大小，创建时间的信息
fs.stat('smaple.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        console.log('是否是文件'+stat.isFile());
        if(stat.isFile()){
            //文件大小
            console.log('size'+stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
})
