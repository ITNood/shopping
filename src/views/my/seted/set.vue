<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="setlist">
        <router-link :to="item.url" v-for="(item,index) in items" :key="index">
          <img :src="item.img">
          <p>{{item.text}}</p>
          <i class="el-icon-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../components/header";
export default {
  components: { Header },
  data() {
    return {
      msg: "设置",
      icon: "el-icon-arrow-left",
      items:[
        {url:'',img:require('../../../assets/image/set1.png'),text:'账号安全'},
        {url:'',img:require('../../../assets/image/set2.png'),text:'隐私管理'},
        {url:'',img:require('../../../assets/image/set3.png'),text:'投诉建议'},
        {url:'',img:require('../../../assets/image/set4.png'),text:'清除缓存'},
        {url:'',img:require('../../../assets/image/set5.png'),text:'退出系统'}
      ]
    };
  }
};
</script>

<style scoped>
</style>
