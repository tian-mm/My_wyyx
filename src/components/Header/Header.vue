<template>
  <div class="profile-header">
    <i class="iconfont icon-home" @click="$router.replace('/')"></i>
    <!-- <img slot="logo" src="../../../public/imgs/logo/logo.png" alt /> -->
    <slot name="logo">
      <router-link to='/things/tab' active-class = 'active'>发现</router-link>
      <router-link to='/things/index' active-class = 'active'>甄选家</router-link>
    </slot>
    <div class="icon-right">
      <i class="iconfont icon-sousuo" @click="$router.replace('/search')"></i>
      <i class="iconfont icon-gouwuche" @click="$router.replace('/shopcart')"></i>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.profile-header
  height 90px
  width 750px
  box-sizing border-box
  background #FAFAFA
  display flex
  align-items center
  padding 0px 40px
  position relative
  z-index 9
  .active
    font-size 30px
    margin-right 30px
    color red
    font-weight bold
  .img
    display block
  i
    font-size 60px
  .icon-home
    margin-right 180px
  img
    width 150px
    height 50px
    vertical-align middle
    margin-right 160px
  .icon-right
    position absolute
    left 560px
    .icon-sousuo
      margin-right 20px
</style>