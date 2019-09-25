<template>
  <div class="tuijianItem">
    <div class="tuijian" v-for="(recommend,index) in recommendList" :key="index">
      <div  v-for="(topic,index) in recommend.topics" :key="index">
        <div class="li-list smallView" v-show="topic.type===0">
          <!-- 小图的每一个块模板 -->
          <div class="smallView-inside" >
            <!-- 左边 -->
            <div class="smallView-left">
              <div class="user-msg">
                <img :src="topic.avatar" alt/>
                <span>{{topic.nickname}}</span>
              </div>
              <div class="user-content">
                <span>{{topic.title}}</span>
              </div>
              <div class="activity">
                <span>{{topic.subTitle}}</span>
              </div>
              <div class="liulan">
                <i class="iconfont icon-liulan"></i>
                <span>{{topic.readCount}}人看过</span>
              </div>
            </div>
            <!-- 右边 -->
            <div class="smallView-right">
              <!-- 图片懒加载 -->
              <!-- <img v-lazy="topic.picUrl" alt=""> -->
              <img :src="topic.picUrl" alt />
            </div>
          </div>
        </div>
        <!-- 大图的模板 -->
        <div class="li-list bigView" v-show="topic.type===2">
          <div class="user-msg">
            <img :src="topic.avatar" alt />
            <span>{{topic.nickname}}</span>
          </div>
          <div class="detail-text">
            <span>{{topic.title}}</span>
          </div>
          <div class="detail-img">
            <img :src="topic.picUrl" alt />
          </div>
          <div class="liulan">
            <i class="iconfont icon-liulan"></i>
            <span>{{topic.readCount}}人看过</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(['recommendList'])
  }


};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.tuijianItem
  .li-list
    margin-top 20px
  .smallView // 整个小图模板
    width 750px
    height 400px
    background-color white
    display flex
    align-items center
    box-sizing border-box
    padding 5px
    margin-top 10px
    .smallView-inside
      width 730px
      height 300px
      // background-color green
      display flex
      margin 0 auto
      .smallView-left
        width 410px
        height 300px
        margin-right 30px
        // background-color yellow
        .user-msg
          width 400px
          height 60px
          margin-bottom 20px
          margin-left 20px
          margin-top 20px
          img
            width 50px
            height 50px
            margin-right 10px
            border-radius 50%
            vertical-align middle
          span
            font-size 30px
            margin-right 10px
        .user-content
          height 50px
          line-height 50px
          margin-bottom 20px
          margin-left 20px
          span
            font-size 30px
        .activity
          margin-top 50px
          height 50px
          line-height 50px
          margin-bottom 20px
          margin-left 20px
          span
            font-size 25px
        .liulan
          height 50px
          font-size 25px
          // line-height 50px
          margin-left 20px
          .icon-liulan
            font-size 25px
      .smallView-right
        width 300px
        height 300px
        img
          width 100%
          height 100%
          vertical-align middle
  .bigView
    background-color white
    padding 20px
    .user-msg
      height 100px
      line-height 100px
      margin-bottom 20px
      img
        width 50px
        height 50px
        margin-right 10px
        vertical-align middle
        border-radius 50%
        margin-left 20px
      span
        font-size 30px
    .detail-text
      font-size 30px
      margin-bottom 20px
    .detail-img
      width 700px
      height 400px
      background-color green
      margin-bottom 20px
      img
        width 100%
        height 100%
    .liulan
      height 50px
      font-size 25px
      line-height 50px
      margin-left 20px
      .icon-liulan
        font-size 25px
</style>