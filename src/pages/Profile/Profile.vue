<template>
  <div class="profileContainer">
    <Header>
      <img
        @click="$router.replace('/')"
        class="img"
        slot="logo"
        src="../../../public/imgs/logo/logo.png"
      />
    </Header>

    <!-- 未登陆界面 -->
    <div class="profile-content" v-show="loginType === 1">
      <div class="wyyx">
        <img src="../../../public/imgs/wyyx.png" alt />
      </div>
      <mt-button @click="loginType=2" class="btn phoneBtn" type="default">
        <i class="iconfont icon-shouji"></i>手机号快捷登录
      </mt-button>
      <mt-button @click="loginType=3" class="btn emailBtn" type="default">
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
    <!-- 手机号短信验证登陆界面 -->
    <div class="phontLoginContainer" v-show="loginType === 2">
      <div class="logo">
        <img src="../../../public/imgs/wyyx.png" alt />
      </div>
      <div class="loginItem">
        <div class="phone">
          <input
            type="tel"
            name="phone"
            maxlength="11"
            placeholder="请输入手机号"
            v-model="phone"
            v-validate="'required|phone'"
          />
          <div class="TipsErrPhone">
            <!-- 校验手机号码 -->
            <span
              class="help is-danger"
              style="color:red"
              v-show="errors.has('phone')"
            >{{ errors.first('phone') }}</span>
          </div>
        </div>

        <div class="msg">
          <input
            type="text"
            placeholder="请输入短信验证码"
            v-model="code"
            maxlength="6"
            name="code"
            v-validate="'required|code'"
          />
          <div class="TipsErrMsg">
            <!-- 校验短信验证码 -->
            <span
              class="help is-danger"
              style="color:red"
              v-show="errors.has('code')"
            >{{ errors.first('code') }}</span>
          </div>
          <!-- 点击发送验证码 -->
          <button @click.prevent="sendCode">{{computerTime>0?`已发送(${computerTime}s)`:'获取验证码'}}</button>
        </div>
        <div class="problem">
          <span>遇到问题?</span>
          <span @click="loginType=4">使用密码验证登录</span>
        </div>
        <mt-button class="loginBtn" type="default" @click.prevent="PhoneLogin">登录</mt-button>
        <div class="agree">
          <button @click="isShowGou=!isShowGou">
            <img v-show="isShowGou" src="../../../public/imgs/duihao.png" alt />
          </button>
          <span>我同意</span>
          <a href="javascript:;">《服务条款》</a>
          <span>和</span>
          <a href="javascript:;">《网易隐私政策》</a>
        </div>
        <div class="otherLogin" @click="loginType=1">其他登录方式></div>
      </div>
    </div>
    <!-- 邮箱账号登录界面 -->
    <div class="emailLoginContainer" v-show="loginType === 3">
      <div class="logo">
        <img src="../../../public/imgs/wyyx.png" alt />
      </div>
      <div class="loginItem">
        <div class="emailId">
          <input
            type="text"
            placeholder="邮箱账号"
            v-model="email"
            name="email"
            maxlength="15"
            v-validate="'required|email'"
          />
          <div class="TipsErrEmail">
            <span
              class="help is-danger"
              style="color:red"
              v-show="errors.has('email')"
            >{{ errors.first('email') }}</span>
          </div>
        </div>
        <div class="pwd">
          <input
            type="password"
            placeholder="密码"
            v-model="pwd"
            maxlength="15"
            name="pwd"
            v-validate="'required|pwd'"
          />

          <div class="TipsErrPwd">
            <span
              class="help is-danger"
              style="color:red"
              v-show="errors.has('pwd')"
            >{{ errors.first('pwd') }}</span>
          </div>
        </div>
        <div class="registerEmailId">
          <span>注册账号</span>
          <span>忘记密码</span>
        </div>
        <mt-button class="loginBtn" type="default" @click.prevent="PhoneLogin">登录</mt-button>
        <div class="otherLogin" @click="loginType=1">其他登录方式></div>
      </div>
    </div>

    <div class="pwdLogin" v-show="loginType === 4">
      <div class="logo">
        <img src="../../../public/imgs/wyyx.png" alt />
      </div>
      <div class="loginItem">
        <div class="emailId">
          <input
            type="tel"
            placeholder="请输入手机号"
            v-model="phone"
            name="phone"
            maxlength="11"
            v-validate="'required|phone'"
          />

          <div class="TipsErrPhone2">
            <span
              class="help is-danger"
              style="color:red"
              v-show="errors.has('phone')"
            >{{ errors.first('phone') }}</span>
          </div>
        </div>

        <div class="pwd">
          <input
            type="password"
            placeholder="请输入密码"
            v-model="pwd"
            name="pwd"
            maxlength="15"
            v-validate="'required|pwd'"
          />
          <div class="TipsErrPwd2">
            <span
              class="help is-danger"
              style="color:red"
              v-show="errors.has('pwd')"
            >{{ errors.first('pwd') }}</span>
          </div>
        </div>

        <div class="registerEmailId">
          <span>忘记密码?</span>
          <span>短信快捷登录</span>
        </div>
        <mt-button class="loginBtn" type="default" @click.prevent="PhoneLogin">登录</mt-button>
        <div class="otherLogin" @click="loginType=1">
          其他登录方式
          <span>></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 引入api
