<template>
  <div>
    <s-account>
      <div slot="account1">年节将至，你还需要一件单品</div>
      <div slot="account2">年节将至，你还需要一件单品</div>
      <div slot="account3">年节将至，你还需要一件单品</div>
    </s-account>
    <s-breathing-light :backgroundColor="data"></s-breathing-light>
  </div>

</template>

<script>
    export default {
        name: "test",
      data(){
          return{
            data:{
              'background':"yellow",
              'box-shadow': "2px 2px 10px #00a5e5"
            }
          }
      }
    }
</script>

<style scoped>

</style>
