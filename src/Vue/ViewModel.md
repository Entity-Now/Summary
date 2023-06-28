<!--
 * @作者: 14770137
 * @Date: 2022-10-22 01:05:33
-->
# 双相绑定

:::tip
```js
const { value } = defineProps(['value'])
```

当我们将props对象解构为单独的变量时，这些变量就不再是响应式的了。这是因为解构操作会将变量与原始的props对象断开联系，导致变量不再具有响应式。
> 下面是正确的做法

```js
const props = defineProps(['value'])
const { value } = toRefs(props);
```

:::

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

## 嵌套v-model实现
```html
注意这里不能加v-model否则事件不会触发
<ModalBox :Open="ModalShow" @update:Open="$emit('update:ModalShow',
</ModalBox>
```
```js
// props
const props = defineProps(['ModalShow']);
// 定义事件
defineEmits(['update:ModalShow'])
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