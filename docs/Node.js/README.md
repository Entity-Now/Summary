# express框架

## 构建web服务器
### 初始化
```sh
npm init -y
```

### 安装node的类型定义文件
```sh
npm i @types/node --save-dev
```

### 安装express
```sh
npm i express --save-dev
```

### 安装@types/express
```sh
npm install @types/express --save-dev
```

### hello world
```js
import express from 'express'

const app = express();

app.use("*",(req, res , next)=>{

    res.status(200).set({'Content-Type':'html/text'}).end('<h1>hello world</h1>');
});
app.listen(4000,()=>{
    console.log('https://localhost:4000');
});
```