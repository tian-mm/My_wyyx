<template>
  <div class="shopcart">
    <div class="shop-header">
      <span>购物车</span>
      <span>领券</span>
    </div>
    <div class="shop-content">
      <ul class="shop-content-header">
        <li>
          <span>30天无忧退货</span>
        </li>
        <li>
          <span>48小时快速退款</span>
        </li>
        <li>
          <span>满88元免邮费</span>
        </li>
      </ul>
      <div class="shop-content-content">
        <div class="content-shop">
          <img src="../../../public/imgs/shop.png" alt="">
          <p>去加载点什么吧</p>
        </div>
       <mt-button class="btn" type="default">登录</mt-button>
      </div>
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
.shopcart
  width 100%
  // height 100%
  // background-color #F4F4F4
  .shop-header
    width 100%
    height 88px
    background-color white
    padding 0px 30px
    box-sizing border-box
    line-height 88px
    span 
      &:first-child
        float left
        font-size 38px
      &:last-child
        float right
        font-size 35px
        color #ab2b2b
  .shop-content
    width 100%
    .shop-content-header
      height 70px
      background-color #eee
      display flex
      justify-content center
      padding 0 30px
      line-height 70px
      li
        margin-right 100px
        &:last-child
          margin-right 0px
    .shop-content-content
      display flex
      text-align center
      background-color #F4F4F4
      position relative
      height 1100px
      width 100%
      .content-shop
        position absolute
        top 400px
        left 233px
        font-size 30px
        color #ccc
        img
          width 248px
          height 248px
      .btn
        position absolute
        top 700px
        left 75px
        width 600px
        height 100px
        font-size 40px
        color white
        background-color #B4282D
    
</style>