// 引入api
import {
  reqClassify
} from '../../api'
// 引入
import {
  RECEIVE_LIST
} from "./mutations-type"
// 间接修改状态数据
export default {
  //分类的请求
  async getClassify({
    commit
  }) {
    const result = await reqClassify()
    if (result.code === 0) {
      const list = result.data
      commit(RECEIVE_LIST, [list])
    }
    console.log(result.data)
    console.log(result)

  }
}