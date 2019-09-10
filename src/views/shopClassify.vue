<template>
  <div>
    <Header :title="msg" />
    <Search
      :isActive="isTrue"
      :isFixed="fixed"
      style="top:60px;"
    />
    <!--tabs-->
    <div
      class="layout"
      style="margin-top:120px;margin-bottom:20px;"
    >
      <el-tabs
        v-model="activeName"
        tab-position="left"
        id="tabs"
      >
        <el-tab-pane
          :label="item.name"
          v-for="(item,index) in items"
          :key="index"
        >
          <div class="classList clear">
            <router-link
              :to="list.url"
              v-for="(list,index) in item.lists"
              :key="index"
            >
              <img :src="list.img">
              <p>{{list.name}}</p>
            </router-link>
          </div>
        </el-tab-pane>
      </el-tabs>
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
      activeName: "",
      items: [
        {
          name: "服装箱包",
          lists: [
            {
              img: require("../assets/image/shop.jpg"),
              name: "钱包",
              url:''
            },
            {
              img: require("../assets/image/shop.jpg"),
              name: "钱包",
              url:''
            },
            {
              img: require("../assets/image/shop.jpg"),
              name: "钱包",
              url:''
            }
          ]
        },
        {
          name: "服装箱包",
          lists: [
            {
              img: require("../assets/image/shop.jpg"),
              name: "箱子",
              url:''
            },
            {
              img: require("../assets/image/shop.jpg"),
              name: "箱子",
              url:''
            },
            {
              img: require("../assets/image/shop.jpg"),
              name: "箱子",
              url:''
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
