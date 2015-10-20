var uuid = require('node-uuid')
var base64url = require('base64url');

console.log(uuid.v1());
console.log(uuid.v4());

// 将 uuid 的值转化的 base64 的格式，这样可以缩短 UUID 字符串长度，由原来的 32 个字符缩至 22 个字符
var buffer = new Buffer(uuid.v4('binary'));
var base64 = base64url.encode(buffer);

console.log(base64);
