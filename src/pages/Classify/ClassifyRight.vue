<template>
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
        <li>
          <img src="../../../public/imgs/classify/1.png" alt />
          <div>明星商品</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引如滑动的包
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  mounted() {
    // 保证下一次DOM渲染完成之后才会执行
    this.$nextTick(() => {
      if (!this.scroll2) {
        this.scroll2 = new BScroll(this.$refs.swipersecond, {
          click: true
        });
      }
    });
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
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
          font-size 25px
</style>