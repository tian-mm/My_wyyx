// 引入koa
let Koa = require('koa')
// 引入koa-router
let KoaRouter = require('koa-router')
// 引用data.json
let datas = require('./datas/login.json')
// 创建应用的实例
const app = new Koa()
// 创建路由器
const router = new KoaRouter() 

// 注册路由
// ctx -> 上下文(包括请求和响应的数据)
router.get('/profile',(ctx,next)=>{
  //1. 接收请求参数
  // 获取用户传过来的参数
   let req = ctx.query.req
  //2.处理请求数据
  // msg="服务器返回的数据222"
  console.log(req)
  //3. 返回响应数据
  ctx.body = req
})


// 声明使用路由器
app.use(router.routes())
    // 声明使用路由器的所有的方法
    .use(router.allowedMethods())

// 监听端口
app.listen('3000',()=>{
  console.log('服务器启动成功')
  console.log('当前的地址为:http://localhost:3000')
})