<template>
  <div class="dark w-full p-7 md:p-12">
    <div class="navbar flex w-full items-center justify-between z-50">
      <div class="flex gap-8 items-center justify-between">
        <div class="logo w-36">
          <a class="flex place-items-center lg:p-0" href="/"
            ><div
              class="relative shadow-black/5 shadow-none rounded-none"
              style="max-width: 484px"
            >
              <img
                src="@/assets/wudao_dark.png"
                class="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-none hidden md:block"
                alt="Building AI Logo"
                width="484"
                data-loaded="true"
              />
            </div>
            <div
              class="relative shadow-black/5 shadow-none rounded-none"
              style="max-width: 400px"
            >
              <img
                src="@/assets/wudao_dark.png"
                class="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-none block md:hidden"
                alt="Building AI Logo"
                width="400"
                data-loaded="true"
              /></div
          ></a>
        </div>
        <div
          class="hidden md:flex gap-8 items-center justify-between mt-1"
        ></div>
      </div>
      <router-link v-if="userInfo" to="/dashboard" class="flex flex-row items-center justify-end">
        <div class="bg-white/10 hover:bg-white/20 transition text-white px-4 py-2 rounded-full flex items-center space-x-4">
          <img class="user-avatar shadow-sm border border-solid border-gray-300 rounded-full w-8 h-8" :src="userInfo.photo" />
          <div>{{userInfo.name}}</div>
        </div>
      </router-link>
      <div v-else @click="showLoginModel" class="flex flex-row items-center justify-end">
        <div class="bg-gray-700 hover:bg-gray-800 transition text-white px-4 py-2 rounded-lg">Sign in</div>
      </div>
    </div>
    
    <div>
      <div class="relative flex align-middle items-center justify-center w-full mt-16 z-10">
        <div class="w-full md:w-2/5 rounded-3xl">
          <img-comparison-slider class="w-full rounded-xl">
            <img slot="first" src="@/assets/home/before.png" />
            <img slot="second" src="@/assets/home/after.png" />
            <!-- <svg  xmlns="http://www.w3.org/2000/svg" width="100" viewBox="-8 -3 16 6">
              <path stroke="#fff" d="M -5 -2 L -7 0 L -5 2 M -5 -2 L -5 2 M 5 -2 L 7 0 L 5 2 M 5 -2 L 5 2" stroke-width="1" fill="#fff" vector-effect="non-scaling-stroke"></path>
            </svg> -->
            <div slot="handle" style="display:grid;grid-auto-flow:column;gap:8px;place-content:center;flex-shrink:0;width:56px;height:56px;border-radius:50%;border-style:solid;border-width:2px;pointer-events:auto;backdrop-filter:blur(7px);-webkit-backdrop-filter:blur(7px);box-shadow:0 0 7px rgba(0,0,0,.35)"><div style="width:0;height:0;border-top:8px solid transparent;border-right:10px solid;border-bottom:8px solid transparent"></div><div style="width:0;height:0;border-top:8px solid transparent;border-right:10px solid;border-bottom:8px solid transparent;transform:rotate(180deg)"></div></div>
          </img-comparison-slider>
        </div>
      </div>

      <div class="middle w-full h-full flex flex-col justify-center items-center mt-16">
        <div class="relative flex flex-col text-center z-10">
          <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-white font-tencent">AIGC 时代的园林景观渲染</h1>
          <h2 class="text-md md:text-lg lg:text-xl font-normal mt-1 text-white font-tencent">从草稿生成高质量效果方案</h2>
        </div>
        <div @click="userInfo ? $router.push('/dashboard') : showLoginModel()" class="z-10">
          <button class="box-border mt-10 bg-slate-50 px-4 py-2 border rounded text-black font-semibold hover:bg-transparent hover:text-white hover:border hover:border-white transition">快速开始</button>
        </div>
        <div class="middle-bg absolute top-0 left-0 right-0 w-full z-0 pointer-events-none">
          <img src="@/assets/home/bg.png" alt="background" class="w-full">
        </div>
      </div>
    </div>

    <div class="footer flex w-full items-center justify-between font-mono text-sm">
      <div class="w-full flex justify-center items-center align-middle text-center h-24 mt-24">
        Wudao AIGC Studio Development. Copyright © <!-- -->2023<!-- --> Wudao. All rights reserved.</div>
      <div class="footer-lang-switcher">

      </div>
    </div>

    <!-- 登录挂载位置 -->
    <div id="authing-guard-container"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "Home-d",
  data() {
    return {
      hasInitialed: false,
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const userInfo = await this.$guard.trackSession();
      this.$store.dispatch('setuserInfo', userInfo);
      if(this.$route.query.showLogin == 1) {
        this.showLoginModel();
      }
    },
    showLoginModel() {
      if(!this.hasInitialed) {
        // 使用 start 方法挂载 Guard 组件到你指定的 DOM 节点，登录成功后返回 userInfo
        this.$guard.start("#authing-guard-container").then((userInfo) => {
          console.log("userInfo: ", userInfo);
          setTimeout(() => {
            this.$guard.hide();
            this.$router.push('/dashboard');
          }, 2000);
        });
        this.hasInitialed = true;
      }else{
        this.$guard.show();
      }
    },
  },
};
</script>

<style>
:root {
  --foreground-rgb: 255,255,255;
  --background-start-rgb: 0,0,0;
  --background-end-rgb: 0,0,0
}

html {
  color: #000
}

body {
  background-color: #000;
}

.dark {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(to bottom,transparent,rgb(var(--background-end-rgb))) rgb(var(--background-start-rgb));
}

.authing-ant-modal-mask{
  --tw-backdrop-blur: blur(12px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
}
</style>