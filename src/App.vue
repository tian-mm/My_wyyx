<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
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
  },
  mounted() {
    this.$store.dispatch('getClassify')
    this.$store.dispatch('getSearchList')
  },
 }
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
</style>
