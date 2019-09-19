// 总的store
// 引入Vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入四个对象
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

// 声明使用vuex
Vue.use(Vuex)
// 暴露出去仓库对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
