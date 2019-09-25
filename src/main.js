// 引入vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入适配的插件
import 'lib-flexible/flexible'
// 引入路由
import router from './router'
// 引入store对象
import store from './store/index.js'
// 引入mock
import './mock/mock.server.js'
// 引入表单验证的插件(注册为了全局的插件)
import './validate.js'
// 引入Header组件
import Header from './components/Header/Header.vue'
// 将Header组件注册为全局组件
Vue.component('Header', Header)
// 引入mint-ui
import {
  Button
} from 'mint-ui'
// 声明整为全局组件
Vue.component(Button.name, Button)

Vue.prototype.$eventBus = new Vue()


// 引入图片懒加载的插件
// import VueLazyload from 'vue-lazyload'
// 引入图片
// import loading from '../public/imgs/loading.gif'
// 让浏览器不提示
Vue.config.productionTip = false
new Vue({
  render:h=>h(App),
  router,
  store
}).$mount('#app')

