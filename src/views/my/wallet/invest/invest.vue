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
          <p>选择充值方式</p>
          <el-radio-group v-model="radio">
            <el-radio :label="1">支付宝</el-radio>
            <el-radio :label="2">微信支付</el-radio>
          </el-radio-group>
        </div>
        <el-button class="submit" style="margin-top:30px">提交充值</el-button>
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
      msg: "充值",
      icon: "el-icon-arrow-left",
      sum: "",
      radio:''
    };
  }
};
</script>

<style scoped>
</style>
