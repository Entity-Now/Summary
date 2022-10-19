<!--
 * @作者: 14770137
 * @Date: 2022-10-19 18:06:04
-->
<script setup lang='ts'>
    import { ref,reactive,onMounted } from 'vue'

    const CanvasDom = ref<HTMLCanvasElement>();
    const {clientWidth:Width,clientHeight:Height} = document.documentElement;
    let ctx:CanvasRenderingContext2D;
    onMounted(()=>{
        CanvasDom.value!.width = Width;
        CanvasDom.value!.height = Height;
        ctx = CanvasDom.value!.getContext('2d') as CanvasRenderingContext2D;
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,Width,Height);
        
        render();
    });
    let Colors = Array.from(new Array(600),x=>{
        return {
            x : Math.random() * Width,
            y : Math.random() * Height,
            step : Math.random() * 2.5
        }
    });
    const render = function(){
        ctx.fillStyle = 'black';
        ctx.fillRect(0,0,Width,Height);
        ctx.fillStyle = 'white';
        Colors.forEach(item=>{
            item.y = item.y > Height ? 0 : item.y + item.step;
            ctx.beginPath();
            ctx.arc(item.x,item.y,item.step,0,Math.PI * 2,true);
            ctx.fill();
        })
        requestAnimationFrame(()=>{
            render();
        });
    }

</script>
<template>
        <div class="Container">
            <canvas id="CanvasDom" ref="CanvasDom"></canvas>
            <div class="borderView">
                <div class="Content">
                </div>
            </div>
        </div>
</template>
    
    
<style lang="scss" scoped>
.Container{
    width: 100%;
    min-height: 100vh;
    height: 100%;
    position: relative;
    .borderView{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .Content{
            width: 100%;
            max-width: 1100px;
            min-height: 600px;
            border-radius: 17px;
            background: rgba(141, 138, 138, 0.356);
        }
    }
}
</style>