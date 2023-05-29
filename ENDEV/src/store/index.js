import { createStore } from 'vuex'

export default createStore({
  state: {
    ab:false,
    se:false,


    ty:{
      0:"Tag",
      1:"Star",
    },
    ch:[
        // {id:0,value:"commentary"},
        // {id:3,value:"gaming"},
    ],




    world:{

    },



    film:{
      1:"commentary",
      2:"gaming",
      6:"defi",
      12:"compilation"
    },
    avis:{
      3:"riiiiieeeen",
      0:"riiiiieeeen",
      120:"riiiiieeeen",
      9:"riiiiieeeen",

    },


    wa:false,
    in:false,
  },
  mutations:{
    add(state,tab){
      state.ch.push(tab)
    },

    del(state,id){
      state.ch=state.ch.filter((item) => item.id !== id)

    },

    addAvis(lol){
      this.state.avis==Object.fromEntries(lol);
    }
  },
  // getters:{
  //   getArrId: (state) => {
  //     return state.ch.find(item => item.id);
  //   }
  // }
  // ,
  actions: {
  },
  modules: {
  }
})
