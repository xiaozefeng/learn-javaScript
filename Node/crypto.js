'use strict';
const crypto = require('crypto');

var md5 = crypto.createHash('md5');
var sha1 = crypto.createHash('sha1');
const hmac = crypto.createHmac('sha256', 'secret-key');

md5.update('hello world');
md5.update('hello Node.js');
sha1.update('hello world');
sha1.update('hello Node.js');
hmac.update('hello world');
hmac.update('hello Node.js');
console.log('md5加密---'+md5.digest('hex'));
console.log('sha1加密---'+sha1.digest('hex'));
console.log('hmac加密---'+hmac.digest('hex'));
