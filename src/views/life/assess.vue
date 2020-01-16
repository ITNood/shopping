<template>
  <div>
    <el-header
      height="60px"
      id="header"
    >
      <i
        :class="iconback"
        @click="$router.go(-1)"
      ></i>
      <div class="title">{{title}}</div>
      <div class="iconsearch icon iconfont icon-sousuo"></div>
      <router-link to="/life/car">
        <span :class="iconclass"></span>
      </router-link>
    </el-header>

    <div class="layout">
      <div class="shopname">
        <el-row :gutter="10">
          <el-col :span="12">{{name}}</el-col>
          <el-col :span="6">{{number}}粉丝</el-col>
          <el-col
            :span="6"
            class="clear"
          >
            <el-checkbox
              border
              v-model="checked"
              :label="assess1"
              @change="assess"
            ></el-checkbox>
          </el-col>
        </el-row>
      </div>
      <div class="shopurl clear">
        <router-link
          v-for="(item,index) in items"
          :key="index"
          :to="{path:'',query:{id:item.id}}"
        >{{item.name}}</router-link>
      </div>
      <div class="assess">
        <div class="assesscontent">
          <div class="orderAssess">
            <ul>
              <li
                v-for="(list,index) in lists"
                :key="index"
              >{{list.name}}<el-rate
                  v-model="list.value"
                  disabled
                ></el-rate>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <el-button class="fixedsubmit">返回继续评价</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      iconback: "el-icon-arrow-left",
      title: "我评价的商铺",
      number: 1000,
      iconclass: "el-icon-shopping-cart-2",
      name: "商铺名称",
      checked: false,
      assess1: "+关注",
      items: [
        { id: "", name: "首页" },
        { id: "", name: "全部" },
        { id: "", name: "热卖" },
        { id: "", name: "新品" },
        { id: "", name: "动态" }
      ],
      lists: [
        { name: "产品评分", value: 3 },
        { name: "客服服务", value: 3 },
        { name: "售后服务", value: 3 },
        { name: "发货速度", value: 3 }
      ]
    };
  },
  methods: {
    assess() {
      console.log(this.checked);
      if (this.checked == true) {
        this.assess1 = "已关注";
      } else {
        this.assess1 = "+关注";
      }
    }
  }
};
</script>

<style scoped>
</style>
