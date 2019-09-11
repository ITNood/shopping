<template>
  <div>
    <Header :title="msg" />
    <!--购物车-->
    <router-link
      to="/car"
      class="cars"
    ><i class="el-icon-shopping-cart-2"></i></router-link>
    <div class="layout">
      <Swiper :banner="bannerList" />
      <div class="details">
        <el-row>
          <el-col
            :span="20"
            style="border-right:1px solid rgba(0,0,0,.2)"
            class="textLeft"
          >
            <h5>￥{{price}}<span>￥{{oldPrice}}</span></h5>
            <h4>{{title}}</h4>
          </el-col>
          <el-col
            :span="4"
            class="textRight"
          >
            <div
              class="share"
              @click="share()"
            >
              <i class="el-icon-position"></i>
              <p>分享</p>
            </div>
          </el-col>
        </el-row>
        <div class="sales">
          <el-row>
            <el-col :span="20">
              销量:{{number}}件
            </el-col>
            <el-col
              :span="4"
              style="text-align:center"
            >{{address}}</el-col>
          </el-row>
        </div>
      </div>
      <!--店铺-->
      <div class="store">
        <router-link to="">
          <div class="storeLeft">
            <img :src="shopImg">
            <span :title="shopName">{{shopName}}</span>
          </div>
          <div class="storeRight">进店<i class="el-icon-arrow-right"></i></div>
        </router-link>
      </div>
      <!--详情-->
      <div class="detailsTitle">
        <el-divider>商品详情</el-divider>
        <div v-html="details">{{details}}</div>
      </div>
    </div>
    <!--底部-->
    <el-row id="detailsBottom">
      <el-col
        :span="12"
        class="bottomLeft"
      >
        <router-link to=""><i class="el-icon-s-shop"></i>
          <p>店铺</p>
        </router-link>
        <router-link to=""><i class="el-icon-chat-dot-round"></i>
          <p>沟通</p>
        </router-link>
        <router-link
          to=""
          :style="{'color':(isCollect ? '':'red')}"
        ><i :class="isCollect ? classA:classB"></i>
          <p>{{isCollect?'收藏':'已收藏'}}</p>
        </router-link>
      </el-col>
      <el-col
        :span="6"
        class="joinCar"
      ><span @click="join()">加入购物车</span></el-col>
      <el-col
        :span="6"
        class="onecebuy"
      ><span @click="buy()">立即购买</span></el-col>
    </el-row>
    <!--加入购物车-->
    <el-drawer
      direction="btt"
      :visible.sync="select"
      :wrapperClosable="false"
      size="80%"
    >
      <div class="selectnature">
        <!--商品-->
        <div class="selectShop">
          <div class="shopDetails">
              <!-- <img :src="imgSrc"> -->
              <el-image :src="imgSrc">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <div class="selectRight">
                  <h5>{{title}}</h5>
                  <h4>￥{{price}}</h4>
                  <p>原价：<span>￥{{oldPrice}}</span></p>
              </div>
          </div>
        </div>
        <!--属性-->
        <div class="selectShop" v-for="(list,index) in lists" :key="index">
            <p>{{list.name}}</p>
            <ul class="listNature">
                <li @click="radio($event)" v-for="(nature,index) in list.natures" :key="index">{{nature.text}}</li>
            </ul>
        </div>
        <!--数量-->
        <div class="shopNumber">
          数量<el-input-number v-model="number" :min="1" class="addShop"></el-input-number>
        </div>
      </div>
      <el-button class="carbtn">确定</el-button>
      
    </el-drawer>
  </div>
</template>

<script>
import Header from "../components/header";
import Swiper from "../components/swiper";
import jsBridge from "../assets/js/jsbridge-mini";
import Drawer from "../components/drawer";
export default {
  components: { Header, Swiper, Drawer },
  data() {
    return {
      msg: "商品详情",
      price: "100.00",
      oldPrice: "299.00",
      title: "商品名称",
      number: 0,
      address: "地址",
      shopName: "店铺名称",
      details: "",
      classA: "el-icon-star-off",
      classB: "el-icon-star-on",
      isCollect: true,
      select: false,
      shopImg: require("../assets/image/icon_shop.png"),
      imgSrc: require("../assets/image/shop.jpg"),
      number:1,
      
      bannerList: [
        { src: require("../assets/image/details.jpg") },
        { src: require("../assets/image/details.jpg") },
        { src: require("../assets/image/details.jpg") }
      ],
      lists:[
          {
              name:'颜色',
              natures:[
                  {text:'白色'},
                  {text:'红色'}
              ]
          },
          {
              name:'尺寸',
              natures:[
                  {text:'X'},
                  {text:'XL'}
              ]
          }
      ]
    };
  },
  methods: {
    //加入购物车
    join() {
      this.select = true;
    },
    //立即购买
    buy(){
      this.select=true
    },
    share() {
      //分享
      let shopTitle = this.title;
      jsBridge.share(
        {
          //分享到，0 微信朋友圈，1 微信好友，2 QQ好友，3 QQ空间；未指定则弹出分享菜单
          to: "",
          //标题，未指定则为当前页面 title 标题
          title: "可以指定标题",
          //链接，未指定则为当前页面链接
          link: "",
          //图标，未指定则为 App 图标
          imgUrl: "",
          //描述，如未指定，App 会尝试抓取页面 meta description content，<meta name="description" content="页面描述..." />
          //均无描述内容则显示链接
          desc: shopTitle
        },
        function(succ) {
          alert(succ ? "分享成功" : "分享失败或取消了分享");
        }
      );
    },
    //选择属性
    radio(ev){

    }
  }
};
</script>

<style scoped>
</style>
