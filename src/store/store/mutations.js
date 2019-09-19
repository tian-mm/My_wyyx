import { RECEIVE_LIST } from "./mutations-type"

// 直接修改状态数据

// 引入
export default {
  // 获取分类组件
  [RECEIVE_LIST](state, [list]) {
    state.list = list
  }
}