<template>
  <div class="box">
    <div class="content">
      <div class="wrapper">
        <shops-header></shops-header>
        <shops-section :OneproductChecked="OneproductCheck" :add="addQal" :min="minQal" @shopAllCheck="shopOneCheckAll" v-if="shopinfo.shops" :lists="shopinfo.shops"></shops-section>
        <shops-footer :num="totalNum" @allCheck="shopsCheckAll" v-if="shopinfo" :lists="shopinfo"></shops-footer>
      </div>
    </div>
    <index-footer></index-footer>
  </div>


</template>

<script>
  import ShopApisServer from "../apis/DataApis"
    import ShopsSection from "../components/shops/ShopsSection";
  import ShopsHeader from "../components/shops/ShopsHeader";
  import ShopsFooter from "../components/shops/ShopsFooter";
  import IndexFooter from "../components/IndexFooter";
    export default {
      name: "shopcarts",
      components: {IndexFooter, ShopsFooter, ShopsHeader, ShopsSection},
      data(){
        return{
          /**
           * 商品总价
           */
          totalPrice:0,
          checked:true,
          /**
           * 商品选中数
          */
          totalNum:0,
          /**
           * 结算总数
           */
          comNum:0,
          /**
           * 商品列表
           */
          shopinfo:[]
        }
      },
      methods:{
        /**
         * 获取商品信息
         * @private
         */
        _initShopData(){
          ShopApisServer.getShopCartsData(data=>{
            this.shopinfo = data[0]
            console.log(this.shopinfo)
            console.log(typeof (this.shopinfo))
            this._CounterCarts(data[0])
          })
        },
        /**
         * 根据商品信息来获取数量
         * @param shopinfo
         * @private
         */
        _CounterCarts(shopinfo){
          // let total = 0
          let totalN = 0
          this.shopinfo.shops.forEach((shop,sid)=>{
            shop.products.forEach((product,pid)=>{
              if(product.checked){
                // total +=product.price * product.qal
                totalN +=product.qal
                // console.log(product.qal)
                // console.log(product.price)
              }
            })
          })
          this.totalNum = totalN
          // this.totalPrice = total
          console.log(this.totalNum)
        },
        /**
         *单个店铺商品的全选
         * @param i
         */
        shopOneCheckAll(i){
          console.log(i)
          let isChecked = this.shopinfo.shops[i].checked
          let comnum = 0
          this.shopinfo.shops[i].products.forEach((product,pid)=>{
            if(product.checked){
              comnum += product.qal
              product.checked = isChecked
            }
          })
          this.comNum = comnum
          // console.log(this.comNum)
        },
        OneproductCheck(sid,pid){
          let isChecked =  this.shopinfo.shops[sid].products[pid].checked;
          this.shopinfo.shops[sid].checked = isChecked
          this.shopinfo.checked = isChecked
        },
        /**
         * 所有商品的全选
         */
        shopsCheckAll(){
          let isAllChecked = this.shopinfo.checked
          this.shopinfo.shops.forEach((shop,sid)=>{
            shop.checked = isAllChecked
            shop.products.forEach((product,pid)=>{
              product.checked = isAllChecked
            })
          })
        },
        addQal(sid,pid){
          this.shopinfo.shops[sid].products[pid].qal++
        },
        minQal(sid,pid){
          if(this.shopinfo.shops[sid].products[pid].qal<=1){
            this.shopinfo.shops[sid].products[pid].qal=1
          }else{
            this.shopinfo.shops[sid].products[pid].qal--
          }

        }
      },
      created(){
        this._initShopData()
      },
      mounted(){

      }

    }
</script>

<style lang="stylus" scoped>
.wrapper
  display flex
  flex-direction column
  height 100%
.box
  height 100%
  display flex
  flex-direction column
  .content
    flex 1
    overflow: auto
</style>
