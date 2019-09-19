<template>
  <div class="plantingContainer">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../../../public/imgs/plantings/1.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/imgs/plantings/2.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/imgs/plantings/3.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/imgs/plantings/4.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/imgs/plantings/5.jpg" alt />
        </div>
        <div class="swiper-slide">
          <img src="../../../public/imgs/plantings/6.jpg" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
// 引入轮播swiper插件
import Swiper from "swiper";
// 引入样式
import "swiper/dist/css/swiper.css";
export default {
  data() {
    return {};
  },
  mounted() {
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
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.plantingContainer
  width 100%
  height 370px
  background-color white
  .swiper-container
    width 100%
    height 370px
    margin 20px auto
    background-color white
    .swiper-wrapper
      width 100%
      height 370px
      img
        width 100%
        height 370px
</style>