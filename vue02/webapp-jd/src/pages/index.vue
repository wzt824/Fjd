<template>
  <div class="box">
    <div class="wrapper content" id="conten" ref="wrapper">
      <div class="scroller">
        <div class="download" v-if="pulldown" >
          <img class="personImg" src="../../static/images/loader.png" >
          <div class="scrolltitle" style="">
            <p>{{pulldownsubTxt}}</p>
            {{pulldownTxt}}
          </div>
        </div>
        <header class="head-swiper">
          <all-slider :data="banner.swiper01"></all-slider>
        </header>
        <index-section :listsData="lists.lists01" :schoolData="school.school" :activeData="active" :menuData="IndexMenu"></index-section>

        <div class="upload" v-if="pullup">
          <img src="../../static/images/update.jpg" alt="">
          {{pullupText}}
        </div>
      </div>
      <index-header-nav-box></index-header-nav-box>
    </div>
    <index-footer></index-footer>
  </div>
  </template>

<script>
  import Bscroll from "better-scroll"
  import DataApisServer from '../apis/DataApis'
  import $ from '../../static/js/jquery-3.3.1.min'
  //公共样式及图标
  import PublicCss from '../assets/css/public.css'
  import Iconfont from '../../static/font/iconfont.css'
  import Swiper from '../../static/js/swiper.min'
  import SwiperCss from '../../static/js/swiper.min.css'
  import IndexHeaderNavBox from "../components/index/IndexHeaderNavBox";
  import AllSlider from "../components/AllSlider";
  import IndexSection from "../components/index/IndexSection";
  import IndexFooter from "../components/IndexFooter";
    export default {
        name: "index",
      components:{
        IndexFooter,
        IndexSection,
        AllSlider,
        IndexHeaderNavBox,
        Iconfont,
        PublicCss,
        SwiperCss
      },
      data(){
        return{
          banner:[],
          IndexMenu:[],
          active:[],
          school:[],
          lists:[],

          pulldown:false,
          pulldownTxt:"下拉刷新..",
          pulldownsubTxt:"让购物更便捷....",
          pullup:false,
          pullupText:"上拉获取更多....",
          pullDirection:0,
          pageIndex:1,
          lastY:0,
          list:[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]

        }
      },
      methods:{
        /**
         * 得到轮播图数据
         * @private
         */
        _initBannerData(){
          DataApisServer.getSwiperData(data=>{
            this.banner = data
            console.log(this.banner)
            this.$nextTick(()=>{
              this._initBanner()
            })
          })
        },
        /**
         * 图片自动轮播
         * @private
         */
        _initBanner (){
          var swiper = new Swiper('#swip', {
            loop: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            autoplay: {
              delay: 2000,
              disableOnInteraction: false,
            },
            pagination: {
              el: '.swiper-pagination',
            },
            preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)

          })
        },
        /**
         * 得到菜单数据
         * @private
         */
        _initIndexMenuData(){
          DataApisServer.getIndexMenuData(data=>{
            this.IndexMenu = data
            console.log(this.IndexMenu)
            this.$nextTick(()=>{
              this._menuSwiper()
            })
          })
        },
        /**
         * 菜单滑动
         * @private
         */
        _menuSwiper(){
          var swiper=new Swiper('.sw-menu', {
            pagination: {
              el: '.swiper-pagination',
            },
            preventLinksPropagation: false,   // 阻止点击事件冒泡(防止手动快速来回滑动后自动滑动紊乱)
            observer:true,                //修改swiper自己或子元素时，自动初始化swiper
            observeParents:true           //修改swiper的父元素时，自动初始化swiper
          });
        },
        /**
         * 得到秒杀数据
         * @private
         */
        _initActiveData(){
          DataApisServer.getIndexActiveData(data=>{
            this.active = data
            console.log(this.active)
          })
        },
        /**
         * 得到学校数据
         * @private
         */
        _initSchoolData(){
          DataApisServer.getIndexSchoolData(data=>{
            this.school = data
            console.log(this.school.school)
          })
        },
        /**
         * 得到list数据
         * @private
         */
        _initIndexListsData(){
          DataApisServer.getListsData(data=>{
            this.lists = data
            console.log(this.lists.lists01)
          })
        },
        // changes(){
        //   alert(1)
        //   let leng = $(".wrapper").scrollTop(100)
        //   console.log(leng)
        // },
        // _headerChange() {
        //
        // },
        // _scrollChange() {
        //   // let his = this
        //   //子盒子发生滚动事件时
        //
        //
        //   })




      },
      mounted(){
          //头部滚动添加样式
        $(".wrapper").scroll(function (event) {
          // alert("1")
          let scrollT = $(this).scrollTop()
          console.log(scrollT)
          //存储滚动位置
          window.localStorage.setItem("scrollT", scrollT)
          //滚动时改变头部样式
          if ($(".wrapper").scrollTop() > 0) {
            $(".nav-box").addClass("scroll-header")
          } else {
            $(".nav-box").removeClass("scroll-header")
          }
          //下拉时也添加头部样式
          if ($(".scroller").scrollTop() > 0) {
            $(".nav-box").addClass("scroll-header")
          }
        })


        this.$nextTick(()=>{
          var scroller =new Bscroll(this.$refs.wrapper,{
            // probeType 为 3 的时候，不仅在屏幕滑动的过程中，
            // 而且在 momentum 滚动动画运行过程中实时派发 scroll 事件
            probeType:3
          })

          let scrollT = window.localStorage.getItem("scrollT")
          // console.log(scrollT)
          // scroller.scrollTo(0,-1*scrollT)
          // scroller.hasVerticalScroll=true

          // scroller.on("scrollStart", ()=> {
          //   //判断是下拉,还是上拉
          //
          // })

          scroller.on("scroll", ()=> {
            console.log("scrollY:"+scroller.y)
            console.log("maxY:"+scroller.maxScrollY)
            //判断是下拉,还是上拉
            //下拉
            if(scroller.y > 0){

              // $(".download").stop()
              // this.pulldownTxt = "松手更新"
              $(".nav-box").stop().fadeOut(100)
              this.pulldown = true;
              this.pullDirection = 1
            }
            //根据下拉高度判断显示内容
            if(scroller.y > 15 && scroller.y <=35){
              this.pulldownTxt = "松开刷新..."
              this.pullDirection = 1
            }

            //上拉
            if(scroller.y-scroller.maxScrollY <0){
              this.pullup = true;
              this.pullDirection = -1;
              this.pullupText="加载中...."
              console.log("是否在底部:"+(scroller.y-scroller.maxScrollY))
            }

            if(scroller.y-scroller.maxScrollY > -50 && scroller.y-scroller.maxScrollY < -10 ){
              this.pullup = true;
              this.pullDirection = -1;
              this.pullupText="加载中...."
              console.log("是否在底部:"+(scroller.y-scroller.maxScrollY))
            }
          })

          scroller.on("scrollEnd", ()=> {

            if(this.pullDirection ==1){
              this.pulldownTxt = "更新中..."
              //更新中，请求数据
              setTimeout(()=>{
                //获取数据完成之后，恢复原样
                this.pulldown = false
                $(".nav-box").stop().fadeIn(100)
              },2000)

            }else if(this.pullDirection == -1){

              //如果当前下拉的数比总的scrollerY小,获取新数据
              if(scroller.y <=scroller.maxScrollY){
                this.pullupText = "加载中..."
                this.pageIndex++
                //从后台获取数据
                setTimeout(()=>{
                  //获取数据完成之后，恢复原样
                  this.pullup = false
                  DataApisServer.getListsData(data=>{
                    this.lists.push(data)
                  })
                },2000)
                for(var i=3;i<100;i++){
                  this.list.push(i)
                }
                //使用refresh 方法 来更新scroll  解决无法滚动的问题
                this.scroller.refresh()
                console.log(`加载了第 ${this.pageIndex} 页`)
              }
            }
            console.log("scrollEnd")
          })
        })
      },
      updated(){
        window.localStorage.getItem("scrollT")
      },
      created(){
        this._initBannerData()
        this._initIndexMenuData()
        this._initActiveData()
        this._initSchoolData()
        this._initIndexListsData()

        // this._headerChange()
        // this._scrollChange()
        // this.changes()
      }
    }
</script>

<style lang="stylus">
  @import "../assets/css/index.styl"
  @import "../assets/css/scrollEvery.styl"
  .box
  height 100%
  display flex
  flex-direction column
  .content
    flex 1
    overflow: auto
</style>
