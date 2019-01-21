<template>
  <div class="everyday">
    <div class="big-title">
      为您推荐
    </div>
    <ul class="produ">
      <section-update-list :listEveryData="p" :key="ind" v-for="(p,ind) in listsData"></section-update-list>
    </ul>
  </div>
</template>

<script>
    import SectionUpdateList from "./SectionUpdateList";
    export default {
        name: "SectionUpdate",
      components: {SectionUpdateList},
      props:["listsData"]
    }
</script>

<style lang="stylus" >
@import "../../assets/css/indexUpdat.styl"
</style>

