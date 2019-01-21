<template>
  <div id="product">
    <section id="product-content" class="menu-right padding-all">
      <div>
        <img :src="item.shops[proin].pic" style="width:100%;height:1.3rem">
      </div>
      <ul :key="iind" v-for="(pp,iind) in item.shops[proin].subShops">
        <h5>{{pp.bigtitle}}</h5>
        <li :key="iiind" class="three" v-for="(ppp,iiind) in pp.everyShop"><img :src="ppp.img" alt=""><span>{{ppp.name}}</span></li>
      </ul>
    </section>
  </div>
</template>

<script>
  import $ from "../../../static/js/jquery-3.3.1.min"
    export default {
        name: "SelectMainData",
      props:["item","proin"],
      mounted(){
          // console.log(this.item.shops[proind].pic)
        // console.log(this.proin)
        $("#product").scroll(function (event) {
          alert(1)
          // let scrollR = $(this).scrollTop()
          // console.log(scrollR)
          // if(window.localStorage.getItem("rightscroll")==null){
          //   window.localStorage.setItem("rightscroll",0)
          // }else{
          //   window.localStorage.setItem("rightscroll",scrollR)
          // }

        })
      }
    }
</script>

<style scoped>

</style>
