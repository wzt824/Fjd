<template>
  <div class="shop-group-list">
    <div class="shop-title">
      <div class="shop-name">
        <label class="check-label shop-check">
          <input type="checkbox" class="allcheck-color" @change="shopOneCheck(sid)" v-model="data.checked">
          <span class="color"></span>
        </label>
        <h4>
          <i :class="data.ico"></i>{{data.shopName}}
        </h4>
      </div>
      <div class="write">领券</div>
    </div>

    <ul>
      <section-shops-every :OneproductChecked="OneproductChecked"  :sid="sid" :add="add" :min="min" :data="p" :pid="ind" v-if="data.products" v-for="(p,ind) in data.products"></section-shops-every>
    </ul>
    <div class="shopPrice">
      本店总计：
      ￥<span class="shop-total-amount ShopTotal">{{data | everyTotalMoney}}</span>
    </div>
  </div>
</template>

<script>
    import SectionShopsEvery from "./SectionShopsEvery";
    export default {
        name: "SectionShops",
      props:["data","sid","add","min",'OneproductChecked'],
      components: {SectionShopsEvery},
      methods:{
        shopOneCheck(i){
          this.$emit('shopOneChecked',i)
        }
      },
      filters:{
          everyTotalMoney(shop){
            let total = 0
            shop.products.forEach((product,pid)=>{
              if(product.checked){
                total += product.price * product.qal
                total = Number(total.toFixed(2))
              }
            })
            return total
          }
      }
    }
</script>

<style lang="stylus" scoped>
  $title-color = #252525
  $gray-color = #a2a2a2
  $red-color = #eb323a
  $write-back = #ffffff
.shop-group-list
  display: flex
  flex-direction column
  border-bottom 1px solid #f7f7f7
  .shop-title
    padding .2rem .15rem
    display flex
    align-items center
    justify-content space-between
    background-color $write-back
    .shop-name
      display flex
      align-items center
      justify-content space-between
      h4
        font-size .25rem
        color $title-color
        i
          color $gray-color
          margin-right .1rem
    .write
      font-size .2rem
      color $title-color
      font-weight 600
.shop-check
  margin-right .15rem

.shopPrice
  padding .15rem
  font-size .2rem
  background-color #f7f7f7
  color $title-color
  text-align right
  span
    font-size .25rem
    font-weight 600
    color $red-color
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
