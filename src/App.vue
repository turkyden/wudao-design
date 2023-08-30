<template>
  <div class="flex flex-col h-full" id="app">
    <div class="grow relative flex flex-col overflow-auto bg-gray-100">
      <div
        class="sticky top-0 left-0 right-0 z-20 flex bg-gray-100 grow-0 shrink-0 basis-auto h-14"
      >
        <div class="flex flex-1 items-center justify-between px-4">
          <div>
            <div class="text-xl font-semibold">吾道 DESIGN</div>
          </div>
          <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="hover">
            <div class="avatar-wrapper flex items-center space-x-2">
              <img class="user-avatar shadow-sm border border-solid border-gray-300 rounded-full w-10 h-10" :src="userInfo.photo" />
              <div>{{userInfo.name}}</div>
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item><i class="el-icon-user pr-1"></i>个人中心</el-dropdown-item>
              <el-dropdown-item @click.native="logout">
                <span class="block"><i class="el-icon-switch-button pr-1"></i>退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <!-- <div class="flex items-center flex-shrink-0">
            <div class="">
              <div
                class="relative inline-block text-left"
                data-headlessui-state=""
              >
                <div>
                  <button
                    class="inline-flex items-center rounded-[20px] py-1 pr-2.5 pl-1 text-sm text-gray-700 hover:bg-gray-200 false"
                    id="headlessui-menu-button-:r0:"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-headlessui-state=""
                  >
                    <div
                      class="shrink-0 flex items-center rounded-full bg-primary-600 mr-2"
                      style="
                        height: 32px;
                        font-size: 32px;
                        line-height: 32px;
                      "
                    >
                      <img class="w-10 h-10 rounded-full" :src="userInfo.photo" alt="photo">
                    </div>
                    {{userInfo.name}}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-3 h-3 ml-1 text-gray-700"
                      data-icon="ChevronDown"
                      aria-hidden="true"
                    >
                      <g id="chevron-down">
                        <path
                          id="Icon"
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>

      <div class="flex h-full bg-gray-100 border-t border-gray-200">
        <div
          class="w-[216px] shrink-0 pt-6 px-4 border-gray-200 cursor-pointer"
        >
          <div class="space-y-4">
            <div
              class="text-gray-700 flex items-center h-9 pl-3 space-x-2 rounded-lg"
              :class="active === 0 ? 'bg-white font-semibold' : 'font-medium'"
              @click="active = 0"
              style="box-shadow: rgba(16, 24, 40, 0.05) 0px 1px 2px"
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00016 1.3335C4.31826 1.3335 1.3335 4.31826 1.3335 8.00016C1.3335 8.88571 1.50651 9.7325 1.8212 10.5074C1.84962 10.5773 1.86597 10.6178 1.87718 10.6476L1.88058 10.6568L1.88016 10.66C1.87683 10.6846 1.87131 10.7181 1.86064 10.7821L1.46212 13.1732C1.44424 13.2803 1.42423 13.4001 1.41638 13.5041C1.40782 13.6176 1.40484 13.7981 1.48665 13.9888C1.58779 14.2246 1.77569 14.4125 2.0115 14.5137C2.20224 14.5955 2.38274 14.5925 2.49619 14.5839C2.60025 14.5761 2.72006 14.5561 2.82715 14.5382L5.2182 14.1397C5.28222 14.129 5.31576 14.1235 5.34036 14.1202L5.34353 14.1197L5.35274 14.1231C5.38258 14.1344 5.42298 14.1507 5.49297 14.1791C6.26783 14.4938 7.11462 14.6668 8.00016 14.6668C11.6821 14.6668 14.6668 11.6821 14.6668 8.00016C14.6668 4.31826 11.6821 1.3335 8.00016 1.3335ZM4.00016 8.00016C4.00016 7.44788 4.44788 7.00016 5.00016 7.00016C5.55245 7.00016 6.00016 7.44788 6.00016 8.00016C6.00016 8.55245 5.55245 9.00016 5.00016 9.00016C4.44788 9.00016 4.00016 8.55245 4.00016 8.00016ZM7.00016 8.00016C7.00016 7.44788 7.44788 7.00016 8.00016 7.00016C8.55245 7.00016 9.00016 7.44788 9.00016 8.00016C9.00016 8.55245 8.55245 9.00016 8.00016 9.00016C7.44788 9.00016 7.00016 8.55245 7.00016 8.00016ZM11.0002 7.00016C10.4479 7.00016 10.0002 7.44788 10.0002 8.00016C10.0002 8.55245 10.4479 9.00016 11.0002 9.00016C11.5524 9.00016 12.0002 8.55245 12.0002 8.00016C12.0002 7.44788 11.5524 7.00016 11.0002 7.00016Z"
                  fill="#155EEF"
                ></path>
              </svg>
              <div class="text-sm">吾道助手</div></div
            >
            <div
              class="text-gray-700 flex items-center h-9 pl-3 space-x-2 rounded-lg"
              :class="active === 1 ? 'bg-white font-semibold' : 'font-medium'"
              @click="active = 1"
              style=""
              ><svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.74786 9.89676L12.0003 14.6669M7.25269 9.89676L4.00027 14.6669M9.3336 8.80031C9.3336 9.53669 8.73665 10.1336 8.00027 10.1336C7.26389 10.1336 6.66694 9.53669 6.66694 8.80031C6.66694 8.06393 7.26389 7.46698 8.00027 7.46698C8.73665 7.46698 9.3336 8.06393 9.3336 8.80031ZM11.4326 3.02182L3.57641 5.12689C3.39609 5.1752 3.30593 5.19936 3.24646 5.25291C3.19415 5.30001 3.15809 5.36247 3.14345 5.43132C3.12681 5.5096 3.15097 5.59976 3.19929 5.78008L3.78595 7.96951C3.83426 8.14984 3.85842 8.24 3.91197 8.29947C3.95907 8.35178 4.02153 8.38784 4.09038 8.40248C4.16866 8.41911 4.25882 8.39496 4.43914 8.34664L12.2953 6.24158L11.4326 3.02182ZM14.5285 6.33338C13.8072 6.52665 13.4466 6.62328 13.1335 6.55673C12.8581 6.49819 12.6082 6.35396 12.4198 6.14471C12.2056 5.90682 12.109 5.54618 11.9157 4.82489L11.8122 4.43852C11.6189 3.71722 11.5223 3.35658 11.5889 3.04347C11.6474 2.76805 11.7916 2.51823 12.0009 2.32982C12.2388 2.11563 12.5994 2.019 13.3207 1.82573C13.501 1.77741 13.5912 1.75325 13.6695 1.76989C13.7383 1.78452 13.8008 1.82058 13.8479 1.87289C13.9014 1.93237 13.9256 2.02253 13.9739 2.20285L14.9057 5.68018C14.954 5.86051 14.9781 5.95067 14.9615 6.02894C14.9469 6.0978 14.9108 6.16025 14.8585 6.20736C14.799 6.2609 14.7088 6.28506 14.5285 6.33338ZM2.33475 8.22033L3.23628 7.97876C3.4166 7.93044 3.50676 7.90628 3.56623 7.85274C3.61854 7.80563 3.6546 7.74318 3.66924 7.67433C3.68588 7.59605 3.66172 7.50589 3.6134 7.32556L3.37184 6.42403C3.32352 6.24371 3.29936 6.15355 3.24581 6.09408C3.19871 6.04176 3.13626 6.00571 3.0674 5.99107C2.98912 5.97443 2.89896 5.99859 2.71864 6.04691L1.81711 6.28847C1.63678 6.33679 1.54662 6.36095 1.48715 6.4145C1.43484 6.4616 1.39878 6.52405 1.38415 6.59291C1.36751 6.67119 1.39167 6.76135 1.43998 6.94167L1.68155 7.8432C1.72987 8.02352 1.75402 8.11369 1.80757 8.17316C1.85467 8.22547 1.91713 8.26153 1.98598 8.27616C2.06426 8.2928 2.15442 8.26864 2.33475 8.22033Z"
                  stroke="#344054"
                  stroke-width="1.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <div class="text-sm">灵感渲染</div></div
            >
            
          </div>
        </div>

        <div class="grow">
          <div class="h-full p-2">
            <div class="bg-gray-100">
              <iframe
                v-show="active === 0"
                class="rounded-xl"
                src="https://udify.app/chat/HGgMphMK9n6Ek7eN"
                style="width: 100%; height: calc(100vh - 74px);"
                frameborder="0"
                allow="microphone"
              >
              </iframe>
              <iframe
                v-show="active === 1"
                class="rounded-xl"
                src="https://service-56dnmui5-1253291516.sh.apigw.tencentcs.com/release/"
                style="width: 100%; height: calc(100vh - 74px);"
                frameborder="0"
                allow="microphone"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>

      <el-dialog
        title="输入口令"
        :visible.sync="dialogVisible"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        :show-close="false"
        width="400px">
        <el-input v-model="code" placeholder="请输入口令码"></el-input>
        <br><br>
        <div class="text-center">联系 @dengju 要产品体验口令</div>
        <img class="w-full" src="@/assets/qrcode.png" alt="qrcode">
      </el-dialog>
    </div>
  </div>
</template>

<script>
const CODE = 8888;
export default {
  name: "App",
  data() {
    return {
      dialogVisible: false,
      active: 0,
      code: '',
      userInfo: {
        name: '-',
        photo: "https://files.authing.co/authing-console/default-user-avatar.png"
      }
    }
  },
  watch: {
    code(value) {
      if(value == CODE) {
        this.dialogVisible = false;
        window.localStorage.setItem('wudao_code', CODE);
      }
    }
  },
  mounted() {
    this.getUserInfo();
    // const code = window.localStorage.getItem('wudao_code');
    // if(code && (code == CODE)) {
    //   this.dialogVisible = false;
    // }else{
    //   this.dialogVisible = true;
    // }
  },
  methods: {
    async getUserInfo() {
      // 获取用户信息
      try {
        const userInfo = await this.$guard.trackSession();
        if(userInfo) {
          this.userInfo = userInfo;
        }else{
          window.location.href = '/login.html';
        }
      } catch (error) {
        console.log(error);
      }
    },
    logout() {
      this.$guard.logout();
    },
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
