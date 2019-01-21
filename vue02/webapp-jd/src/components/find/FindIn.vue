
<template>
  <div class="main">

    <div class="swiper-container swiper-container2" id="swiper-container2" >
      <div class="swiper-wrapper">
        <div v-for="(m,idx) in businessareaData" class="swiper-slide ">
          {{m.pageName}}
        </div>
      </div>
    </div>

    <div class="swiper-container swiper-container3" id="swiper-container3" >
      <div class="swiper-wrapper">
        <div v-for="(m,index) in businessareaData" class="swiper-slide  slide-page">
          <h2 class="hotTitle">热门精选</h2>
          <hot-choice :shopinfo="subm.shopinfo" v-for="(subm,subIdx) in m.shopArr" :key="subIdx"></hot-choice>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import $ from 'jquery'
  import Swiper from 'swiper'
  import HotChoice from "./HotChoice";
  export default {
    name: "BusinessareaMain",
    components: {HotChoice},
    props:["businessareaData"],
    updated() {
      // swiper页面布局
      document.querySelector('#swiper-container2 .swiper-slide').className='swiper-slide active-nav'

      var mySwiper2 = new Swiper('#swiper-container2', {
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        slidesPerView: 3,
        on: {
          tap: function () {
            mySwiper3.slideTo(mySwiper2.clickedIndex)
          }
        }
      })
      var mySwiper3 = new Swiper('#swiper-container3', {

        on: {
          slideChangeTransitionStart: function () {
            updateNavPosition()
          }
        }

      })



      function updateNavPosition() {
        $('#swiper-container2 .active-nav').removeClass('active-nav')
        var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');


        if (!activeNav.hasClass('swiper-slide-visible')) {
          if (activeNav.index() > mySwiper2.activeIndex) {
            var thumbsPerNav = Math.floor(mySwiper2.width / activeNav.width()) - 1
            mySwiper2.slideTo(activeNav.index() - thumbsPerNav)
          } else {
            mySwiper2.slideTo(activeNav.index())
          }
        }
      }



    }
  }
</script>

<style scoped>
  .main{
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  /*swiper*/

  .slide-page{
    font-size: .18rem;
    height: 100%;
    background: #ffffff;
    overflow-y: auto;
  }

  .swiper-container2 {
    width: 100%;
    color: #ffffff;
    font-size: .16rem;
  }
  .swiper-container2 .swiper-slide{
    text-align: center;
  }
  .swiper-container2 .active-nav{
    font-size: .2rem;
  }
  .swiper-container3 {
    width: 100%;
    flex: 1;
  }
  .hotTitle{
    height: .45rem;
    font-size: .18rem;
    padding: 0 .12rem;
    line-height: .45rem;
    background: #ffffff;
  }
</style>


