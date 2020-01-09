<template>
  <div>
    <Header
      :iconback="icon"
      :title="msg"
    />
    <div class="layout">
      <div class="avatar">
        <div class="avatarSrc">
          <router-link to="/my/mynews/mynews">
            <el-avatar
              shape="square"
              :size="50"
              :src="avatar"
            ></el-avatar>
            <p>昵称:{{nickname}}</p>
            <p>IL号：{{ILNumber}}</p>
            <i class="el-icon-arrow-right"></i>
          </router-link>
        </div>
      </div>
      <div class="customernewList">
        <ul>
          <li
            v-for="(list,index) in lists"
            :key="index"
          >
            <router-link :to="list.url">
              {{list.name}}
              <p>{{list.text}}</p>
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bnt">
          <el-button>加入黑名单</el-button>
          <el-button>投诉</el-button>
      </div>
    </div>
    <el-button class="fixedsubmit">添加到通讯录</el-button>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "用户名称",
      icon: "el-icon-arrow-left",
      ILNumber: "",
      avatar: require("../../assets/image/shop.jpg"),
      nickname: "",
       lists: [
        { url: "", name: "地区"},
        { url: "", name: "商铺名称"},
        { url: "", name: "备注名称"},
        { url: "", name: "粉圈查看权限"}
      ]
    };
  }
};
</script>

<style scoped>
</style>
