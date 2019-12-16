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
    </el-header>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title", "iconback"],
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
