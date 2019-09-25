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
          <li  class="item" @click="goItem(li.id)" v-for="(li,index) in list" :key="li.id" :class="{active:isActive === li.id}">
           <!-- <router-link :class="{'active':isActive === li.id}" :to="`/classify/classifyright/${li.id}`"></router-link> -->
           {{li.title}}
          </li>
        </ul>
      </div>
      <div ref="swipersecond" class="classify-content-right">
        <div>
         <!-- 右侧滑动 -->
        <router-view :goodItem='list[currentIndex]'></router-view>
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
// 引入
import {mapState} from 'vuex'
export default {
  data() {
    return {
      isActive:0,  // 左侧列表是否高亮显示,默认显示第一个
      currentIndex:0 ,  //当前的索引 
    };
  },
 async mounted() {
    // 保证下一次DOM渲染完成之后才会执行
    this.$nextTick(() => {
      if (!this.scroll1) {
        this.scroll1 = new BScroll(this.$refs.wrapper, {
          click: true
        })
      }
    });
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
        }
      });
    });

            // 保证下一次DOM渲染完成之后才会执行
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.swipersecond, {
          click: true
        });
      }
      console.log(this.scroll)
    })
  },
  methods: {
    goSearch() {
      this.$router.replace("/search")
    },
    goItem(id){
      this.isActive = id
      this.currentIndex = id  //修改data中的索引 --> 为当前点击的索引
      this.$router.replace(`/classify/classifyright/${id}`).catch(err => { })
    }
  },
    computed: {
      ...mapState(['list']),

    },
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.classifyContainer
  overflow hidden
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
        padding-top 30px
        padding-bottom 200px
        .item
          width 162px
          height 50px
          line-height 50px
          margin-bottom 55px
          position relative
          text-align center
          &.active
            color #ab2b2b
            font-size 30px
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
        height 573px
        // .content-right-inside

</style>