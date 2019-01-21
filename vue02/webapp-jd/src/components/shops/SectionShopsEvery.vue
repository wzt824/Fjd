<template>
  <li>
    <div class="shop-products">
      <div class="one-check">
        <label class="check-label">
          <input type="checkbox" class="allcheck-color" v-model="data.checked" @change="OneproductChecked(sid,pid)">
          <span class="color"></span>
        </label>
      </div>
      <div class="one-box">
        <img :src="data.pic" alt="">
        <div class="text-box">
          <div class="box-top">
            <h4>{{data.title}}</h4>
            <div class="shop-info">
              <div class="left">
                <span>{{data.weight}}</span>
                <span>{{data.info}}</span>
              </div>
              <span>{{data.service}}</span>
            </div>
          </div>
          <div class="box-bot">
            <div class="p-price">
              ￥:<span>{{data.price}}</span>
            </div>
            <div class="add-min">
              <i class="iconfont icon-jiajian-" @click="add(sid,pid)"></i>
              <input type="number" v-model="data.qal">
              <i class="iconfont icon-jiajian-1" @click="min(sid,pid)"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
        name: "SectionShopsEvery",
      props:["data","pid","sid","add","min",'OneproductChecked'],
    }
</script>

<style lang="stylus" scoped>
  $title-color = #252525
  $gray-color = #a2a2a2
  $red-color = #eb323a
  $write-back = #ffffff
  .shop-products
    background-color $write-back
    padding 0 .15rem
    margin-bottom .1rem
    display flex
    align-items center
    justify-content space-between
    .one-box
      width 100%
      padding .1rem .22rem
      border .07rem solid #f7f7f7
      display: flex
      align-items center
      img
        height 1.35rem
        margin-right .1rem
      .text-box
        width 100%
        display flex
        flex-direction column
        .box-top
          h4
            font-size .2rem
            line-height .25rem
            color $title-color
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          .shop-info
            display: flex
            align-items center
            justify-content space-between
            font-size .15rem
            color $gray-color
        .box-bot
          display flex
          align-items center
          justify-content space-between
          .p-price
            display flex
            font-size .25rem
            color $red-color
          .add-min
            display flex
            align-items center
            justify-content center
            input
              width .6rem
              height .35rem
              text-align center
              background-color #f7f7f7
              border none
              color $title-color
              font-size .15rem

  /*------------设置选择框样式--------------  */

  .allcheck-color
    opacity 0
    position absolute
    z-index 1000
  .color
    display inline-block
    width .27rem
    height .27rem
    vertical-align middle
    border-radius 50%
    border 1px solid $gray-color
    color #ffffff
    box-shadow 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    position relative
  .color:before {
    content: '';
    opacity: 0;
    position: absolute;
    z-index: 1000;
    top: -.03rem;
    left: -.03rem;
    width: 0.28rem;
    height: 0.28rem;
    transition: .3s opacity;
    background:url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E") no-repeat center center/50% 50%;
    background-color: red;
    border-radius: 50%;
  }
  .allcheck-color:checked ~ .color:before {
    opacity: 1;
  }
</style>
