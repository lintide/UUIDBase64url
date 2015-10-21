## 在 nodejs 上生成 UUID

```
$ npm install node-uuid
```

不过这个库只提供 `UUID V1` 和 `UUID V4`的实现，示例如下：

```javascript
> var uuid = require('node-uuid')
> uuid.v1()
'f033db70-29e8-11e5-9cde-5fb5e520454c'
> uuid.v4()
'3d694534-6ff4-426d-a4ec-bd4366f368e7'
```

`V1` 是基于时间生成的 UUID，而`V2` 是基于随机数生成的。生成的 `UUID` 的第 __13__ 位表示版本号。

## 将 uuid 转换为 base64 格式

正常的 base64 格式包含 __/ + =__ 字符，这些字符在 URL 中需要转义。首先我们使用 __ - __ 替换 __ + __ ，__ _ __ 替换 __ / __ 号；并且由于128位的数据转换为 base64 格式时最后会加上 `==`，我们干脆直接去除。

```javascript
var buffer = new Buffer(uuid.v4('binary'));
var base64 = buffer.toString('base64')
                    .replace(/\+/g, '-')
                    .replace(/\//g, '_')
                    .replace(/=/g, '');
```

## 参考文档

* [在线生成UUID](https://www.uuidgenerator.net/version4)
* [UUID的定义、分类、应用及生成工具](http://www.blogjava.net/feelyou/archive/2008/10/14/234320.html)
* [UUID算法分析](http://www.cppblog.com/Fox/archive/2009/12/06/uuid_algorithm_analysis.html)
* [Understanding UUID](https://kanru.info/blog/archives/2010/11/16/uuid-el/)
* [UUID V4 格式](https://gist.github.com/nightire)
