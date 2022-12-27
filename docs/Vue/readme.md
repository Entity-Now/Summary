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

## 