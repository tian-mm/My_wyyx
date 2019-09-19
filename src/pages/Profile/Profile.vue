<template>
  <div class="profileContainer">
    <Header>
      <img class="img" slot="logo" src="../../../public/imgs/logo/logo.png" alt />
    </Header>
    <div class="profile-content">
      <div class="wyyx">
        <img src="../../../public/imgs/wyyx.png" alt />
      </div>
      <mt-button class="btn phoneBtn" type="default">
        <i class="iconfont icon-shouji"></i>手机号快捷登录
      </mt-button>
      <mt-button class="btn emailBtn" type="default">
        <i class="iconfont icon-youxiang"></i>邮箱账号登录
      </mt-button>
      <div class="login-style">
        <div class="login weixin">
          <i class="iconfont icon-weixin"></i>
          <span class="text">微信</span>
        </div>
        <div class="line1">|</div>
        <div class="login qq">
          <i class="iconfont icon-qq"></i>
          <span class="text">QQ</span>
        </div>
        <div class="line1">|</div>
        <div class="login weibo">
          <i class="iconfont icon-weibo"></i>
          <span class="text">微博</span>
        </div>
      </div>
    </div>
    <!-- 登录页面 -->
    <!-- 手机登录页面 -->
    <!-- <div class="login-view">
      手机方式登录页面
      <div class="login-phone-view">
          <div class="logo">
            <img src="../../../public/imgs/wyyx.png" alt="">
          </div>
          <div class="login-item">
            <form>
              <div>
                <input type="tel">
              </div>
            </form>
          </div>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
.profileContainer
  .profile-content
    width 100%
    height 1240px
    position relative
    background-color #F2F5F4
    .wyyx
      width 100%
      height 230px
      display flex
      justify-content center
      align-items center
      position absolute
      top 200px
      left 0px
      img
        width 330px
        height 130px
    .btn
      width 600px
      height 100px
      line-height 100px
    .phoneBtn
      background-color #DD1A21
      position absolute
      left 75px
      top 570px
      color white
      font-size 30px
      // font-weight bold
      .icon-shouji
        margin-right 10px
    .emailBtn
      background-color #F2F5F4
      border 1px solid #DD1A21
      position absolute
      top 700px
      left 75px
      font-size 30px
      color #DD1A21
      .icon-youxiang
        margin-right 10px
    .login-style
      width 100%
      height 30px
      display flex
      justify-content center
      align-items center
      position absolute
      bottom 70px
      left 0px
      .line1
        margin 0px 30px
      .line2
        margin 0px 20px
      .login
        width 130px
        height 40px
        line-height 40px
        text-align center
        // margin-right 20px
        .iconfont
          font-size 40px
          color #7F7F7F
        .text
          display inline-block
          margin-left 10px
          font-size 30px
          color #7F7F7F
        
</style>