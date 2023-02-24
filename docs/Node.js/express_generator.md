# express_generator
通过应用生成器工具 express-generator 可以快速创建一个应用的骨架。

## 安装express—generator
```sh
// 安装express
npm install -g express
npm install -g express-generator
```

## 设置路由
```js
var express = require('express');
var router = express.Router();
router.get('/',(req,res)=>{
    // ***
});

module.exports = router;
```
```js
//...
const router = require('router.js');
app.use('/',router);
```

## 托管静态页面
```js
app.use(express.static('public'));
// or
app.use('/public',express.static('public'));
```

## 设置参数
```js
router.get('/test/:Id',(req,res)=>{
  res.send(req.params);
});
// url = http://localhost:3000/test/324234
// output = {"Id":"324234"}
```
### :from任意字符:to
```js
router.get('/test/:from-:to',(req,res)=>{
  res.send(req.params);
});
// url = http://localhost:3000/test/AAA-QQQQ
// output = {"from":"AAA","to":"QQQQ"}
```
### 在括号中使用正则表达式
```js
router.get('/test/Id(\d+)',(req,res)=>{
  res.send(req.params);
});
// url = http://localhost:3000/test/234234
// output = {"Id":"234234"}
```

## 响应函数
| method | description |
| --- | ---- |
| res.download() | 返回一个下载文件 |
| res.end() | 结束响应 |
| res.json() | 返回一个json对象 |
| res.jsonp() | 通过JSONP支持发送JSON响应。 |
| res.redirect() | 重定向请求 |
| res.render() | 返回一个模板 |
| res.send() | 返回各种类型响应 |
| res.sendFile() | 以八位字节流的形式发送文件。 |
| res.sendStatus() | 设置响应状态代码并将其字符串表示形式作为响应主体发送。 |
