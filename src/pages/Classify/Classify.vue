<template>
  <div class="classifyContainer">
    <!-- 头部 -->
    <div class="classifyHeader">
        <!-- 中间搜索框 -->
        <div class="input" @click="goSearch">
            <img class="search" src="../../../public/imgs/icon-search.png"></img>
            <span class="placeholder">搜索商品, 共22674款好物</span>
        </div>
    </div>
    <div class="classify-content">
      <!-- 左侧 -->
      <div ref="wrapper" class="classify-content-left">
        <ul class="content-left-list">
          <li class="item active">
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
           <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
          <li>
            <span>推荐专区</span>
          </li>
        </ul>

      </div>
      <!-- 右侧 滑动 -->
      <div ref="swipersecond" class="classify-content-right">
        <div class="swiper2">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../../public/imgs/plantings/1.jpg" alt />
              </div>
              <div class="swiper-slide">
                <img src="../../../public/imgs/plantings/2.jpg" alt />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <ul class="classify-content-list">
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>
                明星商品
              </div>
            </li>
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
                        <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
            <li>
              <img src="../../../public/imgs/classify/1.png" alt />
              <div>明星商品</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引如滑动的包
import BScroll from "better-scroll";
// 引入轮播swiper插件
import Swiper from "swiper";
// 引入样式
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {};
  },
  mounted() {
    // 保证下一次DOM渲染完成之后才会执行
    this.$nextTick(() => {
      if (!this.scroll1) {
        this.scroll1 = new BScroll(this.$refs.wrapper, {
          click: true
        })
      }
    });

    // 保证下一次DOM渲染完成之后才会执行
    this.$nextTick(() => {
      if (!this.scroll2) {
        this.scroll2 = new BScroll(this.$refs.swipersecond, {
          click: true
        });
      }
    })
    // 页面真正加载完之后再new Swiper对象
    this.$nextTick(() => {
      this.mySwiper = new Swiper(".swiper-container", {
        loop: true,
        // 自动切换
        autoplay: {
          delay: 1000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        // 如果需要分页器
        pagination: {
          // 社置分页器的容器
          el: ".swiper-pagination"
          // 设置分页器的样式
          // type:'bullets'
        }
      });
    });
  },
  methods: {
    goSearch() {
      this.$router.replace("/search");
    },
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.classifyContainer
  .classifyHeader
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
    border-bottom 1px solid #EDEDED
    .input
      height 56px
      width 700px
      border-radius 5%
      background-color #EDEDED
      margin 10px 6px
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
  .classify-content
    width 588px
    height 1148px
    display flex
    position absolute
    bottom 44px
    left 0px
    .classify-content-left
      height 1160px
      background-color white
      box-sizing border-box
      padding 10px 0px
      margin-right 10px
      .content-left-list
        li
          width 162px
          height 50px
          line-height 50px
          text-align center
          margin-bottom 30px
          position relative
          span
            font-size 30px
            text-align center
            // 高亮滑块
          &.active
            color #ab2b2b
        .item.active:after
          content ''
          position absolute
          top 0px
          left 0px
          bottom 0px
          width 5px
          height 50px
          background-color #ab2b2b
    .classify-content-right
      width 528px
      height 1097px
      .swiper2
        width 100%
        height 1200px
        position relative
        .swiper-container
          width 528px
          height 192px
          margin 20px auto
          background-color white
          position relative
          .swiper-wrapper
            width 100%
            height 192px
            img
              width 100%
              height 192px
        .classify-content-list
          width 528px
          height 648px
          position relative
          li
            float left
            margin-left 20px
            img
              width 144px
              height 144px
            div
              width 144px
              height 72px
              text-align center
</style>