# uniApp

## vue3 setup调用uniapp的生命周期
```js
import { onLoad } from '@dcloudio/uni-app'

onLoad(()=>{
    console.log('页面加载');
});
```

## canvas
> 使用canvas的时候需要传入当前环境作用域
```js
import {getCurrentInstance} from 'vue'
// 使用vue3的方法获取实例
let _this = getCurrentInstance();
// 必须传入组件实例
ctx = uni.createCanvasContext('pie',_this);
```