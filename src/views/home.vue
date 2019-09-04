<template>
  <div>
    <Search
      :isActive="isTrue"
      :isFixed="fixed"
    />
    <div class="layout">
      <Swiper />
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
      <!--限时打折-->
      <div class="listshop">
        <div class="shopTitle">限时打折<router-link
            class="all"
            to=""
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row :gutter="15" class="shop">
          <el-col
            :span="8"
            v-for="(time,index) in times"
            :key="index"
          >
            <router-link :to="time.url">
              <img :src="time.img">
              <h6>{{time.title}}</h6>
              <h4>￥{{time.price}}</h4>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <!--猜你喜欢-->
      <div class="listshop">
        <div class="shopTitle">猜你喜欢<router-link
            class="all"
            to=""
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row :gutter="15" class="shop">
          <el-col
            :span="8"
            v-for="(time,index) in times"
            :key="index"
          >
            <router-link :to="time.url">
              <img :src="time.img">
              <h6>{{time.title}}</h6>
              <h4>￥{{time.price}}</h4>
            </router-link>
          </el-col>
        </el-row>
      </div>
      <!--媒体推荐-->
      <div class="listshop">
        <div class="shopTitle">每日推荐<router-link
            class="all"
            to=""
          >查看全部<i class="el-icon-arrow-right"></i></router-link>
        </div>
        <el-row :gutter="15" class="shop">
          <el-col
            :span="8"
            v-for="(time,index) in times"
            :key="index"
          >
            <router-link :to="time.url">
              <img :src="time.img">
              <h6>{{time.title}}</h6>
              <h4>￥{{time.price}}</h4>
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
      todos: [
        { img: require("../assets/image/list_banner1.jpg"), url: "" },
        { img: require("../assets/image/list_banner2.jpg"), url: "" }
      ],
      times: [
        {
          url: "",
          img: require("../assets/image/shop.jpg"),
          title: "纯电动牙刷",
          price: "8000.00"
        },
        {
          url: "",
          img: require("../assets/image/shop.jpg"),
          title: "纯电动牙刷",
          price: "8000.00"
        },
        {
          url: "",
          img: require("../assets/image/shop.jpg"),
          title: "纯电动牙刷",
          price: "8000.00"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
