<template>
  <div>
    <Header :title="msg" />
    <Search
      :isActive="isTrue"
      :isFixed="fixed"
      style="top:60px;"
    />
    <!--tabs-->
    <div
      class="layout"
      style="margin-top:120px;margin-bottom:20px;"
    >
      <el-tabs
        v-model="activeName"
        tab-position="left"
        id="tabs"
      >
        <el-tab-pane
          :label="item.name"
          v-for="(item,index) in items"
          :key="index"
        >
          <div class="classList clear">
            <router-link
              :to="{path:'/product',query:{id:list.id}}"
              v-for="(list,index) in item.son"
              :key="index"
            >
              <el-image :src="list.img">
                <div
                  slot="error"
                  class="image-slot"
                >
                  <i class="el-icon-picture-outline"></i>
                </div>
              </el-image>
              <p>{{list.name}}</p>
            </router-link>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import api from '../../API/index'
import Search from "../../components/search";
import Header from "../../components/header";
export default {
  components: { Header, Search },
  data() {
    return {
      msg: "所有分类",
      isTrue: true,
      fixed: true,
      activeName: "",
      items: []
    };
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata(){
      api.minicart.template.choices('shop/category/index').then(succ=>{
        if(succ.status==200){
          if(succ.res.category.length>0){
            this.items=this.items.concat(succ.res.category)
          }
        }
      }).catch(err=>{

      })
    }
  },
};
</script>

<style scoped>
</style>
