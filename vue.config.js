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
   }
 }