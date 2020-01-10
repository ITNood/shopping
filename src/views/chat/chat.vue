<template>
 <div>
     <el-header
      height="60px"
      id="header"
    >
      <i
        class="el-icon-arrow-left"
        @click="$router.go(-1)"
      ></i>
      <div class="title">{{title}}</div>
      <router-link :to="url">
        <span :class="iconclass"></span>
      </router-link>
    </el-header>
    <div class="layout">
        <ul class="chatContent">
            <li v-for="(item,index) in items" :key="index" :class="item.state==1?'paddingleft':'paddingright'" class="clear">
                <img :src="item.img">
                <p>{{item.name}}</p>
                <span class="content"><i class="el-icon-caret-left" v-if="item.state==1"></i><i v-else class="el-icon-caret-right"></i>{{item.details}}</span>
            </li>
        </ul>
    </div>
    <div class="entry">
        <el-input v-model="text"></el-input>
        <div class="addimg">
            <input type="file">
            <i class="el-icon-plus"></i>
        </div>
        <el-button class="sendchat">发送</el-button>
    </div>
 </div>
</template>

<script>
export default {
 data() {
  return {
      title:'张三',
      iconclass:"el-icon-more",
      url:'',
      items:[
          {img:require('../../assets/image/my_5.png'),name:'昵称',details:'你好呀',state:1},
          {img:require('../../assets/image/my_5.png'),name:'昵称',details:'你好,有什么可以帮你',state:2}
      ]
  }
 }
}
</script>

<style scoped>
body{
    background: #666 !important;
}
</style>
