<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(src,index) in banner" :key="index"><img :src="src.img"></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name:'Swiper',
  props:{banner:Array},
  data() {
    return {
    };
  },
  mounted() {
   
  },
  updated() {
     let swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        clickable :true,
      },
      loop: true,
      autoplay: {
        stopOnLastSlide: true
      }
    });
  },
};
</script>

<style>
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  height: 300px
}
.swiper-pagination-bullet{
    width: 25px;
    height: 4px;
    border-radius: 2px;
    background-color: white;
    opacity: 1;
}
.swiper-pagination-bullet-active{
    background-color: #ffc105
}
</style>
