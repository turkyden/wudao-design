import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "./style.css";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router.js";
import store from "./store.js";
import confetti from "canvas-confetti";
import VueClipboard from "vue-clipboard2";
import TxcChangeLog from "txc-change-log";
import "highlight.js/styles/atom-one-dark.css";
import NProgress from "nprogress"; // progress bar

import VueCropper from "vue-cropper";
import "img-comparison-slider";
import VueSignature from "vue-signature-pad";

import { GuardPlugin } from '@authing/guard-vue2'
import '@authing/guard-vue2/dist/esm/guard.min.css'

import "./permission.js";

Vue.use(GuardPlugin, {
  appId: "64ef523289c73108a434aee3",
  // 如果你使用的是私有化部署的 Authing 服务，需要传入自定义 host，如:
  // host: 'https://my-authing-app.example.com',

  // 默认情况下，会使用你在 Authing 控制台中配置的第一个回调地址为此次认证使用的回调地址。
  // 如果你配置了多个回调地址，也可以手动指定（此地址也需要加入到应用的「登录回调 URL」中）：
  // redirectUri: "YOUR_REDIRECT_URI"
});

const txcChangeLog = new TxcChangeLog({ id: 607788 });
txcChangeLog.activateChangeLog();

Vue.use(VueCropper);
Vue.use(VueSignature);

NProgress.configure({ showSpinner: false, style: "green" });
Vue.prototype.$nprogress = NProgress;

Vue.use(VueClipboard);

Vue.prototype.$confetti = (c) =>
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    zIndex: 10000,
    ...c,
  });

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/img-comparison-slider/];

Vue.use(Element, {
  size: "medium",
});

export default new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");