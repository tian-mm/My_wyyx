<template>
  <div class="firstViewContainer">
    <div class="viewHeader">
      <img class="logo" src="../../../public/imgs/logo/logo.png" alt />
      <div class="input"></div>
      <div class="searchoricon" @click="goSearch">
        <i class="search"></i>
        <span class="placeholder">搜索商品, 共22674款好物</span>
      </div>
      <div class="login">登录</div>
    </div>
    <ul class="navList">
      <span>居家生活</span>
      <span>服饰鞋包</span>
      <span>美食酒水</span>
      <span>个护清洁</span>
      <span></span>
    </ul>
  </div>
</template>

<script>
import moduleName from "../../../public/imgs/icon-search.png";
export default {
  data() {
    return {};
  },
  methods: {
    // 跳转到search页面
    goSearch() {
      this.$router.replace("/search");
    }
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.firstViewContainer
  width 100%
  .viewHeader
    width 100%
    height 88px
    display flex
    align-items center
    padding 0 20px
    box-sizing border-box
    position relative
    .logo
      width 138px
      height 40px
      margin-right 20px
    .input
      height 56px
      width 442px
      border-radius 5%
      background-color #ccc
      margin-right 20px
    .searchoricon
      display flex
      position absolute
      left 220px
      .search
        display inline-block
        width 28px
        height 28px
        background-image url('../../../public/imgs/icon-search.png')
        background-repeat no-repeat
        background-size 100% 100%
        margin-right 20px
    .login
      width 74px
      height 40px
      border 1px solid #b4282d
      border-radius 5%
      text-align center
      line-height 40px
      color #b4282d
</style>