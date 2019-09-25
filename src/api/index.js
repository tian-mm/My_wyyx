// 引入封装的axios
import ajax from './ajax.js'
const BASE_URL = '/api'
const URL = '/aaa'
// 获取Classify组件中的数据
export const reqClassify = () => ajax('/classify')
// 实物界面数据请求
export const reqThings = () => ajax('/things')
// 搜索关键字请求
export const reqKeyWord = (value) => ajax(BASE_URL + `/xhr/search/searchAutoComplete.json?keywordPrefix=${value}`)
//默认显示搜索界面和热词
export const reqSearchAndHot = () => ajax(BASE_URL + `/xhr/search/init.json`)
// 获取推荐列表的请求
 export const reqRcommend = (page, size) => ajax(BASE_URL + `/topic/v1/find/recAuto.json?page=${page}&size=${size}`)
// 手机验证码的登录的请求
export const reqPhoneCodeLogin = (phm) => ajax(URL + '/profile',{req: phm})
// 邮箱密码登录
export const reqEmailPwdLogin = (emp) => ajax(URL + '/profile',{req: emp})
// 手机号密码登录
export const reqPhonePwd = (a) => ajax(URL +'/profile',{req:a})