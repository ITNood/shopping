<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
        <div class="elmail">
            
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
        msg:'国内驾驶证认证',
        icon:'el-icon-arrow-left'
    };
  }
};
</script>

<style scoped>
</style>
