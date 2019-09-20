<template>
  <div>
    <Header :title="msg" />
    <div
      class="layout"
      style="margin-bottom:0;"
    >
      <img :src="banner">
      <div class="discountList">
        <ul>
          <li
            v-for="(item,index) in items"
            :key="index"
          >
            <!-- <img :src="item.img"> -->
            <el-image :src="item.pic">
              <div
                slot="error"
                class="image-slot"
              >
                <i class="el-icon-picture-outline"></i>
              </div>
            </el-image>
            <div class="discountRight">
              <h5>{{item.name}}</h5>
              <div class="timeOver">距离结束：
                <span style="padding-right:8px;">
                  <timer :endTime='item.end_time' /></span>
              </div>
              <div class="price">
                ￥{{item.price}} <router-link :to="{path:'/discount',query:{id:item.id}}">立即抢购</router-link>
              </div>
              <p class="oldPrice">￥{{item.orig_price}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../API/index'
import Header from "../components/header";
import Timer from "../components/time";
export default {
  components: { Header, Timer },
  data() {
    return {
      msg: "限时打折",
      banner: require("../assets/image/discount.jpg"),
      items: []
    };
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata(){
      api.minicart.template.choices('shop/promotion/index').then(succ=>{
        if(succ.status==200){
          if(succ.res.goods.length>0){
            this.items=this.items.concat(succ.res.goods)
          }
        }
      }).catch(err=>{})
    }
  }
};
</script>

<style scoped>

</style>
