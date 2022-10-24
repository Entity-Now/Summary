<!--
 * @作者: 14770137
 * @Date: 2022-10-19 18:06:04
-->
<script setup lang='ts'>
import { ref, reactive, onMounted } from "vue";
import Modal from "../components/modal.vue";
import Snowflake from '../components/snowflake.vue'

const MyModal = ref<Boolean>(false);
const qrCode = ref("/image/QQ.jpg");
const OpenModal = function (Selected: number = 0): void {
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
    <Snowflake id="CanvasDom">
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
                <tr class="cell-table">
                  <td class="cell-head"><strong>前端</strong>:</td>
                  <td class="cell-body">Vue.js，HTML5， JavaScript，TypeScript，CSS3，SCSS</td>
                </tr>
              </li>
              <li>
                <tr class="cell-table">
                  <td class="cell-head"><strong>UI</strong>:</td>
                  <td class="cell-body">Element-plus、uni-app、ECharts</td>
                </tr>
              </li>
              <li>
                <tr class="cell-table">
                  <td class="cell-head"><strong>后端</strong>:</td>
                  <td class="cell-body">asp.net core，使用EF core操作sqlServer数据库</td>
                </tr>
              </li>
              <li>
                <tr class="cell-table">
                  <td class="cell-head"><strong>安卓</strong>:</td>
                  <td class="cell-body">了解Kotlin</td>
                </tr>
              </li>
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
              <a href="/Home" class="primary"> 进入博客 </a>
              <!-- <a href="" class="secondary"> 进入博客 </a> -->
            </p>
          </div>
          <div class="share">
            <div class="title">
              <strong>通过以下方式联系我</strong>
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
    </Snowflake>

    <Modal v-model:model-view="MyModal" style="width:250px;height:250px">
      <div class="Qrcode">
        <img :src="qrCode" alt="加我微信" />
      </div>
    </Modal>
  </div>
</template>
    
    
<style lang="scss" scope>
$back: rgba(141, 138, 138, 0.356);
$border: rgb(129, 128, 128);
$color: white;

h1 {
  margin: 0;
}

.cell-table {
  all: initial;
  padding: 7px 0;
  box-sizing: border-box;

  &:nth-child(2n) {
    background: transparent;
  }

  .cell-head {
    all: initial;
    letter-spacing: .20em;
    color: $color;
    font-size: 1.2rem;
  }

  .cell-body {
    all: initial;
    color: aliceblue;
  }
}

/* SCSS code here*/
#CanvasDom {
  .Content {
    position: relative;
    width: 95%;
    height: auto;
    max-width: 1100px;
    border-radius: 17px;
    background: $back;
    // filter:blur(3px);
    backdrop-filter: blur(2px);

    // @media all and (max-height:700px){
    //   margin: 120px 0 60px 0;
    // }
    .describe {
      width: 100%;
      height: calc(100% - 60px);
      margin-top: 60px;
      padding: 14px;
      box-sizing: border-box;

      h1 {
        text-align: center;
        color: aliceblue;
        margin: 10px 0;
      }

      .information {
        margin: 4px 0;
        color: $color;
        font-size: 1.2em;

        .title {
          margin: 10px 0;
          font-size: 1.4rem;
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

.Qrcode {
  width: 100%;
  height: 100%;

  img {
    width: inherit;
    height: inherit;
  }
}

.more {
  margin-top: 40px;

  .actions {
    text-align: center;
    margin: 0 10px;

    .primary {
      border: var(--c-text-accent) 1px solid;
      padding: 15px;
      color: var(--c-bg);
      background: var(--c-text-accent);
      border-radius: 4px;
    }
  }
}
</style>