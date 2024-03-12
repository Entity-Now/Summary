# uni-app 在vscode使用

## CLI工程
> 全局安装 vue-cli 3.x
```sh
npm install -g @vue/cli
```
> 通过CLI创建`uni-app`项目
> vue 2.0
```sh
vue create -p dcloudio/uni-preset-vue my-project
```
> vue 3.0
```sh
npx degit dcloudio/uni-preset-vue#vite my-vue3-project

npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project
```


## 运行、发布uni-app
```sh
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```
| value |  平台 |
|---|----|
| app-plus | app平台 |
| h5 | h5 |
| mp-alipay | 支付宝 |
| mp-baidu | 百度小程序 |
| mp-weixin | 微信小程序 |
| mp-qq | qq小程序 |
| 其他 | see [官网](https://uniapp.dcloud.net.cn/quickstart-cli.html) |

## 安装组件语法提示
```sh
npm i @types/uni-app @types/html5plus -D
```

## uni-app 不支持注释
> 更改json的语言模式，改为jsonc就能支持了
![jsonc](/image/jsonc.png)