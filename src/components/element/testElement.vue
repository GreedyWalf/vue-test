<template>
  <div>

    <!-- 一、测试布局 -->
    <div>
      <el-row>
        <el-col v-bind:span='24'>
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <el-row>
        <el-col v-bind:span='12'>
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col v-bind:span='12'>
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>

      <el-row>
        <el-col v-bind:span='8'>
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col v-bind:span='8'>
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col v-bind:span='8'>
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <!-- 使用gutter属性，执行每一栏之间的间隔，默认间隔为0 -->
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <!-- 分栏偏移 -->
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <!-- 通过offset控制偏移量（在原来的位置上向右偏移6个位置） -->
        <el-col :span="6" :offset="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12" :offset="12">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <!-- flex布局：提供分栏的灵活对齐 -->
      <el-row type="flex" class="row-bg">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>

      <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-dark"></div>
        </el-col>
      </el-row>
    </div>

    <!-- 响应式布局(xs sm md lg xl  从小到大) -->
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

    <hr/>
    <!-- 二、布局容器  -->
    <div>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>

      <br/>

      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </div>

    <!--  测试按钮  -->
    <hr>
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <br/>
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要按钮</el-button>
        <el-button type="success" plain>成功按钮</el-button>
        <el-button type="info" plain>信息按钮</el-button>
        <el-button type="warning" plain>警告按钮</el-button>
        <el-button type="danger" plain>危险按钮</el-button>
      </el-row>
      <br>
      <el-row>
        <el-button round>圆角按钮</el-button>
        <el-button type="primary" round>主要按钮</el-button>
        <el-button type="success" round>成功按钮</el-button>
        <el-button type="info" round>信息按钮</el-button>
        <el-button type="warning" round>警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      <br>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle></el-button>
      </el-row>
    </div>
  </div>

</template>

<script>
  export default {
    name: "testElement"
  };
</script>

<style scoped>
  .el-row {
    margin-bottom: 20px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: bisque;
  }

  .el-col {
    border-radius: 4px;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .bg-purple {
    background: greenyellow;
  }

  .bg-purple-dark {
    background: black;
  }

  .bg-purple-light {
    background: wheat;
  }

  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
