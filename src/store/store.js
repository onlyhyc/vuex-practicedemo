import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    products:[
      {name:"Hyc",price:200},
      {name:"Helen",price:150},
      {name:"David",price:100},
      {name:"Lucy",price:60}
    ]
  },
  getters:{
    saleProducts: (state)=>{
      var temp = state.products.map(value=>{
        return {
          name:value.name,
          price:value.price / 2
        }
      })
      return temp;
    }
  },
  mutations:{
    lowPrice:(state,payload)=>{
      state.products.forEach(value=>{
        value.price -=payload;
      })
    }
  },
  actions:{
    reducePrice:(context,payload)=>{
      setTimeout(()=>{
        context.commit('lowPrice',payload);
      },1000)
    }
  }
});
