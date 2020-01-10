<template>
  <div>
    <Header
      :iconback="icon"
      :title="msg"
    /> 
    <div class="layout">
        <el-input type="textarea" v-model="text" placeholder="请输入内容" class="textarea"></el-input>
    </div>
    <el-button class="fixedsubmit">发送添加信息</el-button>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      icon: "el-icon-arrow-left",
      msg: "发送添加信息",
      text:''
    };
  }
};
</script>

<style scoped>
</style>
