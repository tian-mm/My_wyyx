<template>
  <div class="firstViewContainer">
    <!-- 头部 -->
      <div class="header">
        <div class="viewHeader">
        <!-- <slot name="left"></slot> -->
        <img class="logo" src="../../../public/imgs/logo/logo.png" alt />

        <!-- 中间搜索框 -->
        <div class="input" @click="goSearch">
            <img class="search" src="../../../public/imgs/icon-search.png"></img>
            <span class="placeholder">搜索商品, 共22674款好物</span>
        </div>
      
        <!-- <slot name="right"></slot> -->
        <div class="login" @click="goProfile">登录</div>
      </div>
    </div>
    <div class="wrapper" ref="wrapper">
      <!-- 导航条 -->
      <ul class="content">
        <li class="tab active">推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>母婴亲子</li>
        <li>运动旅行</li>
        <li>数码家电</li>
        <li>全球特色</li>
      </ul>
    </div>
    <!-- 小滑块 -->
    <div class="huakua"></div>
    <!-- 所有频道 -->
    <div class="navAllContainer" v-show="isShowNavAll">
      <div class="allText">全部频道</div>
      <ul>
        <li class="navAllactive">推荐</li>
        <li>居家生活</li>
        <li>居家生活</li>
        <li>居家生活</li>
        <li>居家生活</li>
        <li>居家生活</li>
        <li>居家生活</li>
        <li>居家生活</li>
        <li>居家生活</li>
      </ul>
    </div>
    <!-- 遮罩层 -->
    <div v-show="isShowNavAll" class="navMask"></div>
    <!-- 箭头 -->
    <div class="allNav" @click="showAllNav">
      <img src="../../../public/imgs/closed.png" alt />
    </div>
    <!-- 轮播图 -->
    <Plantings />

    <div class="ensure">
      <div class="ensureItem">
        <img src="../../../public/imgs/wy.png" alt />
        <span>网易自营品品牌</span>
      </div>
      <div class="ensureItem">
        <img src="../../../public/imgs/baozheng.png" alt />
        <span>30天无忧退货</span>
      </div>
      <div class="ensureItem">
        <img src="../../../public/imgs/48h.png" alt />
        <span>48小时快速退款</span>
      </div>
    </div>
    <!-- 分类 -->
    <div class="goodsSort">
      <ul>
        <li>
          <img src="../../../public/imgs/goodsSort/1.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/2.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/3.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/1.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/2.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/3.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/1.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/2.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/3.png" alt />
          <p>新品首发</p>
        </li>
        <li>
          <img src="../../../public/imgs/goodsSort/6.gif" alt />
          <p>新品首发</p>
        </li>
      </ul>
    </div>
    <!-- 新人专享礼 -->
    <div class="newPeople">
      <p>
        <span>-新人专享礼-</span>
      </p>
      <div class="newPeople-all">
        <div class="all-left">
          <div>
            <span>新人专享礼包</span>
          </div>
          <img src="../../../public/imgs/goodsSort/new1.png" alt />
        </div>
        <div class="all-right">
          <div class="all-right-all all-right-top">
            <div class="text">
              <span>福利社</span>
            </div>
            <img src="../../../public/imgs/goodsSort/new2.png" alt />
          </div>
          <div class="all-right-all all-right-bottom">
            <div class="text">
              <span>新人拼团</span>
            </div>
            <img src="../../../public/imgs/goodsSort/new2.png" alt />
          </div>
        </div>
      </div>
    </div>
    <!-- 新人专享礼 -->
    <div class="newPeople">
      <p>
        <span>-新人专享礼-</span>
      </p>
      <div class="newPeople-all">
        <div class="all-left">
          <div>
            <span>新人专享礼包</span>
          </div>
          <img src="../../../public/imgs/goodsSort/new1.png" alt />
        </div>
        <div class="all-right">
          <div class="all-right-all all-right-top">
            <div class="text">
              <span>福利社</span>
            </div>
            <img src="../../../public/imgs/goodsSort/new2.png" alt />
          </div>
          <div class="all-right-all all-right-bottom">
            <div class="text">
              <span>新人拼团</span>
            </div>
            <img src="../../../public/imgs/goodsSort/new2.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引如滑动的包
