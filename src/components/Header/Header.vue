<template>
  <div class="profile-header">
    <i class="iconfont icon-home" @click="$router.replace('/')"></i>
    <!-- <img slot="logo" src="../../../public/imgs/logo/logo.png" alt /> -->
    <slot name="logo">
      <!-- <a href="javascript:;">发现</a>
      <a href="javascript:;">甄选家</a>-->
      <div class="find active">发现</div>
      <div class="zxj">甄选家</div>
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
  padding 0px 40px
  line-height 90px
  .img
    display block
  .find
    font-size 40px
    margin-right 20px
    &.active
      color red
      font-weight bold
  .zxj
    font-size 30px
    margin-right 20px
    margin-right 90px
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
    .icon-sousuo
      margin-right 20px
</style>