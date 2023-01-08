<!--
 * @作者: 14770137
 * @Date: 2022-10-16 16:34:27
-->
# Vue3 

## 组合式api
```html
<script setup>
import { ref } from 'Vue'

const value = ref(0);

const func = function(){
    console.log('my is a method');
}
</script>
<template>
    <div>
        {{ value }}
    </div>
</template>
```

## Props and Emits
```html
<script setup>
const props = defineProps({
  foo: String
})

const emit = defineEmits(['change', 'delete'])
// setup 代码
</script>
```

## v-slot 获取组件内插槽的属性
```html 
<!-- tabBar.vue -->
<view class="TopView">
    <slot List="hello world"></slot>
</view>
</template>
```
```html
<!-- 2.html -->
<tabBar id="tabBar" :SelectIndex="1" :List="TabBarList">
    <template v-slot="{ List }">
    <h1>{{ List }}</h1>
    </template>
</tabBar>
```