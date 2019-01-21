<template>
  <div class="box">
    <div id="all-box" class="content">
      <FindHeader></FindHeader>
      <FindMain></FindMain>
    </div>
    <index-footer></index-footer>
  </div>

</template>

<script>
  import Swiper from '../../static/js/swiper.min'
  import SwiperCss from '../../static/js/swiper.min.css'
  import $ from '../../static/js/jquery-3.3.1.min'
    import FindHeader from "../components/find/FindHeader";
  import FindMain from "../components/find/FindMain";
  import IndexFooter from "../components/IndexFooter";
    export default {
        name: "find",
      components: {IndexFooter, FindMain, FindHeader,SwiperCss},
      methods:{

      },
      mounted(){
          //滚动头部添加样式
        var before = $("#all-box").scrollTop();
        $("#all-box").scroll(function(){
          // alert(1)
          console.log(before)
          var after = $("#all-box").scrollTop();
          console.log(after)
          if (before<after) {
            $(".nav").stop().animate({top:0,left:0},200)
            $(".header").stop().animate({top:"-.9rem"},200)
          }else{
            $(".nav").stop().animate({top:".92rem",left:0},200)
            $(".header").stop().animate({top:0},200)
          }
        })

      },
      created(){

      }
    }
</script>

<style lang="stylus" scoped>
  .box
    height 100%
    display flex
    flex-direction column
    .content
      flex 1
      overflow: auto
</style>
