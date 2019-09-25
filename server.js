//1. 引入 express
let express = require('express')
let data = require('./data')
let conMysql = require('./mysql')
// 2. 创建 app 服务器对象
let app = express()
//3. 设置路由
app.get('/', (request, response) => {
 response.send('<h2>我是主界面</h2>')
})

// 设置请求路由
app.get('/logSys', (request, response) => {
  let reqData = request.query   // 前台发送请求过来的数据 string 类型的
  // console.log(typeof reqData);  
  console.log(typeof data.phone);
  if (reqData.phone*1 === data.phone) {
     response.send("我是后台服务器请求返回过来的数据, 你的请求成功了=====")
  }else {
    response.send("抱歉,手机号不正确")
    return 
  }  
})

// 4. 绑定端口监听
app.listen('5000',(err) => {
 if (!err) {

   console.log("服务器启动成功了, 当前地址为 http://localhost:5000 ");

   conMysql()
 }else {
   console.log("服务器启动失败了, ", err);
 }
})



