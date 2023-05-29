<template>
<div class="general">
<div>
  <nav>
    <div><router-link to="/game"> GAME </router-link></div>
    <div><router-link to="/"> TAG </router-link></div>
    <div v-if="this.$store.state.ab">
      <router-link to="/about"> LIST </router-link>
      <p>{{this.$store.state.ab}}</p>
    </div>
    <div v-if="this.$store.state.in">
      <router-link to="/wankil"> PEOPLE </router-link>
      <!-- <p>{{this.$store.state.in}}</p> -->
    </div>

    <div v-on:click="search()">
      <svg width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>    
    </div>
    
    

    <!-- <div v-if="this.$store.state.ab">
      <router-link to="/about"> | About</router-link>
      <p>{{this.$store.state.ab}}</p>
    </div> -->
  </nav>
  <barredRech />
</div>
<div class="sugeneral">
  <router-view/>
</div>
</div>
</template>



<script>
import barredRech from '@/components/barre.vue'






export default {
  // name: 'baba',
  components: {
    barredRech
  },

  methods:{
    search(){
      if (this.$store.state.se==false) {
         this.$store.state.se=true;
      }else{
        this.$store.state.se=false;
      }
     
      
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
  display: inline-flex;
}
nav *{
  margin:4px;

}
nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}





.general{
  height:100vh;
  display:grid;
  grid-template-rows: 84px auto;
}
.sugeneral{
  overflow: auto;
}
</style>
