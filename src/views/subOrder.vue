<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="choose">
        <!--有地址-->
        <div
          v-if="address&&mobile"
          @click="selectAddress()"
        >
          <div class="contact">
            <div class="username">收货人：{{username}}</div>
            <div class="mobile">{{mobile}}</div>
          </div>
          <div class="address"><i class="el-icon-location"></i>{{address}}</div>
        </div>
        <!--没有地址-->
        <div
          class="noAddress"
          v-else
        >
          <router-link to="/addEdit"><i class="el-icon-location"></i>添加收货地址</router-link>
        </div>
      </div>
      <!--商品列表-->
      <div
        class="carList"
        v-for="(item,index) in items"
        :key="index"
      >
        <div class="shoper clear">
          <!--全选-->
          <span style="font-weight:normal">商家：{{item.title}}</span>
        </div>
        <ul class="shopList">
          <li
            v-for="(todo,index) in item.todos"
            :key="index"
          >
            <!--商品图片-->
            <router-link
              :to="{path:'/details',query:{id:todo.id}}"
              style="margin-left:0"
            >
            <!-- <img :src="todo.img"> -->
            <el-image :src="todo.img">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
            </router-link>
            <div class="shopRight">
              <!--商品名称-->
              <div class="shopName">
                <router-link :to="{path:'/details',query:{id:todo.id}}">{{todo.title}}</router-link>
              </div>
              <!--属性-->
              <div class="quality">
                <span
                  v-for="(quality,index) in todo.lists"
                  :key="index"
                >{{quality.name}}:{{quality.nature}}</span>
              </div>
              <!--价格、数量选择-->
              <div class="priceNumber">
                <span>￥{{todo.price}}</span>
                <el-input-number
                  v-model="todo.num"
                  :min="1"
                  class="addNumber"
                ></el-input-number>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--end-->
      <!--商品数量-->
      <div class="shopTotal">共{{number}}件商品 小计：￥{{price}}</div>
      <!--订单详情-->
      <ul class="orderText">
        <li>订单编号<span>{{orderNo}}</span></li>
        <li>订单时间<span>{{date}}</span></li>
        <li>可用优惠<span
            style="color:#d10216;font-weight:600"
            @click="selectCoupon()"
          >- {{coupon}}
            <i
              class="el-icon-arrow-right"
              style="color:#000"
            ></i></span>
        </li>
        <li>运费<span>{{fare}}</span></li>
        <li>需支付<span style="color:#d10216;font-weight:600">￥ {{total}}</span></li>
      </ul>
    </div>
    <el-row class="handleOrder">
      <el-col
        :span="12"
        class="removeOrder"
      ><span @click="remove()">取消</span></el-col>
      <el-col
        :span="12"
        class="subOrder"
      ><span @click="submit()">提交订单>></span></el-col>
    </el-row>
    <!--选择优惠券-->
    <el-drawer
      :visible.sync="coupons"
      direction="btt"
      size="80%"
      title="选择优惠券"
      class="couponDrawer"
      :wrapperClosable="false"
    >
      <div class="couponlist">
        <ul class="coupons">
          <li
            v-for="(item,index) in todos"
            :key="index"
          >
            <div class="couponLeft">
              <h5>{{item.name}}</h5>
              <p>￥<span>{{item.amount}}</span>{{item.text}}</p>
            </div>
            <div class="couponRight">
              <router-link
                v-if="item.state==1"
                :to="item.url"
              >{{item.user}}</router-link>
              <router-link
                v-else
                :to="item.url"
                class="color"
              >{{item.user}}</router-link>
              <p>{{item.date}}到期</p>
            </div>
          </li>
        </ul>
      </div>
    </el-drawer>

    <!--选择收货地址-->
    <el-drawer
      :visible.sync="addressList"
      direction="btt"
      size="80%"
      title="收货地址"
    >
      <div styele="overflow:hidden">
        <ul class="addressList coupons">
          <li
            v-for="(item,index) in lists"
            :key="index"
            style="padding:5px 20px;"
          >
            <div class="contact">
              <div class="username">收货人：{{username}}</div>
              <div class="mobile">{{mobile}}</div>
            </div>
            <div class="address"><i class="el-icon-location"></i>{{address}}</div>
          </li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "提交订单",
      username: "张三",
      mobile: 13800138000,
      address: "广东省深圳市南山区南山村二十巷8号101",
      selected: "1",
      id: 1,
      number: 2,
      price: "200.00",
      orderNo: 123456789,
      date: "2019/09/09",
      coupon: 50,
      fare: "包邮",
      total: "200.00",
      coupons: false, //选择优惠券
      addressList: false,
      items: [
        {
          title: "店铺",
          todos: [
            {
              num: 1,
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title: "商品名称",
              price: "100.00",
              lists: [
                { name: "颜色", nature: "白色" },
                { name: "规格", nature: "自动" }
              ]
            },
            {
              num: 1,
              id: 2,
              img: require("../assets/image/shop.jpg"),
              title: "商品名称",
              price: "100.00",
              lists: [
                { name: "颜色", nature: "白色" },
                { name: "规格", nature: "自动" }
              ]
            }
          ]
        }
      ],
      todos: [
        {
          name: "天使鹭优惠券",
          amount: "50",
          text: "满300减50元",
          id: 2,
          date: "2019.12.13 12:00",
          user: "全类品",
          url: "",
          state: 1
        },
        {
          name: "天使鹭优惠券",
          amount: "50",
          text: "满300减50元",
          id: 2,
          date: "2019.12.13 12:00",
          user: "去使用",
          url: "",
          state: 2
        }
      ],
      lists: [
        {
          username: "张三",
          mobile: 13800138000,
          address: "广东省深圳市南山区南山村二十巷8号101",
          id: 1
        },
        {
          username: "张三",
          mobile: 13800138000,
          address: "广东省深圳市南山区南山村二十巷8号101",
          id: 2
        }
      ]
    };
  },
  methods: {
    selectAddress() {
      //选择地址
      console.log("选择地址");
      this.addressList = true;
    },
    //选择优惠券
    selectCoupon() {
      console.log("优惠券");
      this.coupons = true;
    },
    //取消订单
    remove() {
      console.log("取消订单");
    },
    //提交订单
    submit() {
      console.log("提交订单");
    }
  }
};
</script>

<style scoped>
</style>