import BScroll from "better-scroll";
// 引入轮播图组件
import Plantings from "../../components/Plantings/Plantings.vue";
export default {
  components: {
    Plantings
  },
  data() {
    return {
      isShowNavAll: false //全部频道
    };
  },
  methods: {
    goProfile() {
      this.$router.replace("/profile");
    },
    showAllNav() {
      this.isShowNavAll = !this.isShowNavAll;
    },           // 跳转到search页面
    goSearch() {
      this.$router.replace("/search");
      
     
    },
  },
  mounted() {
    // 保证下一次DOM渲染完成之后才会执行
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollX: true
        })
      }
    });
    
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
.firstViewContainer
  width 100%
  position relative
  background-color #EEEEEE
  overflow hidden
  .header
    position relative
    height 135px
    .viewHeader
      width 100%
      height 88px
      display flex
      align-items center
      padding 0 20px
      box-sizing border-box
      background-color white
      position fixed
      top 0px
      left 0px
      z-index 99
      .logo
        width 138px
        height 40px
        margin-right 20px
      .input
        height 56px
        width 442px
        border-radius 5%
        background-color #EDEDED
        margin-right 20px
        .search
          position absolute
          top 30px
          left 200px
          width 28px
          height 28px
          margin-right 20px
        .placeholder
          position absolute
          top 30px
          left 250px
      .login
        width 74px
        height 40px
        border 1px solid #b4282d
        border-radius 5%
        text-align center
        line-height 40px
        color #b4282d
  .wrapper
    height 60px
    width 750px
    // position relative
    position fixed
    top 88px
    left 0px
    z-index 56
    background-color white
    .content
      display flex
      background-color white
      width 1300px
      padding 0 50px
      li
        height 60px
        // width 140px
        line-height 60px
        margin-right 40px
        white-space nowrap
        position relative
        &.active
          color #b4282d
      .tab.active:after
        content ''
        position absolute
        left -50%
        bottom 0px
        width 200%
        height 5px
        background-color #b4282d
  .navAllContainer
    position fixed
    top 88px
    left 0
    z-index 99
    width 750px
    height 312px
    padding 30px 20px
    background-color white
    ul
      width 100%
      height 100%
      display flex
      flex-wrap wrap
      margin 10px 30px
      li
        width 150px
        height 56px
        margin-right 20px
        text-align center
        line-height 56px
        background-color rgba(0, 0, 0, 0.1)
        border 1px solid gray
        border-radius 5%
        &:last-child
          margin-right 0px
        &.navAllactive
          border 1px solid #b4282d
          color #b4282d
    .allText
      width 100%
      height 60px
      background-color white
      font-size 30px
      margin-left 30px
  .navMask
    position absolute
    top 0px
    left 0px
    bottom 0px
    right 0px
    background-color rgba(0, 0, 0, 0.3)
    z-index 66
  .allNav
    width 100px
    height 60px
    background-color white
    text-align center
    line-height 60px
    position fixed
    top 88px
    right 0px
    z-index 999
    img
      width 30px
      height 30px
  .ensure
    box-sizing border-box
    width 750px
    height 72px
    padding 10px 30px
    display flex
    align-items center
    background-color white
    .ensureItem
      flex 1
      width 184px
      height 32px
      img
        width 32px
        height 32px
        vertical-align middle
        margin-right 10px
  .goodsSort
    width 100%
    height 373px
    background-color white
    ul
      width 100%
      height 373px
      display flex
      flex-wrap wrap
      padding 10px 50px
      li
        width 110px
        height 156px
        margin-right 30px
        img
          width 110px
          height 110px
        p
          width 110px
          height 36px
          margin-top 10px
  .newPeople
    width 100%
    height 558px
    background-color white
    margin-top 10px
    padding 10px 30px
    p
      width 100%
      height 90px
      text-align center
      line-height 90px
      padding 10px 0px
      font-size 30px
    .newPeople-all
      width 100%
      height 438px
      display flex
      .all-left
        width 343px
        height 434px
        background-color #F9E9CF
        text-align center
        div
          height 78px
          line-height 78px
        img
          width 258px
          height 257px
      .all-right
        width 343px
        height 434px
        .all-right-all
          overflow hidden
          width 343px
          height 217px
          .text
            margin-left 30px
            height 20px
            margin-top 30px
            // text-align center
            span
              font-size 30px
          img
            width 200px
            height 200px
            float right
            vertical-align middle
        .all-right-top
          background-color #FBE2D3
        .all-right-bottom
          background-color #FFECC2
</style>