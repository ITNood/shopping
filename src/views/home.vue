<template>
  <div>
    <Search :isActive="isTrue" :isFixed="fixed"/>
    <div class="container">
        <Swiper/>
        <!--分类菜单-->
        <Mune/>
        <!--banenr-->
        <div class="banenr">
            <router-link v-for="(banner,index) in todos" :key="index" :to="banner.url">
                <img :src="banner.img">
            </router-link>
        </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/search";
import Swiper from '../components/swiper'
import Mune from '../components/mune'
export default {
  components: { Search, Swiper,Mune },
  data() {
    return {
      isTrue: true,
      fixed:true,
      todos:[
          {img:require('../assets/image/list_banner1.jpg'),url:''},
          {img:require('../assets/image/list_banner2.jpg'),url:''},
      ]
    };
  }
};
</script>

<style scoped>

</style>
