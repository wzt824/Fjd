<template>
  <li @click="goto(listEveryData.id)">
    <div class="small">
      <img class="big-img" :src="listEveryData.bigPic">
      <div class="pro-bot">
        <p class="title">
          <span class="small-t">{{listEveryData.id}}{{listEveryData.buy}}</span>
          {{listEveryData.title}}
        </p>
        <p class="pro-intro">
          <span class="big-p">￥<span class="small-p">{{listEveryData.price}}</span></span>
          <span class="see">看相似</span>
        </p>
      </div>
    </div>
  </li>
</template>

<script>
    export default {
        name: "SectionUpdateList",
      props:["listEveryData"],
      methods:{
        goto(k){
          // alert(1)
          this.$router.push(`/Product?productid=${k}`)
          // console.log(k)
        }
      }
    }
</script>

<style scoped>

</style>
