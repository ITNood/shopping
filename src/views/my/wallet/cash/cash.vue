<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="elmail">
        <div class="balance">
          <p>账户余额(元)</p>
          <div class="surplus">
            <el-input v-model="sum"></el-input>
            <i class="icon iconfont icon-chongzhijilu"></i>
          </div>
          <p style="color:#999">可提现金额{{total}}元</p>
        </div>
      </div>
      <div
        class="elmail"
        style="margin-top:10px"
      >
        <div class="balance">
          <p>选择提现账户</p>
          <router-link
            class="selectbank"
            to=""
          >
            <img :src="banklogo">
            <i class="el-icon-arrow-right"></i>
            <p>{{bank}}</p>
            <p>{{number}}</p>
          </router-link>
        </div>
      </div>
      <div style="padding:15px">
        <el-button class="submit">提现</el-button>
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
      msg: "提现",
      icon: "el-icon-arrow-left",
      sum: "",
      total: 2000,
      banklogo: require("../../../../assets/image/banklogo.png"),
      bank: "中国建设银行",
      number: "尾号为4141储蓄卡"
    };
  }
};
</script>

<style scoped>
</style>
