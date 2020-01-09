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
      <div class="title">{{title}}</div>
      <router-link :to="url">
        <span class="icon iconfont" :class="iconclass"></span>
      </router-link>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Top",
  props:{iconback:'',title:'',url:'',iconclass:''},
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
