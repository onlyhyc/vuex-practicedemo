<template lang="html">
  <div id="product-one">
    <ul>
      <li v-for="item in changeProducts">
        <span>{{item.name}}</span>
        <span class="price">${{item.price}}</span>
      </li>
    </ul>
    <button @click="lowPrice(4)">降价</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name:'product-one',
  computed:{
    products(){
        return this.$store.state.products;
    },
    changeProducts(){
        return this.$store.getters.saleProducts;
    }
  },
  methods:{
    lowPrice(num){
      return this.$store.dispatch('reducePrice',num)
    }
  }
}
</script>

<style scoped>
#product-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-one ul{
    padding: 0;
}
#product-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color: #E8800C;
}
</style>
