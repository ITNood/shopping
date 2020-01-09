<template>
  <div>
    <Footer />
    <el-header
      class="header"
      height="60px"
    >
      {{msg}}
      <i class="icon iconfont icon-sousuo"></i>
    </el-header>
    <div class="layout">
        <div class="custonerlist">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                    <router-link :to="item.url">
                        <img :src="item.img" style="width:30px">
                        {{item.text}}
                        <i class="el-icon-arrow-right"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import Footer from "../../components/bottom";
export default {
  components: { Footer },
  data() {
    return {
        msg:'供应链',
        items:[
            {url:'',img:require('../../assets/image/add.png'),text:'添加官方号'},
            {url:'',img:require('../../assets/image/label.png'),text:'官方号标签'},
            {url:'',img:require('../../assets/image/supplier.png'),text:'供应商'},
            {url:'',img:require('../../assets/image/dealer.png'),text:'经销商'},
            {url:'',img:require('../../assets/image/unit.png'),text:'其他单位'},
            {url:'',img:require('../../assets/image/my_5.png'),text:'xx企业'}
        ]
    };
  }
};
</script>

<style scoped>
.custonerlist ul li:nth-child(2) a img{
    width: 20px !important;
    margin-left:5px
}
</style>
