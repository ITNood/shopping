<template>
 <div>
     <Header :iconback="icon" :title="msg"/>
     <div class="layout">
         <div class="login">
             <el-form :model="forgetForm" ref="forgetForm">
                 <el-form-item prop="username">
                     <el-input v-model="forgetForm.username" placeholder="请输入用户名"></el-input>
                 </el-form-item>
                 <el-form-item prop="mobile">
                     <el-input v-model="forgetForm.mobile" placeholder="请输入手机号码"></el-input>
                 </el-form-item>
                 <el-form-item prop="code" class="mobileCode">
                     <el-input v-model="forgetForm.code" placeholder="请输入验证码"></el-input>
                     <el-button class="getcode">获取验证码</el-button>
                 </el-form-item>
                 <el-form-item prop="password">
                     <el-input v-model="forgetForm.password" placeholder="请输入密码"></el-input>
                 </el-form-item>
                 <el-form-item prop="confirmpsd">
                     <el-input v-model="forgetForm.confirmpsd" placeholder="请确认密码"></el-input>
                 </el-form-item>
             </el-form>
             <el-button class="submit" @click="next">下一步</el-button>
         </div>
     </div>
 </div>
</template>

<script>
import Header from '../components/header'
export default {
    components:{Header},
 data() {
  return {
      icon:'el-icon-arrow-left',
      msg:'忘记密码',
      forgetForm:{}
  }
 },

 methods: {
     next(){
         console.log(this.forgetForm)
     }
 },
}
</script>

<style scoped>

</style>
