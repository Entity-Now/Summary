<!--
 * @作者: 14770137
 * @Date: 2022-10-23 19:29:23
-->
<template>
    <div class="Canvas-Content">
        <canvas id="CanvasDom" ref="CanvasDom"></canvas>
        <div class="Canvas-Body">
            <slot/>
        </div>
    </div>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
import {snowflake,ImageTypes} from "../core/snowflake";
import throttle from '../core/throttle'

const CanvasDom = ref<HTMLCanvasElement>();
let getSize = function():{Width:number,Height:number}{
    let { clientWidth: Width, clientHeight: Height } = document.documentElement;
    Height = Height < 1000 ? 1000 : Height;
    return {Width,Height};
}

onMounted(() => {
    let {Width,Height} = getSize();
    
    // 节流
    let delay = new throttle(250);

    CanvasDom.value!.width = Width;
    CanvasDom.value!.height = Height;
    let render = new snowflake(CanvasDom.value as HTMLCanvasElement,
    [{type:ImageTypes.Mobile,source:'/image/three.jpg'},
    {type:ImageTypes.PC,source:'/image/two.jpg'}],Width, Height);

    // 监听窗口变化
    window.onresize = function(){
        delay.run(()=>{
            render.resize(getSize());
        });
    }
});
</script>
<style lang="scss">
.Canvas-Content{ 
    max-height: 100vh;
    max-width: 100vw;
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
    .Canvas-Body {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        min-height: 1000px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>