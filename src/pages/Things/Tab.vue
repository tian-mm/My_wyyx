<template>
  <div>
    <!-- 导航 -->
    <div ref="wrapper" class="thingsNav">
      <ul class="thingsNav-list">
        <li
          class="item"
          :class="{active:isActive === li.id}"
          v-for="(li,index) in navlist"
          :key="li.id"
          @click="showNavView(index,li.id)"
        >
        <!--  -->
        <router-link :to="`/things/tab/navitem/${li.id}`">{{li.title}}</router-link>
          <!-- 滑块 -->
          <div :class="{silder:isActive===index}"></div>
        </li>
      </ul>
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>
// 引入better-scroll
import BScroll from "better-scroll";
import { reqThings } from "../../api";
export default {
  data() {
    return {
      isActive:0, //默认显示第一个文本
      navlist: [] ,//列表
      // id:null
    };
  },
  async mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          scrollX: true,
          scrollY: false
        });
      }
    });
    const result = await reqThings();
    if (result.code === 0) {
      this.navlist = result.data;
    }
  },
  methods: {
    showNavView(id){
      this.isActive = id
      this.$router.push(`/things/tab/navitem/${id}`)
    }
  },
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.thingsNav
  width 750px
  height 80px
  line-height 80px
  background #FAFAFA
  padding 0px 20px
  position relative
  border-top 5px solid #ccc
  .thingsNav-list
    position absolute
    display flex
    height 80px
    li
      margin-right 20px
      height 80px
      white-space nowrap
      margin-left 20px
      position relative
      &:last-child
        margin-left 20px
      span
        font-size 30px
      &.active
        color #B4282D
        border-bottom 5px solid #B4282D
    
</style>