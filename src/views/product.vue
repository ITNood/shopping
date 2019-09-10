<template>
  <div>
    <Header :title="msg" />
    <Search
      :isActive="isTrue"
      :isFixed="fixed"
      style="top:60px;"
    />
    <div
      class="layout"
      style="margin:120px 0 0"
    >
      <div class="product">
        <el-row
          :gutter="15"
          class="productList"
        >
          <el-col
            :span="12"
            v-for="(item,index) in items"
            :key="index"
          >
            <router-link :to="{path:'/details',query:{id:item.id}}">
              <img :src="item.img">
              <h5>{{item.title}}</h5>
              <div class="priceVolume">
                <h4>￥{{item.price}}</h4>
                <span>销量:{{item.volume}}</span>
              </div>
            </router-link>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/search";
import Header from "../components/header";
export default {
  components: { Header, Search },
  data() {
    return {
      msg: "所有分类",
      isTrue: true,
      fixed: true,
      items: [
        {
          id: 1,
          img: require("../assets/image/shop.jpg"),
          title: "商品标题",
          price: "200.00",
          volume: "50230"
        },
        {
          id: 1,
          img: require("../assets/image/shop.jpg"),
          title: "商品标题",
          price: "200.00",
          volume: "50230"
        },
        {
          id: 1,
          img: require("../assets/image/shop.jpg"),
          title: "商品标题",
          price: "200.00",
          volume: "50230"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
