<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
        <div class="selectPay">
            <ul>
                <li>
                    <span class="sum"></span>余额支付
                    <el-radio v-model="radio" label="1"></el-radio>
                </li>
                <li>
                    <span class="wechat"></span>微信支付
                    <el-radio v-model="radio" label="2"></el-radio>
                </li>
            </ul>
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
        msg:'支付方式',
        radio:'1',
    };
  }
};
</script>

<style scoped>
</style>
