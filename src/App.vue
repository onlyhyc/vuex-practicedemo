<template>
  <div id="app">
    <product-one></product-one>
    <product-two></product-two>
  </div>
</template>

<script>
import ProductOne from './components/productOne.vue'
import ProductTwo from './components/productTwo.vue'
export default {
  name: 'app',
  components:{
    ProductOne,ProductTwo
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  body{
      font-family: Ubuntu;
      color: #555;
  }
</style>
