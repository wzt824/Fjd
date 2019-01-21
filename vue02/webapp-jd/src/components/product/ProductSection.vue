<template>
    <div>
      <product-banner :productData="productData"></product-banner>
      <product-pro :productData="productData"></product-pro>
    </div>
</template>

<script>
    import ProductBanner from "./ProductBanner";
    import ProductPro from "./ProductPro";
    export default {
        name: "ProductSection",
      props:["productData"],
      components: {ProductPro, ProductBanner}
    }
</script>

<style scoped>

</style>
