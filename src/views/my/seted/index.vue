<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
  </div>
</template>

<script>
import Header from "../../../components/header";
export default {
  name: "Header",
  data() {
    return {
        msg:'设置',
        icon:'el-icon-arrow-left',
    };
  }
};
</script>

<style scoped>
</style>
