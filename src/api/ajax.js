// 用于封装ajax请求
// 引入axios
import axios from 'axios'
// 暴露出去函数
export default function ajax(url, data = {}, method = "GET") {
  // 返回一个promise对象
  return new Promise((resolve, reject) => {
    let promise
    if (method = "GET") {
      promise = axios.get(url, {
        params: data
      })
    } else {
      promise = axios.post(url, data)
    }

    promise.then(
      // 成功的回调
      response =>{
        resolve(response.data)
      },
      // 失败的回调
      error =>{
        reject('请求异常' + error)
      }
    )
  })
}