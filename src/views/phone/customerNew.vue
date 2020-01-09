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
    </div>
    <el-button class="fixedsubmit">发送信息</el-button>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
      icon: "el-icon-arrow-left",
      msg: "",
      ILNumber: "",
      avatar: require("../../assets/image/shop.jpg"),
      nickname: "",
      lists: [
        { url: "", name: "备注名称",text:'张三' },
        { url: "", name: "手机号码",text:'10086' },
        { url: "", name: "地区",text:'广东深圳' },
        { url: "", name: "商铺名称",text:'时尚服装'},
        { url: "", name: "标签",text:'风流倜傥' },
        { url: "", name: "粉圈查看权限",text:'' }
      ]
    };
  }
};
</script>

<style scoped>
</style>
