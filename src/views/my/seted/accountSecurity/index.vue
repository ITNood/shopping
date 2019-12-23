<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
        <ul class="accountlist">
            <router-link to="/my/seted/accountSecurity/password">
                密码修改<i class="el-icon-arrow-right"></i>
            </router-link>
            <router-link to="/my/seted/accountSecurity/phone">
                手机绑定<i class="el-icon-arrow-right"></i><span>{{phone}}</span>
            </router-link>
            <router-link to="">
                身份认证<i class="el-icon-arrow-right"></i><span>{{idcard}}</span>
            </router-link>
            <router-link to="/my/seted/accountSecurity/email">
                邮箱绑定<i class="el-icon-arrow-right"></i><span>{{email}}</span>
            </router-link>
            <router-link to="">
                登入设备管理<i class="el-icon-arrow-right"></i>
            </router-link>
        </ul>
    </div>
  </div>
</template>

<script>
import Header from "../../../../components/header";
export default {
  components: { Header },
  data() {
    return {
      icon: "el-icon-arrow-left",
      msg: "账号安全",
      phone:'未绑定',
      idcard:'未绑定',
      email:'未绑定'
    };
  }
};
</script>

<style scoped>
</style>

