<template>
<div>
  <div class="hello" >
    <div>
      <h2>Tag</h2>
    </div>
    <div class="ch">
      <div v-for="(dos) in this.app.tag" :key="dos" v-on:click="charge(dos.idTag,dos.libTag,true)" class="us">{{dos.libTag}}</div>
      <!-- <div class="us">gaming</div>
      <div class="us">defi</div>
      <div class="us">compilation</div> -->
    </div>
  </div>

  <div>
    <div>
      <h2>Star</h2>
    </div>
    <div class="ch">
      <div v-for="(dos) in this.app.star" :key="dos" v-on:click="charge(dos.idStar,dos.libStar,false,dos)" class="us">{{dos.libStar}}</div>
      <!-- <div class="us">gaming</div>
      <div class="us">defi</div>
      <div class="us">compilation</div> -->
    </div>
  </div>

  <!-- <div class="hello">
    <div>
      <h2>HORREUR</h2>
      </div>
    <div class="ch">
      <div class="us">fantome</div>
      <div class="us">tueur</div>
      <div class="us">gaming</div>
      <div class="us">histoire</div>
    </div>
  </div> -->

</div>
</template>

<script>
// import { Compilation } from 'webpack';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
        app:this.$store.state.world, 
    }
  },
  methods:{
    charge(key2,value,ouaip,dos){
        
      
      // console.log(this.$store.state.ch);
      if (ouaip==true) {
        let lol=key2;
        // this.$store.state.ch[lol]=value;
  
        this.$store.commit('add', { "id": lol, "value": value});

        this.$store.state.ab=Object.keys(this.$store.state.ch).length;
        window.location.href = "/#/about";
      }else{
          this.$store.state.wa=dos;
          this.$store.state.in=true;
          window.location.href = "/#/wankil";
      }
    },
  },


  async mounted() {
    
      // await fetch("http://localhost/test/world.php")
      // .then(response => {
      //   this.app=response.json;
      //   console.log(this.app);
      //   // this.selec();
      // })
      
      await fetch("http://localhost/test/world.php",{
        // mode: 'no-cors'
      }).then(response => response.json())
      .then(response=>{console.log(response);this.app=response;this.$store.state.world=response;})

      
      
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .hello{
    display:grid;
    grid-template-rows:auto auto;
        background-color: rgba(255, 0, 0, 0.1);

  }
  .ch{
    display: flex;
    background-color: rgba(255, 0, 0, 0.24);
    overflow: auto;
  }
  .us{
    height:100px;
    min-width:100px;
    margin:5px;
    background-color:rgba(255, 0, 0, 0.4);
  }
</style>
