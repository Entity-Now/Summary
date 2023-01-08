<!--
 * @作者: 14770137
 * @Date: 2022-10-22 01:05:33
-->
# vue Props
###### html部分
```html
<template>
    <div :class="{MyModal:props.modelView,CloseModal:!props.modelView}" @click="close">
        <div class="ModalView">
            <div class="close">x</div>
            <slot/>
        </div>
    </div>
</template>
```
###### setup 里面使用defineProps与defineEmits实现绑定
```javascript
import {ref,watch,defineProps,defineEmits, toRefs} from 'vue'

const props = defineProps({modelView:Boolean});
const emit = defineEmits(['update:modelView']);

const close = function(){
    emit('update:modelView',false);
}
```
###### 组合式 使用watch监听props并使用emit事件更新数据
```javascript
import {ref,watch,defineProps,defineEmits, toRefs} from 'vue'

import { defineComponent,ref,watch } from 'vue'
export default defineComponent({
    props:{
        modelValue:Boolean
    },
    emits:['update:modelValue'],
    watch:{
        Visibility(val,oldVal){
            this.$emit('update:modelValue',val);
        }
    },
    setup(props,context){
        watch(
            ()=>props.modelValue,
            (newVal)=>{
                Visibility.value = newVal;
            }
        );
        const Visibility = ref(props.modelValue);
        const close = function(){
            Visibility.value = false;
        }
        return {
            Visibility,
            close
        }
    }
});
```
###### html
```html
<template>
    <div :class="{MyModal:modelView,CloseModal:!modelView}">
        <div class="ModalView" v-bind="$attrs">
            <div class="close" @click="$emit('update:modelView',false)">x</div>
            <slot/>
        </div>
    </div>
</template>
```
###### 组合式 
```javascript
import {defineComponent} from 'vue'
export default defineComponent({
    inheritAttrs:false,
    props:{modelView:Boolean},
    setup(props,context){

    }
});
```