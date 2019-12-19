<template>
  <div>
    <Header
      :title="msg"
      :iconback="icon"
    />
    <div class="layout">
      <div class="mynews">
        <router-link
          to=""
          class="newAvatar"
        >
          <el-avatar
            :src="avatarSrc"
            :size="50"
          ></el-avatar>
          <i class="el-icon-arrow-right"></i>
        </router-link>

        <div class="newslist">
          <router-link to="">天使鹭号</router-link>
          <router-link to="">性别<span>{{sex}}</span><i class="el-icon-arrow-right"></i></router-link>
          <router-link to="">昵称<span>{{nickname}}</span><i class="el-icon-arrow-right"></i></router-link>
          <router-link to="">地区<span>{{address}}</span><i class="el-icon-arrow-right"></i></router-link>
          <router-link to="">心情<span>{{find}}</span><i class="el-icon-arrow-right"></i></router-link>
          <router-link to="">会员<span>{{member}}</span><i class="el-icon-arrow-right"></i></router-link>
        </div>

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
        msg:'个人信息',
        icon:'el-icon-arrow-left',
        avatarSrc:require('../../../assets/image/icon_1.png'),
        sex:'男',
        nickname:'我爱中国',
        address:'中国广东深圳福田区',
        find:'心情很糟糕',
        member:'VIP6'
    };
  },
};
</script>

<style scoped>
</style>
