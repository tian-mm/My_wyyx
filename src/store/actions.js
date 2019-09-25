// 引入api
import {
  reqClassify,
  reqKeyWord,
  reqSearchAndHot,
  reqRcommend
} from '../api/index.js'
// 引入
import {
  RECEIVE_LIST,
  RECEIVE_KEYWORD,
  RECEIVE_DEFAULT_KEYWORD,
  RECEIVE_RECOMMEND
} from "./mutations-type"
// 间接修改状态数据
export default {
  //获取分类列表的请求
  async getClassify({
    commit
  }) {
    const result = await reqClassify()
    if (result.code === 0) {
      const list = result.data
      commit(RECEIVE_LIST, [list])
    }
  },
  // 获取用户输入的数据
  async getKeyWord({
    commit
  }, keyword) {
    const result = await reqKeyWord(keyword)
    if (result.code === "200") {
      const searchKeyslist = result.data
      commit(RECEIVE_KEYWORD, searchKeyslist)
      console.log(searchKeyslist)
    }
  },
  // 获取默认显示搜索列表和热词
  async getSearchList({commit}){
    const result = await reqSearchAndHot()
    console.log(result)
    if (result.code === "200") {
      const defaultkeyWord = result.data
      commit(RECEIVE_DEFAULT_KEYWORD, defaultkeyWord)
    }
  },
  // 推荐列表
  async getRecommend({commit}){
    const result = await reqRcommend(1,3)
    if (result.code === '200') {
      const recommendList = result.data.result
      commit(RECEIVE_RECOMMEND, recommendList)
    }
  }

}