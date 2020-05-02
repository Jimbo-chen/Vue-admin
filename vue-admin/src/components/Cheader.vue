<template>
  <div class="cheader">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">
        <router-link to="/">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">关于我们</router-link>
      </el-menu-item>

      <el-button type="primary">添加用户</el-button>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Cheader"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
