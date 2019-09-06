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

#foot {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    background-color: #000;
    padding: 0;
    z-index: 999;
}

#foot a {
    display: block;
    width: 20%;
    float: left;
    color: white;
    text-align: center;
    padding: 10px 0;
    font-size: 16px;
}

#foot a i {
    font-size: 20px;
}

#foot a.router-link-exact-active {
    color: #ffc105
}
</style>
