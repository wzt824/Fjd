<template>
  <div class="sec-nav">
    <div class="swiper-container sw-menu">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :p="p" :key="ind" v-for="(p,ind) in menuData.menu">
          <ul class="row" :pp="pp" :key="iind" v-for="(pp,iind) in p">
            <li v-for="(ppp,iiind) in pp"><a href="#"><img :src="ppp.pic"><span>{{ppp.tit}}</span></a></li>
          </ul>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
    <div class="hot-news">
      <a href="#" class="new-l">京东快报</a>
      <a href="#" class="swiper-container-vertical new-con">
        <ul id="textS" class="swiper-wrapper">
          <li v-for="(p,ind) in menuData.news" class="swiper-slide">
            <span>{{p.title}}</span>{{p.content}}
          </li>
        </ul>
      </a>
      <a href="#" class="more"><span>更多</span></a>
    </div>
  </div>
</template>

<script>

  import Swiper from '../../../static/js/swiper.min'
  import SwiperCss from '../../../static/js/swiper.min.css'
    export default {
        name: "SectionMenuNav",
      components:{SwiperCss},
      props:["menuData"],
      methods:{
        _hotSwiper(){
          this.$nextTick(()=>{
            var swiper=new Swiper('.new-con', {
              direction:'vertical',
              loop:true,
              autoplay:true,
              delay:500
              // preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)
              // observer:true,                //修改swiper自己或子元素时，自动初始化swiper
              // observeParents:true           //修改swiper的父元素时，自动初始化swiper
            });
          })

        },
      },
      created(){
          this._hotSwiper()
      }
    }
</script>

<style lang="stylus" scoped>
@import "../../assets/css/indexmenunav.styl"
</style>
