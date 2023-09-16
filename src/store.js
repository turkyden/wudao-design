import Vue from "vue";
import Vuex from 'vuex';
import $vue from './main';

Vue.use(Vuex);

// 创建一个新的 store 实例
const store = new Vuex.Store({
  state: {
    userinfo: {
      name: '-',
      photo: "https://files.authing.co/authing-console/default-user-avatar.png"
    }
  },
  mutations: {
    SET_USERINFO (state, userinfo) {
      state.userinfo = { ...state.userinfo, ...userinfo };
    },
  },
  actions: {
    async login({ commit }) {
      // 获取用户信息
      try {
        const userInfo = await $vue.$guard.trackSession();
        if(userInfo) {
          commit('SET_USERINFO', userInfo);
          return true
        }else{
          return false
        }
      } catch (error) {
        console.log(error);
        return false
      }
    }
  },
  getters: {
    userinfo: state => state.userinfo,
    isWhiteListed: state => [
      "brainzhou",
      "karlyzhu",
      "morganyang",
      "jessiezwang",
      "rechardyang",
      "flowerzhou",
      "seanzhang",
      "jeasonqiu",
      "joyzeng",
      "kenyuan",
      "weigeng",
      "derekzhuo",
      "stevensha",
      "hunteran",
      "kantli",
      "dengjudeng",
      "bladeyang",
      "lexiegao",
      "mooji",
    ].includes(state.rtx),
    isAdmin: state => [
      "jeasonqiu",
      "karlyzhu",
      "dengjudeng",
      "hunteran",
      "derekzhuo",
      "bladeyang",
      "kenyuan",
      "kantli",
      "mooji",
      "weigeng",
    ].includes(state.rtx)
  }
});

export default store