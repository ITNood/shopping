<template>
  <div>
    <el-header height="60px" id="header">
        <el-row :gutter="15">
            <el-col :span="4"><i class="el-icon-arrow-left" @click="$router.go(-1)"></i></el-col>
            <el-col :span="16" class="title">{{title}}</el-col>
        </el-row>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props:['title'],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
