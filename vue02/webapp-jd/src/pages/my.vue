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
        <header class="my-bo">
          <my-bot-header></my-bot-header>
        </header>
        <my-section></my-section>
        <div class="upload" v-if="pullup">{{pullupText}}</div>
      </div>
      <my-header></my-header>
    </div>
    <index-footer></index-footer>
  </div>

</template>

<script>
  import Bscroll from "better-scroll"
  import $ from '../../static/js/jquery-3.3.1.min'

    import MyHeader from "../components/my/MyHeader";
    import MyBotHeader from "../components/my/MyBotHeader";
    import MySection from "../components/my/MySection";
  import IndexFooter from "../components/IndexFooter";
    export default {
        name: "my",
      components: {IndexFooter, MySection, MyBotHeader, MyHeader},
      data(){
        return{

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
      mounted(){
        //头部滚动添加样式
        $(".wrapper").scroll(function (event) {
          // alert("1")
          let scrollT = $(this).scrollTop()
          //存储滚动位置
          // window.localStorage.setItem("scrollT", scrollT)
          //滚动时改变头部样式
          if ($(".wrapper").scrollTop() > 0) {
            $(".myhead").addClass("myactive")
          } else {
            $(".myhead").removeClass("myactive")
          }
          //下拉时也添加头部样式
          if ($(".scroller").scrollTop() > 0) {
            $(".myhead").addClass("myactive")
          }
        })


        this.$nextTick(()=>{
          var scroller =new Bscroll(this.$refs.wrapper,{
            probeType:3
          })

          scroller.on("scrollStart", ()=> {
            //判断是下拉,还是上拉

          })

          scroller.on("scroll", ()=> {
            console.log("scrollY:"+scroller.y)
            console.log("maxY:"+scroller.maxScrollY)
            //判断是下拉,还是上拉
            //下拉
            if(scroller.y > 0){

              // $(".download").stop()
              // this.pulldownTxt = "松手更新"
              $(".myhead").stop().fadeOut(100)
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
              this.pullupText="释放分页...."
              console.log("是否在底部:"+(scroller.y-scroller.maxScrollY))
            }

            if(scroller.y-scroller.maxScrollY > -50 && scroller.y-scroller.maxScrollY < -10 ){
              this.pullup = true;
              this.pullDirection = -1;
              this.pullupText="释放分页...."
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
                $(".myhead").stop().fadeIn(100)
              },2000)

            }else if(this.pullDirection == -1){

              //如果当前下拉的数比总的scrollerY小,获取新数据
              if(scroller.y <=scroller.maxScrollY){
                this.pullupText = "分页加载中..."
                this.pageIndex++
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


    }
</script>

<style lang="stylus" scoped>
@import "../assets/css/scrollEvery.styl"
.box
  height 100%
  display flex
  flex-direction column
.content
  flex 1
  overflow: auto
</style>
