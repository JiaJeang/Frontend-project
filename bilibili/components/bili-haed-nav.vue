<script setup>
import "@/style/bili-head-nav.css";
import { ref } from "vue";
const show = ref(false);
let cnt = null;

function enter() {
  clearTimeout(cnt);
  show.value = true;
}

function leave() {
  cnt = setTimeout(() => {
    show.value = false;
  }, 200);
}
</script>

<template>
  <div class="box">
    <img class="banner" src="../assets/banner.avif" alt="" />
    <div class="logo-wrap">
      <a href="https://www.bilibili.com/?spm_id_from=333.1007.0.0">
        <img alt="B站 b站" width="162" height="78" src="../assets/logo.png" />
      </a>
    </div>
    <div class="nav-wrap">
      <ul class="left">
        <li>
          <a href="https://www.bilibili.com/?spm_id_from=333.1007.0.0">
            <svg
              t="1779705885607"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="5115"
            >
              <path
                d="M306.005333 117.632L444.330667 256h135.296l138.368-138.325333a42.666667 42.666667 0 1 1 60.373333 60.373333l-78.037333 77.952L789.333333 256A149.333333 149.333333 0 0 1 938.666667 405.333333v341.333334a149.333333 149.333333 0 0 1-149.333334 149.333333h-554.666666A149.333333 149.333333 0 0 1 85.333333 746.666667v-341.333334A149.333333 149.333333 0 0 1 234.666667 256h88.96L245.632 177.962667a42.666667 42.666667 0 0 1 60.373333-60.373334zM789.333333 341.333333h-554.666666a64 64 0 0 0-63.701334 57.856L170.666667 405.333333v341.333334a64 64 0 0 0 57.856 63.701333L234.666667 810.666667h554.666666a64 64 0 0 0 63.701334-57.813334L853.333333 746.666667v-341.333334A64 64 0 0 0 789.333333 341.333333zM341.333333 469.333333a42.666667 42.666667 0 0 1 42.666667 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666666-42.666667z m341.333334 0a42.666667 42.666667 0 0 1 42.666666 42.666667v85.333333a42.666667 42.666667 0 1 1-85.333333 0v-85.333333a42.666667 42.666667 0 0 1 42.666667-42.666667z"
                p-id="5116"
                fill="#ffffff"
              ></path>
            </svg>
            <span>首页</span>
          </a>
        </li>
        <li>
          <a href="https://www.bilibili.com/anime/?spm_id_from=333.1007.0.0"
            >番剧</a
          >
        </li>
        <li>
          <a href="https://live.bilibili.com/?spm_id_from=333.1007.0.0">直播</a>
        </li>
        <li>
          <a href="https://game.bilibili.com/platform?spm_id_from=333.1007.0.0"
            >游戏中心</a
          >
        </li>
        <li>
          <a
            href="https://show.bilibili.com/platform/home.html?msource=pc_web&spm_id_from=333.1007.0.0"
            >会员购</a
          >
        </li>
        <li>
          <a
            href="https://manga.bilibili.com/?from=bill_top_mnav&spm_id_from=333.1007.0.0"
            >漫画</a
          >
        </li>
        <li>
          <a
            href="https://www.bilibili.com/match/home/?spm_id_from=333.1007.0.0"
            >赛事</a
          >
        </li>
        <li>
          <a href="https://app.bilibili.com/?spm_id_from=333.1007.0.0">
            <svg
              t="1779706059279"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="11340"
            >
              <path
                d="M212.906667 342.912h3.84-3.84zM810.410667 341.333333a25.685333 25.685333 0 0 0 0 51.370667H810.666667c42.282667 0.213333 76.672 34.688 76.672 76.970667v298.069333a76.8 76.8 0 0 1-40.405334 67.626667 76.245333 76.245333 0 0 1-36.522666 9.429333H213.589333a76.501333 76.501333 0 0 1-51.2-19.754667 76.8 76.8 0 0 1-25.728-57.301333v-298.154667c0-42.496 34.56-76.970667 76.928-76.970666h-0.384A25.685333 25.685333 0 0 0 212.736 341.333333 128.426667 128.426667 0 0 0 85.333333 469.589333v298.069334a128.426667 128.426667 0 0 0 120.746667 127.957333c2.474667 0.213333 4.949333 0.384 7.509333 0.384h596.906667a126.72 126.72 0 0 0 68.309333-19.968A128.213333 128.213333 0 0 0 938.666667 767.658667v-298.069334A128.426667 128.426667 0 0 0 811.264 341.333333c-0.298667 0.085333-0.597333 0-0.853333 0z m1.450666 52.906667h1.706667-1.706667zM810.666667 342.954667h3.84H810.666667z"
                fill="#ffffff"
                p-id="11341"
              ></path>
              <path
                d="M500.096 722.602667c0.213333 0.085333 0.298667 0.085333 0.469333 0.213333a24.490667 24.490667 0 0 0 3.797334 1.408c0.426667 0.085333 0.853333 0.298667 1.28 0.426667a33.877333 33.877333 0 0 0 4.608 0.597333l0.554666 0.085333 1.365334-0.085333 1.408 0.085333a22.869333 22.869333 0 0 0 10.666666-2.645333l185.685334-140.117333a29.44 29.44 0 0 0 13.525333-35.968c-5.546667-14.378667-20.821333-20.565333-33.450667-13.952L535.893333 656.213333c-0.213333 0.085333-0.426667 0-0.426666-0.213333V241.621333c0-11.946667-6.485333-23.424-16.938667-26.965333-17.066667-5.76-32.597333 8.106667-32.597333 25.941333v413.824c0 0.213333-0.213333 0.298667-0.426667 0.213334L334.208 532.48c-14.634667-7.68-32.725333 1.834667-35.285333 21.205333a28.672 28.672 0 0 0 14.933333 28.458667l186.282667 140.373333z"
                fill="#ffffff"
                p-id="11342"
              ></path>
            </svg>
            下载客户端</a
          >
        </li>
      </ul>
      <div class="center-wrap">
        <div class="center">
          <input type="text" placeholder="bilibili" />
          <img src="@/assets/search.svg" alt="" />
        </div>
      </div>
      <ul class="right">
        <li>
          <a href="">
            <div class="login" @mouseenter="enter" @mouseleave="leave">
              登录
              <Transition name="fade">
                <div
                  class="show-login"
                  v-if="show"
                  @mouseenter="enter"
                  @mouseleave="leave"
                >
                  <p>登录后你可以:</p>
                  <ul class="tex">
                    <span class="item">
                      <img src="@/assets/hd.svg" alt="" />
                      免费看高清视频</span
                    >
                    <span class="item">
                      <img src="@/assets/danmu.svg" alt="" />
                      发表弹幕/评论</span
                    >
                    <span class="item">
                      <img src="@/assets/time.svg" alt="" />
                      多端同步播放记录</span
                    >
                    <span class="item">
                      <img src="@/assets/video.svg" alt="" />
                      热门番剧影视看不停</span
                    >
                  </ul>
                  <div class="qLogin">立即登录</div>
                  <div class="bottom">
                    首次使用?&nbsp;&nbsp;<span>点我注册</span>
                  </div>
                </div>
              </Transition>
            </div>
          </a>
        </li>
        <li>
          <a href="https://account.bilibili.com/big?spm_id_from=333.1007.0.0"
            ><img src="@/assets/vip.svg" alt="" /><span>大会员</span></a
          >
        </li>
        <li>
          <a href=""
            ><img src="@/assets/xiaoxi.svg" alt="" /><span>消息</span></a
          >
        </li>
        <li>
          <a href=""
            ><img src="@/assets/dongtai.svg" alt="" /><span>动态</span></a
          >
        </li>
        <li>
          <a href=""><img src="@/assets/shou.svg" alt="" /><span>收藏</span></a>
        </li>
        <li>
          <a href=""
            ><img src="@/assets/history.svg" alt="" /><span>历史</span></a
          >
        </li>
        <li>
          <a href=""
            ><img src="@/assets/chaungzuo.svg" alt="" /><span>创作中心</span></a
          >
        </li>
        <li>
          <a href=""
            ><img src="" alt="" />
            <div class="tougao">
              <img src="@/assets/tougao.svg" alt="" /><span>投稿</span>
            </div></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="less">
// 登录显示过渡效果
.show-login.fade-enter-active,
.show-login.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.show-login.fade-enter-from,
.show-login.fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

// 链接抖动动画效果
@keyframes shake {
  0% {transform: translateY(0);}
  25% {transform: translateY(-4px);}
  50% {transform: translateY(-2px);}
  100% {transform: translateY(0);}
}
.left li a:hover,
.right li a:hover img {
  animation: shake 0.4s ease;
}

</style>