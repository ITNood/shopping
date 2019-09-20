<template>
  <div>
    <Header :title="msg" />
    <div class="layout">
      <div class="choose">
        <!--有地址-->
        <div
          v-if="lsitaddress.address&&lsitaddress.mobile"
          @click="selectAddress()"
        >
          <div class="contact">
            <div class="username">收货人：{{lsitaddress.call}}</div>
            <div class="mobile">{{lsitaddress.mobile}}</div>
          </div>
          <div class="address"><i class="el-icon-location"></i>{{lsitaddress.region}}{{lsitaddress.address}}</div>
          <div style="display:none">{{lsitaddress.id}}</div>
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
          <span style="font-weight:normal">商家：{{item.name}}</span>
        </div>
        <ul class="shopList">
          <li
            v-for="(todo,index) in item.shop"
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
                <router-link :to="{path:'/details',query:{id:todo.id}}">{{todo.name}}</router-link>
              </div>
              <div style="display:none">{{todo.item_id}}</div>
              <!--属性-->
              <div class="quality">
                <span
                  v-for="(quality,index) in todo.item"
                  :key="index"
                >{{quality.name}}:{{quality.val}}</span>
              </div>
              <!--价格、数量选择-->
              <div class="priceNumber">
                <span>￥{{todo.price}}</span>
                <el-input-number
                  v-model="todo.number"
                  :min="1"
                  size="mini"
                  class="addNumber"
                ></el-input-number>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <!--end-->
      <!--商品数量-->
      <div class="shopTotal">共{{number}}件商品 小计：￥{{total}}</div>
      <!--订单详情-->
      <ul class="orderText">
        <!-- <li>订单编号<span>{{orderNo}}</span></li> -->
        <li>订单时间<span>{{date}}</span></li>
        <li>可用优惠<span
            style="color:#d10216;font-weight:600"
            @click="selectCoupon()"
            v-if="coupon"
          >- {{coupon}}
            <i
              class="el-icon-arrow-right"
              style="color:#000"
            ></i></span>
          <span
            style="color:#d10216;font-size:12px;"
            v-else
          >不可用</span>
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
      id="slectCoupon"
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
            @click="add($event)"
            :title="item.id"
          >
            <div class="contact">
              <div class="username">收货人：{{item.username}}</div>
              <div class="mobile">{{item.mobile}}</div>
            </div>
            <div class="address"><i class="el-icon-location"></i>{{item.address}}</div>
          </li>
        </ul>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import api from '../API/index'
import Header from "../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "提交订单",
      lsitaddress: {},
      selected: "1",
      number: 2,
      //orderNo: 123456789,
      date: "",
      coupon: "",
      fare: "",
      total: "",
      coupons: false, //选择优惠券
      addressList: false,
      items: [],
      todos: [],
      lists: [] //地址
    };
  },
  updated() {
    //价格计算
    let allprice = [];
    this.items.map(item => {
      item.shop.map(goods => {
        allprice.push(goods.price * goods.number);
      });
    });
    //console.log(allprice)
    if (allprice.length == 0) {
      this.total = 0;
    } else {
      this.total = allprice.reduce((a, b) => {
        return a + b;
      });
    }
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      let data = window.localStorage.getItem("data");
      let result = JSON.parse(data); //字符串转对象
      //console.log(result);
      let isadd = false;
      let address = {};
      if (result) {
        this.items = this.items.concat(result.data);
        this.lists = this.lists.concat(result.address);
        this.lists.map(list => {
          //判断是否有默认地址，没有就设置第一条为默认地址
          if (list.default == 1) {
            address = list;
            isadd = true;
          }
        });
        //console.log(address)
        if (isadd == true) {
          // console.log(1);
          this.lsitaddress = address;
        } else {
          this.lsitaddress = this.lists[0];
        }
        this.date = result.date;
        this.fare = result.freight;
        this.total = (Math.floor(result.amount * 100) / 100).toFixed(2);
        //商品数量
        this.items.map(list => {
          list.shop.map(goods => {
            //console.log(goods)
          });
        });
      }
    },
    selectAddress() {
      //选择地址
      console.log("选择地址");
      this.addressList = true;
    },
    add(ev){
      console.log(ev)
      let id=ev.target.parentNode.title
      console.log(id)
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
    //goods_id  item_id shop_id number数组
    //多个的话是什么格式
    submit() {
      let goodslist = [];
      this.items.map(item => {
        item.shop.map(good => {
          let goods = {};
          goods.goods_id = good.goods_id;
          goods.shop_id = good.shop_id;
          goods.item_id = good.item_id;
          goods.number = good.number;
          goodslist.push(goods);
        });
      });
      //console.log(goodslist);
      
      let id=this.lsitaddress.id
     // console.log(id)
      api.minicart.template.choices('shop/payment/createOrder',{shoper:goodslist,id:id}).then(succ=>{
        if(succ.status==200){
          window.localStorage.setItem('result',JSON.stringify(succ.res))
          this.$router.push('/payment')
        }else if(succ.status==400){
          alert(succ.msg)
        }
      }).catch(err=>{

      })
    }
  }
};
</script>

<style scoped>
</style>
