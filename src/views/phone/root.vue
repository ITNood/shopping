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
      <!-- <span class="finish">完成</span> -->
    </el-header>
    <div class="layout">
      <div class="root">不可以查看
        <el-switch
          @change="open"
          v-model="value"
          active-color="#13ce66"
          inactive-color="#dedede"
          class="switch"
        >
        </el-switch>
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
      iconback: "el-icon-arrow-left",
      title: "粉丝查看分享权限",
      value: false
    };
  },
  methods: {
      open(){
          console.log(this.value)
      }
  },
};
</script>

<style scoped>
</style>
