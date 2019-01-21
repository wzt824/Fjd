<template>
  <div class="header">
    <div class="title">
      购物车 <i class="iconfont dizhi icon-dizhi"></i>
    </div>
    <div class="write-box">
      <span class="wz">编辑</span>
      <i class="iconfont more icon-gengduo"><span class="mess">66</span></i>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopsHeader"
    }
</script>

<style lang="stylus" scoped>
  $title-color = #252525
  $gray-color = #a2a2a2
  $red-color = #eb323a
  $write-back = #ffffff
.header
  width 100%
  padding .2rem .15rem
  z-index: 500
  /*position fixed*/
  /*top 0*/
  /*z-index 500*/
  background-color $write-back
  display flex
  align-items center
  border-bottom 1px solid #f5f5f5
  .title
    margin auto
    font-size .25rem
    color $title-color
    .dizhi
      color $gray-color
  .write-box
    position absolute
    right .25rem
    top .2rem
    display flex
    align-items center
    .wz
      font-size .2rem
      color $gray-color
      margin-right .22rem
    .more
      font-size .3rem
      color $gray-color
      position relative
.mess
  display block
  width .2rem
  height .2rem
  line-height .2rem
  border-radius 50%
  background-color $red-color
  color white
  text-align center
  font-size .1rem
  font-weight 900
  position absolute
  right -.1rem
  top 0
</style>
