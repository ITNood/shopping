<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="selectPay">
        <el-radio-group
          v-model="radio"
          @change="selectRadio()"
        >
          <el-radio label="1"><span class="sum aa"></span>余额支付</el-radio>
          <el-radio label="2"><span class="wechat aa"></span>微信支付</el-radio>
        </el-radio-group>
      </div>
    </div>
    <el-row class="paymoney">
      <el-col
        :span="16"
        class="payTotal"
      >支付：<span>￥{{total}}</span></el-col>
      <el-col
        :span="8"
        class="paySum"
      ><span @click="pay()">付款</span></el-col>
    </el-row>
    <Pin
      @submit="submit"
      ref="child"
      :hide="show"
    />
  </div>
</template>

<script>
import api from '../API/index'
import Header from "../components/header";
import Pin from "../components/pin";
import jsBridge from "../assets/js/jsbridge-mini";
export default {
  components: { Header, Pin },
  data() {
    return {
      msg: "支付方式",
      radio: "1",
      total: "0.00",
      show: true,
      id:''
    };
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata(){
      let data=localStorage.getItem('result')
      let result=JSON.parse(data)
      console.log(result)
      if(result){
        this.total=result.total_price
        this.id=result.order_id
      }
    },
    selectRadio() {
      console.log(this.radio);
    },
    //付款
    buy(flag) {
      this.dialogVisible = !this.dialogVisible;
    },
    pay() {
      if (this.radio == 1) {
        this.buy();
        this.$refs.child.open();
      } else {
          //微信支付
        jsBridge.pay(
          {
            channel: 0, //integer, 支付渠道, 0微信，1支付宝
            orderid: "201601010001", //string(64), 订单号
            title: "购买VIP会员", //string(128), 订单名称
            amount: this.total //decimal，支付金额（元）
          },
          function(succ) {
            if (succ) {
              alert("支付成功");
            } else {
              alert("支付失败或取消了支付");
            }
          }
        );
      }
    },
    submit(pwd) {
        //console.log(pwd)
        api.minicart.template.choices('shop/payment/payOrder',{order:this.id,password:pwd,type:this.radio}).then(succ=>{
          if(succ.status==200){
            this.$router.push('/paySuccess')
          }else if(succ.status==400){
            alert(succ.msg)
          }
        }).catch(err=>{})
    }
  }
};
</script>

<style scoped>
</style>
