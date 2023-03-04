<!--
 * @作者: 14770137
 * @Date: 2022-10-22 01:05:33
-->
# 双相绑定

## vue3 双相绑定
子组件
```html
<template>
    <!-- 这两种方式均可 -->
    <view v-if="Open" class="ModalBox" @click="ClickBackground">
    <view v-if="Open" class="ModalBox" @click="$emit('update:Open',!Open)">
        <view class="content">
            {{Open}}
        </view>
    </view>
</template>
```
```js
import { toRefs ,ref} from 'vue'
defineProps(['Open']);
const emits = defineEmits(['update:Open']);
```
父组件
```html
// 必须加上v-model否则无效
<ModalBox v-model:Open="ModalShow"/>
```

## 样式穿透 inheritAttrs
```html
<template>
    <!-- 使样式继承到ModalView上面 -->
    <div class="ModalView" v-bind="$attrs">
        <slot/>
    </div>
</template>
``` 
```js
export default{
    // 需要将inheritAttrs设置为false
    inheritAttrs: false
}
```