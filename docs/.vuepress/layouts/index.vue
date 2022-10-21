<!--
 * @作者: 14770137
 * @Date: 2022-10-19 18:06:04
-->
<script setup lang='ts'>
import { ref, reactive, onMounted } from "vue";
import Modal from "../components/modal.vue";
import snowflake from "../core/snowflake";

const CanvasDom = ref<HTMLCanvasElement>();
onMounted(() => {
  const { clientWidth: Width, clientHeight: Height } = document.documentElement;
  CanvasDom.value!.width = Width;
  CanvasDom.value!.height = Height;
  new snowflake(CanvasDom.value, "/image/one.jpg", Width, Height);
});

const MyModal = ref<Boolean>(false);
const qrCode = ref("/image/QQ.jpg");
const OpenModal = function (Selected: number = 0) {
  if (Selected == 0) {
    qrCode.value = "/image/QQ.jpg";
  } else {
    qrCode.value = "/image/WX.jpg";
  }
  MyModal.value = true;
};
</script>
<template>
  <div class="Container">
    <canvas id="CanvasDom" ref="CanvasDom"></canvas>
    <div class="borderView">
      <div class="Content">
        <div class="avatar">
          <img src="/image/avatar.jpg" alt="头像" />
        </div>
        <div class="describe">
          <h1>Entity的个人博客</h1>
          <div class="information">
            <div class="title">
              <strong>技能清单</strong>
            </div>
            <ul>
              <li>
                <strong>前端：</strong>Vue.js, HTML5, JavaScript, TypeScript,
                ES6, CSS3, SCSS
              </li>
              <li><strong>后端：</strong>asp.net core</li>
              <li><strong>PC：</strong>WPF, winform, maui</li>
              <li><strong>安卓：</strong>Kotlin, Xamarin</li>
            </ul>
          </div>
          <div class="information">
            <div class="title">
              <strong>关于博客</strong>
            </div>
            <Content />
          </div>
          <div class="more hero">
            <p class="actions">
              <a href="" class="primary"> 进入博客 </a>
              <!-- <a href="" class="secondary"> 进入博客 </a> -->
            </p>
          </div>
          <div class="share">
            <div class="title">
              <strong>联系我</strong>
            </div>
            <div class="shareList">
              <div class="shareView" @click="OpenModal(0)">
                <img class="logo" src="/image/QQ.png" alt="qq好友" />
                <div class="show"></div>
              </div>
              <div class="shareView" @click="OpenModal(1)">
                <img class="logo" src="/image/wechat.png" alt="qq好友" />
                <div class="show"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ClientOnly>
      <Modal v-model:model-view="MyModal">
        <div class="Qrcode">
          <img :src="qrCode" alt="加我微信" />
        </div>
      </Modal>
    </ClientOnly>
  </div>
</template>
    
    
<style lang="scss" scope>
$back: rgba(141, 138, 138, 0.356);
$border: rgb(129, 128, 128);
$color: white;
h1 {
  margin: 0;
}
/* SCSS code here*/
.Container {
  width: 100vw;
  height: 100%;
  position: relative;
  #CanvasDom {
    width: 100vw;
  }
  .borderView {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Content {
      position: relative;
      width: 98%;
      height: auto;
      max-width: 1100px;
      border-radius: 17px;
      background: $back;
      // filter:blur(3px);
      backdrop-filter: blur(2px);
      margin: auto;
      .describe {
        width: 100%;
        height: calc(100% - 60px);
        margin-top: 60px;
        padding: 14px;
        box-sizing: border-box;
        h1 {
          text-align: center;
          color: aliceblue;
        }
        .information {
          margin: 4px 0;
          color: $color;
          font-size: 1.2em;
          .title {
            margin: 10px 0;
            position: relative;
            &:after {
              content: "";
              position: absolute;
              background: $back;
              left: 0;
              bottom: -5px;
              width: 100%;
              height: 2px;
            }
          }
        }
        .share {
          margin: 50px 0 0 0;
          .title {
            text-align: center;
            font-size: 1.2rem;
            color: $color;
          }
          .shareList {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            .shareView {
              margin: 5px;
              width: 32px;
              height: 32px;
              transition: box-shadow 0.5s;
              border-radius: 50%;
              padding: 7px;

              &:hover {
                cursor: pointer;
                transition: all 0.5s;
                box-shadow: 0 0 5px 2px $border;
              }
              .logo {
                width: inherit;
                height: inherit;
              }
            }
          }
        }
      }
      .avatar {
        width: 120px;
        height: 120px;
        position: absolute;
        top: -60px;
        left: calc(100% / 2 - 60px);
        img {
          width: inherit;
          height: inherit;
          border-radius: 50%;
          box-shadow: 0 0 10px 4px $border;
        }
      }
    }
  }
}

.Qrcode {
  width: 100%;
  height: 350px;
  img {
    width: inherit;
    height: inherit;
  }
}

.more{ 
    margin-top: 40px;
    .actions {
       text-align: center;
       margin: 0 10px; 
       .primary {
            border:var(--c-text-accent) 1px solid;
            padding: 15px;
            color: var(--c-bg);
            background: var(--c-text-accent);
            border-radius: 4px;
       }
    }
}
</style>