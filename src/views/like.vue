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
                <h5>{{item.name}}</h5>
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
import api from "../API/index";
import Search from "../components/search";
import Header from "../components/header";
export default {
  components: { Header, Search },
  data() {
    return {
      msg: "",
      isTrue: true,
      fixed: true,
      count: 20,
      loading: false,
      page: 1,
      items: []
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
  mounted() {
    let id = this.$route.query.id;
    if(id==1){
      this.msg='猜你喜欢'
    }else{
      this.msg='每日推荐'
    }
    this.getdata();

  },
  methods: {
    getdata() {
      let id = this.$route.query.id;
      if (id == 1) {
        api.minicart.template
          .choices("shop/likeGoods/index")
          .then(succ => {
            if (succ.status == 200) {
              if (succ.res.goods.length > 0) {
                this.items = this.items.concat(succ.res.goods);
              }
            }
          })
          .catch(err => {});
      }else {
        api.minicart.template
          .choices("shop/proposalGoods/index")
          .then(succ => {
            if (succ.status == 200) {
              if (succ.res.goods.length > 0) {
                this.items = this.items.concat(succ.res.goods);
              }
            }
          })
          .catch(err => {});
      }
    },
    load() {
      let id = this.$route.query.id;
      this.loading = true;
      setTimeout(() => {
        this.page++;
        if (id == 1) {
          api.minicart.template
            .choices("shop/likeGoods/index", { page: this.page })
            .then(succ => {
              if (succ.status == 200) {
                if (succ.res.goods.length > 0) {
                  this.items = this.items.push(succ.res.goods);
                }
              }
            })
            .catch(err => {});
        }else {
          api.minicart.template
            .choices("shop/proposalGoods/index", { page: this.page })
            .then(succ => {
              if (succ.status == 200) {
                if (succ.res.goods.length > 0) {
                  this.items = this.items.push(succ.res.goods);
                }
              }
            })
            .catch(err => {});
        }
      }, 1000);
    }
  }
};
</script>

<style scoped>
</style>
