<!--
 * @作者: 14770137
 * @Date: 2022-10-25 15:55:14
-->
<template>
    <div class="Container">
        <div class="Head">
            <canvas class="dom" ref="dom"></canvas>
            <img src="/image/MenuLogo.png" alt="Logo" />
            <h1>Entity233的个人博客</h1>
            <span>Where there is light，there is hope</span>
            <div class="ScrollBottom" @click="more" />
        </div>
        <div ref="Product" class="Product">
            <div class="Product_View">
            </div>
            <div class="Product_View">
            </div>
            <div class="Product_View">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dots from '../core/dots1'

const Product = ref<HTMLDivElement>();
const dom = ref<HTMLCanvasElement>();
onMounted(() => {
    domRender();
});
// 滚动到Description元素
const more = function () {
    Product.value?.scrollIntoView({
        behavior: 'smooth'
    });
}
// render
const domRender = function () {
    let ctx: CanvasRenderingContext2D = dom.value!.getContext('2d') as CanvasRenderingContext2D;
    let dot = new dots(dom.value!, document.documentElement);

}
</script>
<style lang="scss">
.Container {
    width: 100%;
    min-height: 100vh;

    .Head {
        height: 100vh;
        width: 100%;
        background: linear-gradient(to bottom right, pink 10%, blue 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;

        h1 {
            line-height: 100px;
            color: aliceblue;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        span {
            color: azure;
            font-weight: bold;
        }

        .ScrollBottom {
            height: 48px;
            width: 48px;
            position: absolute;
            bottom: 48px;
            background-image: url(/image/more.png);
            transition: all .5s ease-in-out;
            animation: More .4s ease-in alternate infinite;

            &:hover {
                cursor: pointer;
            }
        }

        .dom {
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    .Product{
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 27px;
        box-sizing: border-box;
        .Product_View{
            width: calc(100% / 3 - 162px);
            height: 200px;
            background: linear-gradient(to bottom right , pink 10%,blue 120%);
            margin: 0 27px;
        }
    }
}

@keyframes More {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(5px);
    }
}
</style>