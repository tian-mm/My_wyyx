<template>
  <div>
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
// 引入footerGuide组件
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
  data() { 
    return {

    }
  },
  components:{
    FooterGuide
  }
 }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
</style>
