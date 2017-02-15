<template>
  <div>
    <div class="header row">
      <div class="col-md-3 header-text " @click="jump('/main')">首页</div>
      <div class="col-md-3 header-text " @click="jump('/subscribe')">订阅</div>
      <div class="col-md-2 header-text " @click="jump('/podcast')">主播</div>
      <div class="col-md-2 header-text " @click="jump('/about')">关于</div>
      <div class="col-md-2 header-text " @click="jump('/donate')">捐赠</div>
    </div>
  </div>
</template>
<style>
  .header {
    background-color: #333;
    width: 100%;
    height: 40px;
    top: 0px;
    position: fixed;
    margin-left: 0px;
    margin-right: 0px;
  }
  .header-text {
    margin-top: 10px;
    color: floralwhite;
  }
  .header-text:hover {
    cursor: pointer;
    color: #848484;
  }
</style>
<script>
  export default{
    data () {
      return {}
    },
    components: {},
    methods: {
      jump (target) {
        this.$router.replace(target)
      }
    }
  }
</script>
