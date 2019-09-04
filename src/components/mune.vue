<template>
  <div>
    <ul class="shopClass clear">
      <li
        v-for="(item,index) in items"
        :key="index"
      >
        <router-link to="">
          <img :src="item.img">
          <p>{{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Mune",
  data() {
    return {
      items: [
        { img: require("../assets/image/icon_1.png"), name: "精品服饰" },
        { img: require("../assets/image/icon_2.png"), name: "数码家电" },
        { img: require("../assets/image/icon_3.png"), name: "母婴用品" },
        { img: require("../assets/image/icon_4.png"), name: "百货超市" },
        { img: require("../assets/image/icon_5.png"), name: "酒水饮料" },
        { img: require("../assets/image/icon_6.png"), name: "畜牧渔业" },
        { img: require("../assets/image/icon_7.png"), name: "农贸市场" },
        { img: require("../assets/image/icon_8.png"), name: "同城商家" },
        { img: require("../assets/image/icon_9.png"), name: "领优惠券" },
        { img: require("../assets/image/icon_10.png"), name: "所有分类" },
      ]
    };
  }
};
</script>

<style scoped>
</style>
