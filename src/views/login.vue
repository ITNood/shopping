<template>
  <div>
    <Header
      :iconback="icon"
      :title="msg"
    />
    <div class="layout">
        <div class="login">
            <el-form :model="loginForm" ref="loginForm">
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username" placeholder="请输入您的手机号码" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" placeholder="请输入登录密码" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div class="logintext">
                <router-link to="/forget">忘记密码</router-link>
                <el-checkbox v-model="checked">备选项</el-checkbox>
                <router-link to="/registry">注册新账号</router-link>
            </div>
            <el-button class="submit">登录</el-button>
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
        icon:'el-icon-arrow-left',
        msg:'登录',
        loginForm:{},
        checked:false
    };
  }
};
</script>

<style scoped>
</style>
