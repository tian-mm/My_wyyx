// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入适配的插件
import 'lib-flexible/flexible'
// 引入路由
import router from './router'
// 引入mint-ui
import {
  Button
} from 'mint-ui'
// 声明整为全局组件
Vue.component(Button.name, Button)
// 让浏览器不提示
Vue.config.productionTip = false
new Vue({
  render:h=>h(App),
  router
}).$mount('#app')