import { reqPhoneCodeLogin, reqEmailPwdLogin, reqPhonePwd } from "../../api";
export default {
  data() {
    return {
      // loginType  -> 有三种状态,1 -> 未登录页面,2 -> 手机号登录页面 , 3 邮箱登录方式 ,4 -> 手机密码验证登录
      loginType: 1,
      isShowGou: false, //对勾是否显示
      // 表单验证
      phone: "", //默认手机号为空
      code: "", //短信验证码
      email: "", //邮箱账号
      pwd: "", //密码
      computerTime: 0 //默认手机验证码的事件为0
    };
  },
  methods: {
    sendCode() {
      // 当点击修改的时候,修改倒计时的状态
      this.computerTime = 10;
      this.timer = setInterval(() => {
        this.computerTime--;
        if (this.computerTime < 0) {
          this.computerTime = 0;
        }
        // 清除定时器
        clearInterval(this.timer);
      }, 1000);
    },
    async PhoneLogin() {
      let loginMsg;
      // 获取data中的数据
      const { phone, code, email, pwd, loginType } = this;
      // 判断是那种方式登录
      if (loginType === 2) {
        //手机号验证码登录
        loginMsg = ["phone", "code"];
      } else if (loginType === 3) {
        //邮箱密码
        loginMsg = ["email", "pwd"];
      } else {
        //手机号密码
        loginMsg = ["phone", "pwd"];
      }
      // 检查表单是否验证通过->成功则返回true
      const success = this.$validator.validateAll(loginMsg);
      if (success) {
        let result;
        if (loginType === 2) {
          const phm = { phone: phone, code: code };
          result = await reqPhoneCodeLogin(phm);
          console.log(result);
        } else if (loginType === 3) {
          const emp = { email: email, pwd: pwd };
          result = await reqEmailPwdLogin(email, pwd);
          console.log(result);
        } else {
          const a = { phone: phone, pwd: pwd };
          result = await reqPhonePwd(a);
          console.log(result);
        }
          if (result) {
          console.log(result);
          this.$router.replace('/login');
        } else {
          console.log("发送失败");
        }
      }

    }
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
  .phontLoginContainer
    width 100%
    height 381px
    position realitive
    .logo
      width 100%
      position absolute
      top 200px
      text-align center
      img
        width 150px
        height 40px
    .loginItem
      width 100%
      // height 900
      // background #ccc
      position absolute
      top 400px
      .phone
        height 100px
        line-height 100px
        border-bottom 1px solid #ccc
        position relative
        input
          height 51px
          width 600px
          font-size 25px
          margin-left 20px
          outline none
          color #7f7f7f
        .TipsErrPhone
          height 16px
          width 250px
          position absolute
          top 60px
          left 10px
      .msg
        height 100px
        line-height 100px
        border-bottom 1px solid #ccc
        // overflow hidden
        position relative
        input
          height 51px
          width 400px
          font-size 25px
          margin-left 20px
          outline none
          color #7f7f7f
          // 提示的错误信息
        .TipsErrMsg
          height 16px
          width 250px
          position absolute
          top 60px
          left 10px
        button
          margin-top 10px
          background white
          border 1px solid black
          width 160px
          height 50px
          // float right
          position absolute
          top 25px
          right 20px
          margin-right 10px
          margin-top value
      .problem
        // height 100px
        line-height 100px
        span
          &:first-child
            float left
            margin-left 20px
            font-size 30px
            color #7f7f7f
          &:nth-child(2)
            float right
            margin-right 20px
            font-size 30px
      .loginBtn
        width 700px
        height 80px
        background #DD1A21
        color white
        font-size 30px
        margin-left 25px
        margin-top 20px
      .agree
        height 50px
        line-height 50px
        margin 20px 0px
        button
          width 30px
          height 30px
          margin 0px 30px
          position relative
          img
            width 35px
            height 35px
            position absolute
            top -6px
            left -4px
      .otherLogin
        width 100%
        height 30px
        line-height 30px
        text-align center
        font-size 30px
        margin-top 30px
  .emailLoginContainer
    width 100%
    height 381px
    position realitive
    .logo
      width 100%
      position absolute
      top 200px
      text-align center
      img
        width 150px
        height 40px
    .loginItem
      width 100%
      // height 900
      // background #ccc
      position absolute
      top 400px
      .emailId
        height 100px
        line-height 100px
        border-bottom 1px solid #ccc
        position relative
        input
          height 51px
          width 600px
          font-size 25px
          margin-left 20px
          outline none
          color #7f7f7f
        .TipsErrEmail
          position absolute
          top 60px
          left 10px
      .pwd
        height 100px
        line-height 100px
        border-bottom 1px solid #ccc
        position relative
        input
          height 51px
          width 400px
          font-size 25px
          margin-left 20px
          outline none
          color #7f7f7f
        .TipsErrPwd
          position absolute
          top 60px
          left 10px
      .registerEmailId
        height 100px
        line-height 100px
        span
          &:first-child
            float left
            margin-left 20px
            font-size 30px
            color #7f7f7f
          &:nth-child(2)
            float right
            margin-right 20px
            font-size 30px
      .loginBtn
        width 700px
        height 80px
        background #DD1A21
        color white
        font-size 30px
        margin-left 25px
        margin-top 20px
      .otherLogin
        width 100%
        height 30px
        line-height 30px
        text-align center
        font-size 30px
        margin-top 30px
  .pwdLogin
    width 100%
    height 381px
    position realitive
    .logo
      width 100%
      position absolute
      top 200px
      text-align center
      img
        width 150px
        height 40px
    .loginItem
      width 100%
      // height 900
      // background #ccc
      position absolute
      top 400px
      .emailId
        height 100px
        line-height 100px
        border-bottom 1px solid #ccc
        position relative
        input
          height 51px
          width 600px
          font-size 25px
          margin-left 20px
          outline none
          color #7f7f7f
        .TipsErrPhone2
          height 16px
          width 250px
          position absolute
          top 60px
          left 10px
      .pwd
        height 100px
        line-height 100px
        border-bottom 1px solid #ccc
        position relative
        input
          height 51px
          width 400px
          font-size 25px
          margin-left 20px
          outline none
          color #7f7f7f
        .TipsErrPwd2
          height 16px
          width 250px
          position absolute
          top 60px
          left 10px
      .registerEmailId
        height 100px
        line-height 100px
        span
          &:first-child
            float left
            margin-left 20px
            font-size 30px
            color #7f7f7f
          &:nth-child(2)
            float right
            margin-right 20px
            font-size 30px
      .loginBtn
        width 700px
        height 80px
        background #DD1A21
        color white
        font-size 30px
        margin-left 25px
        margin-top 20px
      .otherLogin
        width 100%
        height 30px
        line-height 30px
        text-align center
        font-size 30px
        margin-top 30px
</style>