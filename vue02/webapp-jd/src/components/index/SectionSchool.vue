<template>
  <div>
    <div class="school">
      <div class="big-title">
        <img :src="item.pic">
      </div>
      <div class="row">
        <div class="big-e" :key="iind" v-for="(pp,iind) in item.top">
          <h3 class="four">{{pp.title}}</h3>
          <h5>{{pp.sTitle}}</h5>
          <div class="big-img-box">
            <div class="s-img">
              <img :src="pp.pic1">
            </div>
            <div class="s-img">
              <img :src="pp.pic2">
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="sm-e" :key="ind" v-for="(i,ind) in item.bot">
          <h3 class="three">{{i.title}}</h3>
          <h5>{{i.sTitle}}</h5>
          <div class="big-img-box">
            <div class="s-img">
              <img :src="i.pic1">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SectionSchool",
      props:["item","ind"]
    }
</script>

<style lang="stylus" scoped>
@import "../../assets/css/indexschool.styl";
</style>
