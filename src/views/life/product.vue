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
            <li
              v-for="(item,index) in items"
              :key="index"
            >
              <router-link :to="{path:'/details',query:{id:item.id}}">
                <!-- <img :src="item.img"> -->
                <el-image :src="item.pic">
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
                  <span>销量:{{item.sales}}</span>
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
import api from "../../API/index";
import Search from "../../components/search";
import Header from "../../components/header";
export default {
  components: { Header, Search },
  data() {
    return {
      msg: "",
      isTrue: true,
      fixed: true,
      count: false,
      loading: false,
      items: [],
      page: 1
    };
  },
  computed: {
    noMore() {
      return this.count;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  created() {
    this.getdata();
  },
  methods: {
    getdata() {
      let id = this.$route.query.id;
      api.minicart.template
        .choices("shop/goods/index", { id: id })
        .then(succ => {
          if (succ.status == 200) {
            //console.log(111)
            if (result.res.length == 0 || result.res.length < 20) {
              this.count = true;
              this.loading = false;
            }
            if (succ.res.goods.length > 0) {
              this.items = this.items.concat(succ.res.goods);
            }
            this.msg = succ.res.catName;
          }
        })
        .catch(err => {});
    },
    load() {
      this.loading = true;
      setTimeout(() => {
        this.page++;
        api.minicart.template
          .choices("shop/goods/index", { id: id, page: this.page })
          .then(succ => {
            if (succ.status == 200) {
              //console.log(111)
              if (result.res.length == 0 || result.res.length < 20) {
                this.count = true;
                this.loading = false;
              }
              if (succ.res.goods.length > 0) {
                this.items = this.items.concat(succ.res.goods);
              }
            }
          })
          .catch(err => {});
      }, 1000);
    }
  }
};
</script>

<style scoped>
</style>
