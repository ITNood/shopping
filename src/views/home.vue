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
      bannerList: [
        { src: require("../assets/image/banner.jpg") },
        { src: require("../assets/image/banner.jpg") },
        { src: require("../assets/image/banner.jpg") }
      ],
      todos: [
        { img: require("../assets/image/list_banner1.jpg"), url: "" },
        { img: require("../assets/image/list_banner2.jpg"), url: "" }
      ],
      lists: [
        {
          title: "限时打折",
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
        },
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
              price: "8000.00"
            },
            {
              url: "",
              img: require("../assets/image/shop.jpg"),
              title: "纯电动牙刷",
              price: "8000.00",
              id: 1
            }
          ]
        },
        {
          title: "每日推荐",
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
</style>
