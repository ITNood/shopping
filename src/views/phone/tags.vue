<template>
  <div>
    <Top
      :iconback="icon"
      :title="msg"
      :url="urllink"
      :iconclass="iconright"
    />
    <div class="layout">
        <el-input v-model="search" placeholder="请输入标签名称" class="searchInput" />
        <div class="addCustomer"><span class="el-icon-plus"></span>添加成员</div>
        <div class="custonerlist">
            <ul>
                <li v-for="(item,index) in items" :key="index">
                    <router-link :to="item.url">
                        <img :src="item.img">
                        {{item.text}}
                        <i class="el-icon-arrow-right"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
    <el-button class="fixedsubmit">添加到通讯录</el-button>
  </div>
</template>

<script>
import Top from "../../components/top";
export default {
  components: { Top },
  data() {
    return {
        icon:'el-icon-arrow-left',
        msg:'新建标签',
        urllink:'',
        iconright:'icon-wo',
        search:'',
        items:[
            {url:'',img:require('../../assets/image/my_5.png'),text:'昵称'},
            {url:'',img:require('../../assets/image/my_5.png'),text:'昵称'}
        ]
    };
  }
};
</script>

<style scoped>
</style>
