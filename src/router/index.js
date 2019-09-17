// 引入vue
import Vue from 'vue'
// 配置路由器
import VueRouter from 'vue-router'
// 引入路由
import routes from './routes.js'
// 声明使用路由器
Vue.use(VueRouter)
// 暴露出去路由器
export default new VueRouter({
  mode: "history",
  routes
})