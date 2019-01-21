<template>
    <div class="shopping">
      <section-shops :OneproductChecked="OneproductChecked" :add="add" :min="min" @shopOneChecked="shopAll" :data="p" :sid='ind'  :key="ind" v-for="(p,ind) in lists"></section-shops>
    </div>
</template>

<script>
    import SectionShops from "./SectionShops";
    export default {
        name: "ShopsSection",
      props:["lists","add","min",'OneproductChecked'],
      components: {SectionShops},
      methods:{
          shopAll(i){
            this.$emit("shopAllCheck",i)
          }
      }
    }
</script>

<style lang="stylus" scoped>
  $title-color = #252525
  $gray-color = #a2a2a2
  $red-color = #eb323a
  $write-back = #ffffff
.shopping{
  width 100%
  flex 1
  overflow auto
  background-color $write-back
}

</style>
