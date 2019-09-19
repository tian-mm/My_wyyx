<template>
  <div class="profileContainer">
    <div class="profile-header">
      <div>
        <i class="iconfont icon-home"></i>
      </div>
      <div>
        <i class="logo"></i>
      </div>
      <div>
        <i class="iconfont icon-search"></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  }
};
</script>
<style  lang="stylus" rel="stylesheet/stylus" scoped>
.profileContainer
  width 100%
  width 100%
  .profile-header
    width 100%
    height 90px
    background #ccc
    display flex
    div 
      .iconfont
        display inline-block
        width 50px
        height 50px

</style>