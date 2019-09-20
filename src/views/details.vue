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
              销量:{{volume}}件
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
        <router-link :to="{path:'/details',query:{id:shopid}}">
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
        <a
          @click="keep()"
          :style="{'color':(isCollect ? '':'#ffc105')}"
        ><i :class="isCollect ? classA:classB"></i>
          <p>{{isCollect?'收藏':'已收藏'}}</p>
        </a>
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
        <div
          class="selectShop"
          v-for="(list,index) in lists"
          :key="index"
        >
          <p>{{list.name}}</p>
          <div class="listNature">
            <el-radio-group
              v-model='radio[index]'
              @change="shuxing($event)"
              size="mini"
            >
              <el-radio-button
                :label="nature.id"
                v-for="(nature,index) in list.val"
                :key="index"
              >{{nature.val}}</el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <!--数量-->
        <div class="shopNumber">
          数量<el-input-number
            v-model="number"
            :min="1"
            class="addShop"
            size="mini"
          ></el-input-number>
        </div>
      </div>
      <el-button
        class="carbtn"
        @click="submit()"
      >确定</el-button>
    </el-drawer>
  </div>
</template>

<script>
import api from "../API/index";
import Header from "../components/header";
import Swiper from "../components/swiper";
import jsBridge from "../assets/js/jsbridge-mini";
import Drawer from "../components/drawer";
export default {
  components: { Header, Swiper, Drawer },
  data() {
    return {
      radio: [],
      msg: "商品详情",
      price: "0.00", //现价
      oldPrice: "0.00", //原价
      title: "",
      volume: 0, //销量
      address: "",
      shopName: "",
      details: "",
      classA: "el-icon-star-off",
      classB: "el-icon-star-on",
      isCollect: true, //收藏
      select: false, //选择属性
      shopImg: "", //店铺logo
      imgSrc: "", //商品图
      number: 1,
      //轮播
      bannerList: [],
      //属性
      lists: [],
      shopid: "",
      i: 0
    };
  },
  methods: {
    getdata() {
      let id = this.$route.query.id;
      api.minicart.template
        .choices("shop/goodsDetail/index", { id: id })
        .then(succ => {
          if (succ.status == 200) {
            this.bannerList = this.bannerList.concat(succ.res.slideshow); //轮播
            this.lists = this.lists.concat(succ.res.spec); //属性
            this.price = succ.res.goods.price; //单价
            this.oldPrice = succ.res.goods.orig_price; //原价
            this.title = succ.res.goods.name; //商品名称
            this.volume = succ.res.goods.sales; //销量
            this.imgSrc = succ.res.goods.pic;//商品图
            this.address = succ.res.goods.city;
            this.details = succ.res.goods.detail; //详情
            this.shopName = succ.res.shop_name; //店铺名称
            this.shopImg = succ.res.shop_img; //logo
            this.shopid = succ.res.shop_id; //店铺id
          }
        })
        .catch(err => {});
    },
    //选择属性获取单价
    shuxing(ev) {
      let id = this.$route.query.id;
      api.minicart.template.choices("shop/goods/getGoodsPrice", { id: id, item: this.radio })
        .then(succ => {
          if (succ.status == 200) {
            if (succ.res.price == 0) {
              return false;
            } else {
              this.price = succ.res.price;
            }
          }
        });
    },
    //收藏
    keep() {
      this.isCollect = !this.isCollect;
    },
    //加入购物车
    join() {
      this.select = true;
      this.i = 0;
    },
    //立即购买
    buy() {
      this.i = 1;
      this.select = true;
    },
    submit() {
      let id = this.$route.query.id;
      //if(i==0)加入购物车else购买商品
      if (this.i == 0) {
        api.minicart.template
          .choices("shop/shopCar/insert", {
            id: id,
            number: this.number,
            item: this.radio
          })
          .then(succ => {
            if (succ.status == 200) {
              alert(succ.msg);
              this.$router.push("/car");
            } else if (succ.status == 400) {
              alert(succ.msg);
            }
          })
          .catch(err => {});
      } else {
        api.minicart.template.choices('shop/createOrder/index',{id:id,number:this.number,item:this.radio,shop_id:this.shopid}).then(succ=>{
          if(succ.status==200){
           // console.log(succ.res)
            window.localStorage.setItem('data',JSON.stringify(succ.res))
            this.$router.push('/subOrder')
          }else if(succ.status==400){
            alert(succ.msg)
          }
        }).catch(err=>{

        })
      }
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
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>

<style scoped>
</style>
