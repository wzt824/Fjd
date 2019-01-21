<template>

  <div class="swiper-container sw-box" id="swip">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(p,ind) in data">
        <img :src="p.pic">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>

</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "AllSlider",
      props:["data"]
    }
</script>

<style lang="stylus">
@import "../assets/css/indexBanner.styl"
</style>
