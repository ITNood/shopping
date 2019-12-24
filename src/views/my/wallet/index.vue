<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="wallet">
        <p>账户余额(元)</p>
        <h2>{{amount}}</h2>
      </div>
      <div class="walletlist">
        <router-link to="/my/wallet/invest/invest">
          <span
            class="icon iconfont icon-chongzhijilu"
            style="color:#ffc105"
          ></span>
          充值
          <i class="el-icon-arrow-right"></i>
        </router-link>
        <router-link to="/my/wallet/cash/cash">
          <span
            class="icon iconfont icon-tixianjilu"
            style="color:red"
          ></span>
          提现
          <i class="el-icon-arrow-right"></i>
        </router-link>
        <router-link to="/my/wallet/detailed/detailed">
          <span
            class="icon iconfont icon-mingxi"
            style="color:#ffc105"
          ></span>
          明细
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "钱包",
      icon: "el-icon-arrow-left",
      amount: "0.00"
    };
  }
};
</script>

<style scoped>
</style>
