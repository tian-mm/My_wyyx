<template>
  <div class="search">
    <div class="header">
      <div class="header-search">
        <input
          class="input"
          placeholder="女士可机洗毛衫 上新"
          type="text"
          v-model="namekeys"
          @keydown="search"
        />
        <img src="../../../public/imgs/search.png" alt />
      </div>
      <div class="cancel" @click="$router.replace('/')">取消</div>
      <!-- X 取消 -->
      <div class="quxiaoIcon" v-show="namekeys" @click="namekeys = ''">
        <i class="iconfont icon-quxiao1"></i>
      </div>
    </div>
    <div class="searchList" v-show="namekeys">
      <ul class="searchItem">
          <li v-for="(searchkey,index) in searchKeyslist" :key="index">
            <span>{{searchkey}}</span>
            </li>
      </ul>
    </div>
    <!-- 热门搜索 -->
    <div class="Popularsearch" v-show="!namekeys">
      <div class="Popularsearch-header">
        <h3>热门搜索</h3>
      </div>
      <ul class="search-list">
        <li  :class="{active:li.highlight === 1}" v-for="(li,index) in defaultkeyWord.hotKeywordVOList" :key="index">
          {{li.keyword}}
          <span class="active"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 从state中拿到关键字搜索列表
import { mapState } from "vuex";
export default {
  data() {
    return {
      namekeys: ""
    };
  },
  methods: {
    search() {
      // 获取到用户的关键字
      const namekeys = this.namekeys.trim();
      // 判断用户是否输入
      // this.$store.dispatch( "获取到actions对象中的方法名",参数)
      if (namekeys) {
        this.$store.dispatch("getKeyWord", namekeys);
         
      }
    },
    

  },
  computed: {
    ...mapState(["searchKeyslist",'defaultkeyWord'])
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.search
  width 100%
  height 1330px
  overflow hidden
  background-color #EEEEEE
  .header
    width 100%
    height 88px
    background-color white
    display flex
    align-items center
    position relative
    .header-search
      width 604px
      height 56px
      background-color #F4F4F4
      position relative
      margin-left 40px
      display flex
      align-items center
      img
        width 28px
        height 28px
        margin-left 30px
      .input
        width 520px
        height 40px
        margin-right 0px
        border-radius 5%
        outline none
        line-height 40px
        position absolute
        background-color #F4F4F4
        right 0px
    .cancel
      position absolute
      right 30px
      font-size 30px
    .quxiaoIcon
      position absolute
      right  140px
  .Popularsearch
    background-color white
    width 100%
    height 406px
    .Popularsearch-header
      width 100%
      height 90px
      line-height 90px
      margin-left 10px
      h3
        font-size 30px
        color #ccc
    .search-list
      // float right
      display flex
      flex-wrap wrap
      li
        border 1px solid #ccc
        margin 0px 10px 20px 30px
        padding 15px
        border-radius 5%
        &.active
          border 1px solid #b4282d
          color #b4282d
        span
          font-size 24px
          color #ccc
  .searchList
    width 100%
    background-color #ccc
    .searchItem
      width 100%
      li
        height 104px
        width 100%
        background-color white
        border-bottom 1px solid #ccc
        line-height 104px
        padding-left 20px
        span 
          font-size 30px
          
</style>