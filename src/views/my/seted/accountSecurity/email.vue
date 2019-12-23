<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
        <div class="elmail">
            <el-input v-model="email" placeholder="请输入邮箱" class="emailAddress"></el-input>
            <el-button class="submit" style="margin-top:20px">邮箱绑定</el-button>
            <el-button class="submit" style="margin:20px 0 0 0;background:#666;color:white">解除绑定</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../../components/header";
export default {
  components: { Header },
  data() {
    return {
        msg:'邮箱认证',
        icon:'el-icon-arrow-left',
        email:''
    };
  }
};
</script>

<style scoped>
</style>
