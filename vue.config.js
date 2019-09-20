//  脚手架三配置适配
 module.exports = {
   css: {
     loaderOptions: {
       css: {},
       postcss: {
         plugins: [
           require('postcss-px2rem')({
             remUnit: 75
           })
         ]
       }
     }
   },
    // 配置跨域
     devServer: {
    proxy: {
      '/api': {
        target: 'http://m.you.163.com', // 目录地址
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '', // rewrite path
         
        },
      }
    }
  }

 }