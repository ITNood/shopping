<template>
  <div>
    <Footer />
    <el-header
      class="header"
      height="60px"
    >
      {{msg}}
      <i class="icon iconfont icon-chat1"></i>
      <i class="icon iconfont icon-sousuo search"></i>
    </el-header>
    <div class="layout">
      <el-tabs id="chat">
        <el-tab-pane><span slot="label">
            <i class="icon iconfont icon-danseshixintubiao-"></i>客服信息</span>
            <div class="chatlist">
                <router-link :to="item.url" v-for="(item,index) in items" :key="index">
                    {{item.text}}
                    <el-badge class="item" :value="item.number"><img :src="item.img"></el-badge>
                    <i class="el-icon-arrow-right"></i>
                </router-link>
            </div>
        </el-tab-pane>
        <el-tab-pane><span slot="label"><i class="icon iconfont icon-chat"></i>聊天</span></el-tab-pane>
        <el-tab-pane label="聊天信息"></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/bottom";
export default {
  components: { Footer },
  data() {
    return {
      msg: "消息",
      items:[
          {number:'20',url:'',img:require('../../assets/image/my_5.png'),text:'XXXXX聊天'},
          {number:'20',url:'',img:require('../../assets/image/my_5.png'),text:'XXXXX聊天'}
      ]
    };
  }
};
</script>

<style scoped>
</style>
