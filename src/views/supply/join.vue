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
      <el-input v-model="name" placeholder="搜索" class="searchInput join"></el-input>
    </el-header>
    <div class="layout">
        <div class="mix">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                    <img :src="item.img">
                    {{item.text}}
                    <el-button @click="join(item.id)">申请加入</el-button>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconback: "el-icon-arrow-left",
      name:'',
      items:[
          {img:require('../../assets/image/my_5.png'),text:'公司名称',id:1},
          {img:require('../../assets/image/my_5.png'),text:'公司名称',id:2}
      ]
    };
  },
  methods: {
      join(id){
          
      }
  },
};
</script>

<style scoped>
</style>
