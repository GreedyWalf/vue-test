<template>
  <div class="full-height">
    <!--  header部分  -->
    <el-row class="head-row">
      <el-col :span="24">
        <el-col v-if="isShow" :span="showMenuSize" class="vertical-center">
          <div class="app-title">xxx管理系统</div>
        </el-col>

        <el-col :span="20-showMenuSize">
          <div style="background-color: #20a0ff; height: 100%;">
            <el-col :span="2" class="vertical-center pointer">
              <i v-if="isShow" @click="hideMenu" class="el-icon-caret-left" style="font-size: 24px;color: #eeeeee;"></i>
              <i v-else @click="hideMenu" class="el-icon-caret-right" style="font-size: 24px;color: #eeeeee;"></i>
            </el-col>
            <el-col :span="22">

            </el-col>
          </div>
        </el-col>

        <el-col :span="4" class="vertical-center">
          <div style="font-size:16px;color: #eeeeee;">admin</div>
        </el-col>
      </el-col>
    </el-row>

    <el-row class="my-container">
      <!--   aside   -->
      <el-col :span="showMenuSize" class="full-height">
        <div class="my-aside">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-message"></i>导航一</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>导航二</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>导航三</template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>

      <!--   content   -->
      <el-col :span="24-showMenuSize" class="full-height">
        <div class="my-content">this is content</div>

        <!--    footer    -->
        <el-col :span="24" class="my-footer-col">
          <div style="margin-left: 15px;">this is footer</div>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: true,
        showMenuSize: 5,
      }
    },
    methods: {  //显示和隐藏左边菜单栏
      hideMenu: function () {
        if (this.showMenuSize === 5) {
          this.showMenuSize = 0;
          this.isShow = false;
        } else {
          this.showMenuSize = 5;
          this.isShow = true;
        }
      }
    }
  }
</script>

<style scoped>
  .full-height {
    height: 100%;
  }

  .head-row {
    height: 8%;
  }

  .head-row .el-col {
    height: 100%;
    background-color: #20a0ff;
  }

  .head-row .app-title {
    font-size: 20px;
    color: #eeeeee;
    margin: 0 auto;
  }

  .my-container {
    height: 92%;
  }

  .my-container .my-footer-col {
    height: 8%;
  }

  .my-aside {
    height: 100%;
    overflow-y: scroll;
    background-color: rgb(238, 241, 246)
  }

  .my-content {
    height: 92%;
  }

  .my-footer-col {
    background-color: #9e9e9e29;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .vertical-center {
    display: flex;
    align-items: center;
  }

  .pointer {
    cursor: pointer;
  }
</style>
