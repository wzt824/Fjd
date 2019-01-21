<template>
    <div class="intro">
      <div class="every-row">
        <div class="row">
          <span class="big-p">￥<span class="small-p">{{productData.price}}</span></span>
          <div class="tb">
            <span><img src="../../../static/images/xt01.jpg" alt="">降价通知</span>
            <span><img src="../../../static/images/xt01.jpg" alt="">关注</span>
          </div>
        </div>
        <p class="big-tit">{{productData.title}}</p>
        <p class="sub-tit"><a href="">{{productData.subtit}}</a></p>
      </div>
      <div class="every-row-two">
        <div class="row-1">
          <span class="name">白条</span>
          <div class="right">
            <span class="sub-name">{{productData.bai}}</span>
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
        <div class="row-1">
          <span class="name">促销</span>
          <div class="right">
            <span class="sub-name">{{productData.cuxiao}}</span>
            <i class="iconfont icon-gengduo"></i>
          </div>
        </div>
        <div class="row-1">
          <p class="dp">{{productData.shop}}<i class="iconfont icon-dianpu"></i></p>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "ProductPro",
      props:["productData"]

    }
</script>

<style lang="stylus" scoped>
@import "../../assets/css/productPro.styl"
</style>
