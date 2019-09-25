<template>

    <!-- 右侧 滑动 -->
    <div class="swiper2">
      <!-- 轮播图 -->
      <div class="swiper-container">
        <ul class="swiper-wrapper">
          <li class="swiper-slide">
            <img src="../../../public/imgs/plantings/1.jpg" alt />
          </li>
          <li class="swiper-slide">
            <img src="../../../public/imgs/plantings/1.jpg" alt />
          </li>
        </ul>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 没有子标签 -->
      <ul class="classify-content-list" v-if="goodItem.codea ===1">
        <span>{{goodItem.code }}</span>
        <li v-for="(liItem,index) in goodItem.list" :key="index">
          <img :src="liItem.img" alt />
          <div>{{liItem.title}}</div>
        </li>
      </ul>

      <!-- 有子标签 -->
      <ul class="classify-content-list2" v-else>
        <span>{{goodItem.code}}</span>
        <li class="list-title" v-for="(liItem,index) in goodItem.list" :key="index">
          <!-- title -->
          <div class="title">{{liItem.titleName}}</div>
          <ul class="list-title-li">
            <li class="titl-li-goods" v-for="(li,index) in liItem.titleItem">
              <img :src="li.img" />
              <div>{{li.titleItemName}}</div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

</template>

<script>
import BScroll from "better-scroll";
// 引入轮播swiper插件
import Swiper from "swiper";
// 引入样式
import "swiper/dist/css/swiper.css";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  props: {
    goodItem: Object //接收传递过来的数据
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


  },
  computed: {
    ...mapState(["list"])
  },
  beforeUpdate() {
    console.log(this.goodItem)
  },
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
  .swiper2
    // width 100%
    height 1200px
    position relative
    padding-top 90px
    // padding-bottom -2000px
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
    .classify-content-list2 // 外部ul
      .list-title // 外部li --> 遍历出每一小块
        .title // title
          font-weight bold
          font-size 35px
          height 60px
          line-height 60px
          // background-color yellow
        .list-title-li // 里面的ul
          width 528px
          overflow hidden
          // height 648px
          // background-color #ccc
          .titl-li-goods // 每一个商品li
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