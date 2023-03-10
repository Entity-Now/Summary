# vite + vue3 服务渲染

## 创建项目
```sh
npm create vite@latest

// 设置项目名称
Project Name : 只能小写

// 然后选择others
```
![创建vite服务器渲染](/image/create_vite_others.png)
![创建vue-ssr](/image/vue_ssr_create.png)

## 修改entry-server.js
```js
// 添加参数url
export async function render(url) {
  const { app, router } = createApp()
  // 设置路由
  // set the router to the desired URL before rendering
  await router.push(url)
  await router.isReady()

}
```
## 修改entry-client.js
```js
// 添加router
const { app, router } = createApp()
// 判断路由是否已加载
router.isReady().then(()=>{
    app.mount('#app')
});

```
## 修改main.js
```js
import { createSSRApp } from 'vue'
import App from './App.vue'
// 添加路由
import { _createRouter } from './router'
// 
export function createApp() {
  const app = createSSRApp(App)
  // 创建路由
  const router  = _createRouter();
  // 中间件引入路由
  app.use(router);
  return { app, router }
}
```
## 在src目录里面添加router.js
src目录里面创建pages文件夹，并依次创建
- src
  - pages
    - admin
      - index.vue
    - vip
      - 无
    - index.vue

```js
import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'
// 引入主页
import Index from './pages/index.vue'
const vip = import.meta.glob('./pages/vip/*.vue');
const admin = import.meta.glob('./pages/admin/*.vue');

// 动态创建路由对象
const adminRoute = Object.keys(admin).map((path)=>{
    const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase()
    return {
        path: name,
        component: admin[path], // () => import('./pages/*.vue')
    }
});

const route = [
    {path:'/',component: Index},
    ...adminRoute
]
export function _createRouter(){
    return createRouter({
        history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
        routes: route
    })
}
```