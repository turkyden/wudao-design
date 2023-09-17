import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建一个新的 store 实例
const store = new Vuex.Store({
  state: {
    userInfo: undefined
  },
  mutations: {
    SET_userInfo (state, userInfo) {
      state.userInfo = { ...state.userInfo, ...userInfo };
    },
  },
  actions: {
    setuserInfo({ commit }, userInfo) {
      if(userInfo){
        commit('SET_userInfo', userInfo);
      }
    },
  },
  getters: {
    userInfo: state => state.userInfo,
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