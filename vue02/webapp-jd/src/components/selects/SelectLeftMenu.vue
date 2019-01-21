<template>

    <div class="menu-left scrollbar-none" id="MenuLeft">
      <div style="position:relative;height:100%;width: 1.35rem;">
        <ul class="menuul">
          <li @click="clic(ind)" :key="ind"  v-for="(p,ind) in item.Menu">{{p.title}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SelectLeftMenu",
      props:["item","clic"]
    }
</script>

<style scoped>

</style>
