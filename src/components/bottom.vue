<template>
  <el-footer id="foot" height="60px">
      <router-link active-class="active" :to="item.url" v-for="(item,index) in items" :key="index">
          <i :class="item.icon"></i>
          <p>{{item.text}}</p>
      </router-link>
  </el-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
        items:[
            {url:'/',icon:'el-icon-user',text:'生活'},
            {url:'/news',icon:'el-icon-user',text:'消息'},
            {url:'/supply',icon:'el-icon-user',text:'供应链'},
            {url:'/telphone',icon:'el-icon-user',text:'通讯录'},
            {url:'/my',icon:'el-icon-user',text:'我'}
        ]
    };
  }
};
</script>

<style scoped>
</style>
