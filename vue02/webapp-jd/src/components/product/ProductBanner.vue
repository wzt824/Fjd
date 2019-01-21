<template>
  <div class="swiper-container sw-box" id="swip">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(p,ind) in productData.swipPic">
        <img :src="p.bigPic">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>

  import Swiper from '../../../static/js/swiper.min'
  import SwiperCss from '../../../static/js/swiper.min.css'
    export default {
        name: "ProductBanner",
      components:{SwiperCss},
      props:["productData"],
      updated() {
        let swiper01 = new Swiper('.swiper-container', {
          autoplay: {
            disableOnInteraction: false
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      }

    }
</script>

<style lang="stylus" scoped>
@import "../../assets/css/indexBanner.styl"
</style>
