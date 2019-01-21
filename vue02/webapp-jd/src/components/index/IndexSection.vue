<template>
  <div class="section">
    <section-menu-nav :menuData="menuData"></section-menu-nav>
    <section-quick-buy :activeData="activeData"></section-quick-buy>
    <section-school :item="p" :ind="ind" v-for="(p,ind) in schoolData"></section-school>
    <section-update :listsData="listsData"></section-update>
  </div>
</template>

<script>
    import SectionMenuNav from "./SectionMenuNav";
    import SectionQuickBuy from "./SectionQuickBuy";
    import SectionSchool from "./SectionSchool";
    import SectionUpdate from "./SectionUpdate";
    export default {
        name: "IndexSection",
      components: {SectionUpdate, SectionSchool, SectionQuickBuy, SectionMenuNav},
      props:["menuData",'activeData','schoolData','listsData']
    }
</script>

<style scoped>

</style>
