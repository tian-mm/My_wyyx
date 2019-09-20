<template>
  <div>{{id}}</div>
</template>

<script>
export default {
  data() {
    return {
      id: null
    };
  },
  mounted() {
    this.showNavView(this.$route)
  },
  watch: {
    $route(val){
      this.showNavView(val)
    }
  },
  methods: {
    // 定义一个方法
    showNavView(val) {
      // 从地址栏中拿到id
      const id = this.$route.params.id * 1;

      this.id = id;
    }
  }
};
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped></style>