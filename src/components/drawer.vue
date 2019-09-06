<template>
  <div>
    <el-drawer
      direction="btt"
      :visible.sync="select"
      :wrapperClosable=false
    >

    </el-drawer>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      select: false
    };
  },
  methods: {
    open(flag) {
      this.select = !this.select;
    }
  }
};
</script>

<style scoped>
</style>
