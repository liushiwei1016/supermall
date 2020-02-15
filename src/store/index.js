import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state = {
  carList: []
};

export default new Vuex.Store({
  state,
  /*mutations 的唯一目的就是修改state中的状态，并且每个方法做的事情尽可能单一一点*/
  mutations,
  actions,
  getters,
  modules: {}
})
