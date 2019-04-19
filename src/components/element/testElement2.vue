<template>
  <!-- 测试布局 -->
  <el-container style="height: 100%;">
    <el-aside width="200px">this is aside</el-aside>

    <el-container>
      <el-header>this is header</el-header>
      <el-main>this is main</el-main>
      <el-footer>this is footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  export default {}
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #42b983;
    text-align: center;
    line-height: 60px;
  }

  .el-container {
    background-color: #e9eef3;
    min-height: 200px;
  }

  .el-aside {
    background-color: #b3c0d1;
    line-height: 200px;
  }

  .el-main {
    background-color: aquamarine;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
</style>
