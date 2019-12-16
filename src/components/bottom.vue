<template>
  <el-footer id="foot" height="60px">
      <router-link active-class="active" :to="item.url" v-for="(item,index) in items" :key="index">
          <i :class="item.icon" class="icon iconfont"></i>
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
            {url:'/',icon:'icon-cc-home',text:'生活'},
            {url:'/news',icon:'icon-news',text:'消息'},
            {url:'/supply',icon:'icon-fenleihuaban',text:'供应链'},
            {url:'/telphone',icon:'icon-tongxunlu',text:'通讯录'},
            {url:'/my/index',icon:'icon-wo',text:'我'}
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
