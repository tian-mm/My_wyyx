<template>
  <div class="thingsContainer">
    <Header style="background:#FAFAFA"></Header>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.thingsContainer
  width 100%
  height 100%
  overflow hidden
  position relative


</style>