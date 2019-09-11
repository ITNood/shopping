<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="success">
        <img src="../assets/image/true.png">
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
        v-for="(list,index) in lists"
        :key="index"
      >
        <div class="shopTitle">{{list.title}}<router-link
            class="all"
            :to="{path:'/discount',query:{id:list.id}}"
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row
          :gutter="15"
          class="shop"
        >
          <el-col
            :span="8"
            v-for="(time,index) in list.times"
            :key="index"
          >
            <router-link :to="{path:'/details',query:{id:time.id}}">
              <!-- <img :src="time.img"> -->
              <el-image :src="time.img">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <h6>{{time.title}}</h6>
              <h4>￥{{time.price}}</h4>
            </router-link>
          </el-col>
        </el-row>
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
      msg: "支付成功",
      total: "200.00",
      lists: [
        {
          title: "猜你喜欢",
          url: "/list",
          id: "2",
          times: [
            {
              url: "",
              img: require("../assets/image/shop.jpg"),
              title: "纯电动牙刷",
              price: "8000.00",
              id: 1
            },
            {
              url: "",
              img: require("../assets/image/shop.jpg"),
              title: "纯电动牙刷",
              price: "8000.00",
              id: 1
            },
            {
              url: "",
              img: require("../assets/image/shop.jpg"),
              title: "纯电动牙刷",
              price: "8000.00",
              id: 1
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.listshop{
    padding: 15px;
    background: white;
}
</style>
