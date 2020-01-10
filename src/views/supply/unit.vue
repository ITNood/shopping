<template>
  <div>
    <Header
      :iconback="icon"
      :title="msg"
    />
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
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
        icon:'el-icon-arrow-left',
        msg:'其他单位',
        items:[
            {url:'',img:require('../../assets/image/add.png'),text:'添加其他单位'},
            {url:'',img:require('../../assets/image/my_5.png'),text:'xx企业'}
        ]
    };
  }
};
</script>

<style scoped>
</style>
