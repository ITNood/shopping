<template>
  <div>
    <Header :title="msg" />
    <div class="layout" style="margin-bottom:0;">
      <img :src="banner">
      <div class="discountList">
        <ul>
          <li
            v-for="(item,index) in items"
            :key="index"
          >
            <img :src="item.img">
            <div class="discountRight">
              <h5>{{item.title}}</h5>
              <div class="timeOver">距离结束：<span>
                  <timer :endTime='item.endTime' /></span></div>
              <div class="price">
                ￥{{item.price}} <router-link :to="{path:'/details',query:{id:item.id}}">立即抢购</router-link>
              </div>
              <p class="oldPrice">￥{{item.oldPrice}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/header";
import Timer from "../components/time";
export default {
  components: { Header, Timer },
  data() {
    return {
      msg: "限时打折",
      banner: require("../assets/image/discount.jpg"),
      items: [
        {
          img: require("../assets/image/shop.jpg"),
          title: "商品名称",
          endTime: "2019-09-05 17:23:00",
          id: 2,
          price: "100.00",
          oldPrice:'199.00'
        },
        {
          img: require("../assets/image/shop.jpg"),
          title: "商品名称",
          endTime: "2019-09-08 22:00:00",
          id: 3,
          price: "100.00",
          oldPrice:'199.00'
        },
        {
          img: require("../assets/image/shop.jpg"),
          title: "商品名称",
          endTime: "2019-09-07 22:00:00",
          id: 3,
          price: "100.00",
          oldPrice:'199.00'
        },
        {
          img: require("../assets/image/shop.jpg"),
          title: "商品名称",
          endTime: "2019-09-06 22:00:00",
          id: 3,
          price: "100.00",
          oldPrice:'199.00'
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
