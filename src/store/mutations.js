
import {
  RECEIVE_LIST,
  RECEIVE_KEYWORD,
  RECEIVE_DEFAULT_KEYWORD,
  RECEIVE_RECOMMEND
} from "./mutations-type"


// 直接修改状态数据

// 引入
export default {
  // 获取分类组件
  [RECEIVE_LIST](state, [list]) {
    state.list = list
  },
  // 获取用户输入的数据
  [RECEIVE_KEYWORD](state, searchKeyslist) {
    state.searchKeyslist = searchKeyslist
  },
  // 获取默认显示搜索列表和热词
  [RECEIVE_DEFAULT_KEYWORD](state, defaultkeyWord) {
    state.defaultkeyWord = defaultkeyWord
  },
  // 推荐列表
  [RECEIVE_RECOMMEND](state, recommendList){
    state.recommendList = recommendList
  }
}