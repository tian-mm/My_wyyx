<template>
  <div class="footerContainer">
    <div class="guide_item">
      <a @click="goto('/')">
        <i class="icon icon_home" :class="{'on':$route.path === '/firstview'}"></i>
        <span :class="{'active':$route.path === '/firstview'}">首页</span>
      </a>
    </div>
    <div class="guide_item">
      <a  @click="goto('/classify')">
      <i class="icon icon_classify" :class="{'on':$route.path.indexOf('/classify') !== -1}"></i>
        <span :class="{'active':$route.path.indexOf('/classify') !== -1}">分类</span>
      </a>
    </div>
    <div class="guide_item">
      <a  @click="goto('/things')">
        <i class="icon icon_things" :class="{'on':$route.path.indexOf('/things') !== -1}"></i>
        <span :class="{'active':$route.path.indexOf('/things') !== -1}">实物</span>
      </a>
    </div>
    <div class="guide_item">
      <a  @click="goto('/shopcart')">
        <i class="icon icon_shopcart" :class="{'on':$route.path === '/shopcart'}"></i>
        <span :class="{'active':$route.path === '/shopcart'}">购物车</span>
      </a>
    </div>
    <div class="guide_item">
      <a  @click="goto('/profile')">
        <i class="icon icon_profile" :class="{'on':$route.path === '/profile'}"></i>
        <span :class="{'active':$route.path === '/profile'}">个人</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goto(path){
      // 判断之前的路径和现在的路径是否一样,如果一样则不跳转
      if (this.$route.path !== path) {
        this.$router.replace(path)
      }
    }
  }
}
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
  background-color white
  z-index 1
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
      &.on
        background-position 0 -10200px
    .icon_classify
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
      &.on
        background-position 0 -10200px
    .icon_things
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
      &.on
        background-position 0 -10200px
    .icon_shopcart
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
      &.on
        background-position 0 -10200px
    .icon_profile
      background-image url('../../../public/imgs/footericon.png')
      background-position 0 -12000px
      background-size cover
      &.on
        background-position 0 -10200px
    span  
      display block
      margin-top 10px
      &.active
        color red


</style>