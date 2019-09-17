<template>
  <div class="footerContainer">
    <div class="guide_item">
      <router-link to="/firstview">
        <i class="icon icon_home"></i>
        <span>首页</span>
      </router-link>
    </div>
    <div class="guide_item">
      <router-link to="/classify">
        <i class="icon icon_classify"></i>
        <span>分类</span>
      </router-link>
    </div>
    <div class="guide_item">
      <router-link to="/things">
        <i class="icon icon_things"></i>
        <span>实物</span>
      </router-link>
    </div>
    <div class="guide_item">
      <router-link to="/shopcart">
        <i class="icon icon_shopcart"></i>
        <span>购物车</span>
      </router-link>
    </div>
    <div class="guide_item">
      <router-link to="/profile">
        <i class="icon icon_profile"></i>
        <span>个人</span>
      </router-link>
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
.footerContainer
  width 100%
  height 98px
  position fixed
  bottom 0px
  left 0px
  padding 10px 30px
  display flex
  align-items center
  box-sizing border-box
  .guide_item
    width 48px
    height 71px
    text-align center
    flex 1
    .icon
      display inline-block
      width 40px
      height 40px
    .icon_home
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
    .icon_classify
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
    .icon_things
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
    .icon_shopcart
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
    .icon_profile
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
    span  
      display block
      margin-top 10px
</style>