<template>
    <div class="quick" >
      <div class="q-top row">
        <div class="s-b top-l sm" >
          <div class="tit">
            <h3>京东秒杀</h3>
            <!--<div class="time">-->
              <!--<div class="hour">-->
                <!--20:点场-->
              <!--</div>-->
              <!--<div class="minute">-->
                <!--10:13:24-->
              <!--</div>-->
            <!--</div>-->
          </div>
          <ul class="list">
            <li v-for="(pp,iid) in activeData.data1">
              <img :src="pp.pic">
              <p class="bef-p">￥ <span>{{pp.bPrice}}</span></p>
              <p class="now-p">￥<span class="pri">{{pp.nPrice}}</span><span class="slid-c"></span></p>
            </li>
          </ul>
        </div>
        <div class="s-b top-r every sm b-r n-b" v-for="(pp,ind) in activeData.data2">
          <h3 class="one">{{pp.title}}</h3>
          <h5>{{pp.sTitle}}</h5>
          <div class="big-img-box">
            <div class="s-img">
              <img :src="pp.pic01">
            </div>
            <div class="s-img">
              <img :src="pp.pic02">
            </div>
          </div>
        </div>
      </div>
      <div class="q-bot row">
        <div class="s-b top-r every smm" v-for="(pp,ind) in activeData.data3">
          <h3 class="two">{{pp.title}}</h3>
          <h5>{{pp.sTitle}}</h5>
          <div class="big-img-box">
            <div class="s-img">
              <img :src="pp.pic01">
            </div>
          </div>
        </div>
        <div class="s-b top-r every sm b-r n-b" v-for="(pp,ind) in activeData.data4">
          <h3 class="four">{{pp.title}}</h3>
          <h5>{{pp.sTitle}}</h5>
          <div class="big-img-box">
            <div class="s-img">
              <img :src="pp.pic01">
            </div>
            <div class="s-img">
              <img :src="pp.pic02">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SectionQuickBuy",
      props:["activeData"]
    }
</script>

<style lang="stylus" scoped>
@import "../../assets/css/indexQuickBuy.styl"
</style>
