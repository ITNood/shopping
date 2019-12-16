<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout" style="margin:0">
        <div class="mycode">
            <img :src="code">
        </div>
    </div>
  </div>
</template>

<script>
import Header from "../../../components/header";
export default {
  components: { Header },
  data() {
    return {
        msg:'我的二维码',
        icon:'el-icon-arrow-left',
        code:require('../../../assets/image/code.jpg')
    };
  }
};
</script>

<style scoped>
</style>
