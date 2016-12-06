'use strict'
var fs = require('fs');
//复制 文件
var rs = fs.createReadStream('smaple.txt');
var ws = fs.createWriteStream('output.txt');
rs.pipe(ws);
