<template>
  <div class="search">
    <div class="header">
      <input class="input" type="text"/>
      <img src="../../../public/imgs/search.png" alt="">
      <span class="placeholder">女士可机洗毛衫 上新</span>
      <div class="cancel" @click="$router.replace('/')">取消</div>
    </div>
    <!-- 热门搜索 -->
    <div class="Popularsearch">
      <div class="Popularsearch-header">
        <h3>热门搜索</h3>
      </div>
      <ul class="search-list">
        <li class="active">
          99%好评 懒人拖把
          <!-- <span class="active"></span> -->
        </li>
        <li>
          99%好评 懒人拖把
        </li>
        <li>
          99%好评 懒人拖把
        </li>
        <li>
          睡衣
        </li>
        <li>
          99%好评 懒人拖把
        </li>
        <li>
          99%好评 懒人拖把
        </li>
        <li>
          99%好评 懒人拖把
        </li>
        <li>
          99%好评 懒人拖把
        </li>
        <li>
          睡衣
        </li>
        <li>
          男鞋
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    
    };
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.search
  width 100%
  // height 100%
  background-color #EEEEEE
  .header
    width 100%
    height 88px
    background-color white
    display flex
    align-items center
    position relative
    img
      width 28px
      height 28px
      position absolute
      left 70px
      top 30px
    .placeholder
      display inline-block
      font-size 25px
      color #ccc
      position absolute
      top 33px
      left 105px
    .input
      width 604px
      height 56px
      margin-left 35px
      border-radius 5%
      background-color #F4F4F4
      outline none
    .cancel
      margin-left 30px
      font-size 30px
  .Popularsearch
    background-color white
    width 100%
    height 406px
    .Popularsearch-header
      width 100%
      height 90px
      // text-align center
      line-height 90px
      margin-left 10px
      h3
        font-size 30px
        color #ccc
    .search-list
      float right
      display flex
      flex-wrap wrap
      li
        border 1px solid #ccc
        margin 0px 10px 10px 30px
        padding 15px
        border-radius 5%
        &.active
          border 1px solid #b4282d
          color #b4282d
        span
          font-size 24px
          color #ccc
</style>