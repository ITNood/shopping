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
      <el-input
        v-model="name"
        placeholder="搜索"
        class="addSearch"
      ><i
          slot="prefix"
          class="el-input__icon el-icon-search"
        ></i></el-input>
      <span class="finish">完成</span>
    </el-header>
    <div
      class="layout"
      style="margin-bottom:0"
    >
      <div class="addlist">
        <el-checkbox-group v-model="select">
          <el-checkbox
            v-for="(item,index) in items"
            :value="item.id"
            :label="index"
            :key="index"
          ><img :src="item.img"><p>{{item.name}}</p></el-checkbox>
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconback: "el-icon-arrow-left",
      name: "",
      select:[],
      items: [
        { img: require("../../assets/image/my_5.png"), name: "昵称",id:1 },
        { img: require("../../assets/image/my_5.png"), name: "昵称",id:2 }
      ]
    };
  }
};
</script>

<style scoped>
</style>
