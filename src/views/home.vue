<template>
  <div>
    <Search
      :isActive="isTrue"
      :isFixed="fixed"
    />
    <div class="layout">
      <Swiper :banner="bannerList" />
      <!--分类菜单-->
      <Mune />
      <!--banenr-->
      <div class="banenr">
        <router-link
          v-for="(banner,index) in todos"
          :key="index"
          :to="banner.url"
        >
          <img :src="banner.img">
        </router-link>
      </div>
      <!--限时打折 、猜你喜欢 、每日推荐-->
      <div class="listshop" v-show="discount">
        <div class="shopTitle">限时打折<router-link
            class="all"
            to="/discount"
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row
          :gutter="15"
          class="shop"
        >
          <el-col
            :span="8"
            v-for="(time,index) in times"
            :key="index"
          >
            <router-link :to="{path:'/details',query:{id:time.id}}">
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
      <!--猜你喜欢-->
      <div class="listshop" v-show="like">
        <div class="shopTitle">猜你喜欢<router-link
            class="all"
            to="/like?id=1"
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row
          :gutter="15"
          class="shop"
        >
          <el-col
            :span="8"
            v-for="(like,index) in likes"
            :key="index"
          >
            <router-link :to="{path:'/details',query:{id:like.id}}">
              <el-image :src="like.pic">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <h6>{{like.name}}</h6>
              <h4>￥{{like.price}}</h4>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <!--每日推荐-->
      <div class="listshop" v-show="recommend">
        <div class="shopTitle">每日推荐<router-link
            class="all"
            to="/like?id=2"
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row
          :gutter="15"
          class="shop"
        >
          <el-col
            :span="8"
            v-for="(date,index) in data"
            :key="index"
          >
            <router-link :to="{path:'/details',query:{id:date.id}}">
              <el-image :src="date.pic">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <h6>{{date.name}}</h6>
              <h4>￥{{date.price}}</h4>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--底部导航-->
    <Footer />
  </div>
</template>

<script>
import api from "../API/index";
import Search from "../components/search";
import Swiper from "../components/swiper";
import Mune from "../components/mune";
import Footer from "../components/bottom";
export default {
  components: { Search, Swiper, Mune, Footer },
  data() {
    return {
      isTrue: true,
      fixed: true,
      discount:false,
      recommend:false,
      like:false,
      bannerList: [],//轮播
      todos: [],//广告图
      times: [],//限时打折
      likes:[],//猜你喜欢
      data:[]//每日推荐

    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      api.minicart.template
        .choices("shop/home/index")
        .then(succ => {
          //轮播
          if(succ.res.slideshow.length>0){
            this.bannerList=this.bannerList.concat(succ.res.slideshow)
          }
          //限时
          if(succ.res.discountGoods.length>0){
            this.discount=true
            this.times=this.times.concat(succ.res.discountGoods)
          }else {
            this.discount=false
          }
          //猜你喜欢
          if(succ.res.likeGoods.length>0){
            this.like=true
            this.likes=this.likes.concat(succ.res.likeGoods)
          }else{
            this.like=false
          }
          //每日推荐
          if(succ.res.proposalGoods.length>0){
            this.recommend=true
            this.data=this.data.concat(succ.res.proposalGoods)
          }else {
            this.recommend=false
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
</style>
