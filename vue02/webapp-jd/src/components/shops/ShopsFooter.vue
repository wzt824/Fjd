<script src="../../../../../../../大项目zip/shapeui/121/shapeui121青/index.js"></script>
<template>
  <div class="computer-price">
    <div class="allcheck">
      <label class="check-label">
        <input type="checkbox" class="allcheck-color" @change="allChecked" v-model="lists.checked">
        <span class="color"></span>
      </label>
      <i class="all">全选</i>
      <div class="total" v-if="lists.shops">
        合计：￥<span>{{lists | TotalAllPrice}}</span>
      </div>
    </div>
    <a href="" class="go">去结算({{num}})</a>
  </div>
</template>

<script>
    export default {
        name: "ShopsFooter",
      props:['lists','num'],
      methods:{
        /**
         * 不用传i
         */
        allChecked(){
            this.$emit('allCheck')
          }
      },
      filters:{
          TotalAllPrice(shopinfo){
            let total = 0
            shopinfo.shops.forEach((shop,sid)=>{
              shop.products.forEach((product,pid)=>{
                if(product.checked){
                  total +=product.price * product.qal
                  total = Number(total.toFixed(2))
                }
              })
            })
            return total
          },
          ComputedCheckNum(shop){
            let compnum = 0
            shop.products.forEach((product,pid)=>{
              if(product.checked){
                compnum += product.qal
              }
            })
            return compnum
          }

      }
    }
</script>

<style lang="stylus" scoped>
  $title-color = #252525
  $gray-color = #a2a2a2
  $red-color = #eb323a
  $write-back = #ffffff
  .computer-price
    width 100%
    height .8rem
    padding-left .15rem
    background-color $write-back
    /*position absolute*/
    /*left 0*/
    /*bottom .92rem*/
    ///*position fixed*/
    ///*left 0*/
    ///*bottom .95rem*/
    ///*z-index 1000*/
    /*position fixed*/
    /*left 0*/
    /*bottom .92rem*/
    z-index 1000
    display flex
    align-items center
    justify-content space-between
    .allcheck
      display flex
      align-items center
    .go
      width 1.55rem
      height .8rem
      line-height .8rem
      background-color $red-color
      text-align center
      color: #ffffff
      font-size .25rem

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

  .all
    font-size .2rem
    color $gray-color
    margin-right .3rem
  .total
    font-size .25rem
    color $title-color
</style>
