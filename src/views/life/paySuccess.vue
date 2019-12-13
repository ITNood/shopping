<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="success">
        <img src="../../assets/image/true.png">
        <h5>￥{{total}}</h5>
        <p>支付成功</p>
        <div class="sucees_btn">
          <router-link to="/order">查看订单</router-link>
          <router-link to="/">返回首页</router-link>
        </div>
      </div>
      <!--限时打折 、猜你喜欢 、每日推荐-->
      <div
        class="listshop"
      >
        <div class="shopTitle">猜你喜欢<router-link
            class="all"
            :to="{path:'/like?id=1'}"
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row
          :gutter="15"
          class="shop"
        >
          <el-col
            :span="8"
            v-for="(time,index) in items"
            :key="index"
          >
            <router-link :to="{path:'/details',query:{id:time.id}}">
              <!-- <img :src="time.img"> -->
              <el-image :src="time.pic">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <h6>{{time.name}}</h6>
              <h4>￥{{time.price}}</h4>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../API/index'
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "支付成功",
      total: '',
     items:[]
    };
  },
  mounted() {
    this.getdata()
    this.getresult()
  },
  methods: {
    getresult(){
      api.minicart.template.choices('shop/likeGoods/like').then(succ=>{
        if(succ.status==200){
          if(succ.res.goods.length>0){
            this.items=this.items.concat(succ.res.goods)
          }
        }
      }).catch(err=>{

      })
    },
    getdata(){
      let data=localStorage.getItem('result')
      let result=JSON.parse(data)
      console.log(result)
      if(result){
        this.total=result.total_price
      }
    },
  },
};
</script>

<style scoped>
.listshop{
    padding: 15px;
    background: white;
}
</style>
