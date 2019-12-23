<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
        <div class="elmail">
            <el-form :model="pwdForm" ref="pwdForm" class="phoneForm">
                <el-form-item prop="password" label="旧密码">
                    <el-input v-model="pwdForm.password" placeholder="请输入旧密码"></el-input>
                </el-form-item>
                <el-form-item prop="newPassword" label="新密码">
                    <el-input v-model="pwdForm.newPassword" placeholder="请输入新密码"></el-input>
                </el-form-item>
                <el-form-item prop="confirnPassword" label="确认密码">
                    <el-input v-model="pwdForm.confirnPassword" placeholder="请输入确认密码"></el-input>
                </el-form-item>
            </el-form>
            <el-button class="submit">确认修改</el-button>
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
      msg: "密码设置",
      icon: "el-icon-arrow-left",
      pwdForm:{}
    };
  }
};
</script>

<style scoped>
</style>
