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
        <div
          class="infinite-list-wrapper"
          style="overflow:auto"
        >
          <ul
            class="list clear"
            v-infinite-scroll="load"
            infinite-scroll-disabled="disabled"
          >
            <li v-for="(item,index) in items" :key="index">
              <router-link :to="{path:'/details',query:{id:item.id}}">
                <!-- <img :src="item.img"> -->
                <el-image :src="item.img">
                  <div
                    slot="error"
                    class="image-slot"
                  >
                    <i class="el-icon-picture-outline"></i>
                  </div>
                </el-image>
                <h5>{{item.title}}</h5>
                <div class="priceVolume">
                  <h4>￥{{item.price}}</h4>
                  <span>销量:{{item.volume}}</span>
                </div>
              </router-link>
            </li>
          </ul>
          <p
            v-if="loading"
            style="text-align:center"
          ><i class="el-icon-loading"></i>加载中...</p>
          <p
            v-if="noMore"
            style="text-align:center"
          >没有更多了</p>
        </div>

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
      count:3,
      loading: false,
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
  },
  computed: {
    noMore() {
      return this.count >= this.items.length;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        // this.count += 2;
        // this.loading = false;
      }, 1000);
    }
  }
};
</script>

<style scoped>
</style>
