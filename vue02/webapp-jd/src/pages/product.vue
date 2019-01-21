<template>
    <div class="box">
      <div class="content">
        <product-header></product-header>
        <product-section :productData="productData"></product-section>
      </div>
      <product-footer></product-footer>
    </div>
</template>

<script>
  import DataApisServer from '../apis/DataApis'

    import ProductHeader from "../components/product/ProductHeader";
    import ProductSection from "../components/product/ProductSection";
    import ProductFooter from "../components/product/ProductFooter";
    export default {
        name: "product",

      components: {ProductFooter, ProductSection, ProductHeader},
      data(){
          return{
            "productData":{},
            "products":{
              "lists01":[]
            }

          }
      },
      methods:{
          _initProductData(){
            DataApisServer.getListsData(data=>{
              this.products = data
              console.log(this.products.lists01)
            })
          }
      },
      created(){
        this._initProductData()
      },
      watch:{
        products:function (n,o) {
            //循环  循环到的id=传进来的id,则显示该商品
            for(let i in n.lists01){
              if(n.lists01[i].id == this.$route.query.productid){
                this.productData = n.lists01[i]
              }
            }
          }
      }

    }
</script>

<style lang="stylus" scoped>
  .box
    height 100%
    display flex
    flex-direction column
    .content
      flex 1
      overflow: auto
</style>
