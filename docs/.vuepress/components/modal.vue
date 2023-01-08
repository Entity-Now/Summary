<!--
 * @作者: 14770137
 * @Date: 2022-10-21 20:15:03
-->
<template>
    <div :class="{MyModal:modelView,CloseModal:!modelView}" @click="$emit('update:modelView',false)">
        <div class="ModalView" v-bind="$attrs">
            <div class="close" @click="$emit('update:modelView',false)">x</div>
            <slot/>
        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
    inheritAttrs:false,
    props:{modelView:Boolean},
    setup(props,context){

    }
});
</script>
<style lang="scss" scope>

.MyModal {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 9998;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform:.5s all ;
    animation: OpenModal .1s linear normal forwards;
    .ModalView {
        background: white;
        min-width: 280px;
        min-height: 280px;
        padding: 14px;
        box-sizing: border-box;
        width: auto;
        height: auto;
        margin: auto;
        border-radius: 7px;
        box-shadow: 0 0 16px 2px #777;
        position: relative;
        @media all and (max-width:550px){
            width: 250px;
            height: 250px;
        }
        .close{
            position: absolute;
            right: 0px;
            top: 0px;
            font-size: 1.4rem;
            width: 32px;
            height: 32px;
            text-align: center;
            &:hover{
                color: aqua;
                cursor: pointer;
            }
        }
    }
}
.CloseModal {
    transition: all .5s;
    display: none;
}
@keyframes CloseModal{
    from {
        transform: scale(1);
    }
    to {
        transform: scale(.5);
    }
}
@keyframes OpenModal{
    from {
        transform: scale(.5);
    }
    to {
        transform: scale(1);
    }
}
</style>