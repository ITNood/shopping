<template>
  <div>
    <Header
      :iconback="icon"
      :title="msg"
    />
    <div class="layout">
        <div class="customernewList">
        <ul>
          <li
            v-for="(list,index) in lists"
            :key="index"
          >
            <router-link :to="list.url">
              {{list.name}}
              <i class="el-icon-arrow-right"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <el-button class="fixedsubmit">添加到通讯录</el-button>
  </div>
</template>

<script>
import Header from "../../components/header";
export default {
  components: { Header },
  data() {
    return {
        icon:'el-icon-arrow-left',
        msg:'标签',
        lists:[
            {url:'',name:'我的客户'}
        ]
    };
  }
};
</script>

<style scoped>
</style>
