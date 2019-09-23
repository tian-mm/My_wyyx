// 引入封装的axios
import ajax from './ajax.js'
const BASE_URL = '/api'
// 获取Classify组件中的数据
export const reqClassify = () => ajax('/classify')
// 实物界面数据请求
export const reqThings = () => ajax('/things')
// 搜索关键字请求
export const reqKeyWord = (value) => ajax(BASE_URL + `/xhr/search/searchAutoComplete.json?keywordPrefix=${value}`)
//默认显示搜索界面和热词
export const reqSearchAndHot = () => ajax(BASE_URL + `/xhr/search/init.json`)
// 获取推荐列表的请求
// https://m.you.163.com/topic/v1/find/recManual.json
// export const reqRcommend = (page, size) => ajax(BASE_URL + `/topic/v1/find/recAuto.json?page=${page}&size=${size}`)
 export const reqRcommend = (page, size) => ajax(BASE_URL + `/topic/v1/find/recAuto.json?page=${page}&size=${size}`)
