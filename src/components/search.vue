<template>
  <div
    id="search"
    :class="{search_bkg:isActive,fixed:isFixed}"
  >
    <el-row :gutter="15">
      <el-col :span="20">
        <el-input
          placeholder="请输入搜索内容"
          v-model="search"
          size="small"
          style="margin-top:4px"
        >
          <el-button
            slot="append"
            @click="searching()"
            class="search_btn"
          ><i class="el-icon-search"></i></el-button>
        </el-input>
      </el-col>
      <el-col :span="4">
          <router-link to="/car"><i class="car el-icon-shopping-cart-2"></i></router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["isActive","isFixed"],
  data() {
    return {
      search: ""
    };
  },
  methods: {
    searching() {
      console.log("搜索!");
    }
  }
};
</script>

<style scoped>
#search{
    width: 100%;
    height: 60px;
    box-sizing: border-box;
}
.search_bkg {
  background: #000;
  padding: 10px 15px;
}
</style>
