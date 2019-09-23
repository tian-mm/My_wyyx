<template>
  <div ref="swiper" class="navList">
    <div class="activeity">
      <div v-if="id === 0">
        <!-- 推荐组价 -->
        <Recommend></Recommend>
      </div>
      <div v-else>{{id}}</div>
    </div>
  </div>
</template>

<script>
// 引入组件
import Recommend from "./Recommend.vue";
// 引入滑动的包
import BScroll from "better-scroll";
export default {
  components: {
    Recommend
  },
  data() {
    return {
      id: 0
    };
  },
  mounted() {
    this.showNavView(this.$route);
    this.$nextTick(() => {
      if (!this.scroll2) {
        this.scroll2 = new BScroll(this.$refs.swiper, {
          click: true
        });
      }
      console.log(this.scroll2);
    });
  },
  watch: {
    $route(val) {
      this.showNavView(val);
    }
  },
  methods: {
    // 定义一个方法
    showNavView(val) {
      // 从地址栏中拿到id
      const id = val.params.id * 1;
      this.id = id;
    }
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.navList
  height 1050px
  background-color #ccc
  // .activeity
</style>