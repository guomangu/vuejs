<template>
<div class="suce" v-if="this.$store.state.se">
    <div class="chepa">
      <div class=" susuce input-group">
        <div class="form-outline">
          <input v-on:keyup="search()" v-model="s" type="search" list="ice" id="form1" class="form-control" />
          <!-- <svg width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>   -->
        </div>
        <!-- <button v-on:click="charge" type="button" class="btn btn-primary">
          <label class="form-label" for="form1">Search</label>
        </button> -->
        <!-- <datalist id="ice">
          <option v-for="bad in a" v-bind:key="bad">{{bad}}</option>
        </datalist> -->
      </div>
      <!-- <div class="susuce">
        <div class="suse">
          <div><p>typese</p></div>
          <div class="sususe">
            <div class="susususe">bonjour</div>
            <div class="susususe">malena</div>
            <div class="susususe">lol</div>
          </div>
        </div>

        <div class="suse">
          <div><p>typese</p></div>
          <div class="sususe">
            <div class="susususe">bonjour</div>
            <div class="susususe">malena</div>
            <div class="susususe">lol</div>
          </div>
        </div> -->

      <!-- </div> -->
    </div>
</div>
</template>

<script>
export default {
  name: 'barredRech',
  data(){
    return{
      s:this.s
    }
  },
  methods:{
    search(){
      let a=document.location.href;
      // console.log(a);
      let b=a.split('/');
      b=b[b.length-1];
      // console.log(b);


      if(b=="game"){
        this.s="arrete ca va explode";
      }else if(b==""){
        console.log(this.$store.state.world);
        
        this.$store.state.world.star.forEach((element,key) => {
          var temp=element.libStar;
          var regExp = new RegExp(this.s, "gi");
          var nb=(temp.match(regExp) || []).length;

          if (nb>0){
            this.$store.state.world.star.splice(key, 1);
            this.$store.state.world.star.unshift(element);
          }
        });

       
        this.$store.state.world.tag.forEach((element,key) => {
          var temp=element.libTag;
          var regExp = new RegExp(this.s, "gi");
          var nb=(temp.match(regExp) || []).length;

          if (nb>0){
            // console.log(nb+"   ///   "+element.libTag);

            this.$store.state.world.tag.splice(key, 1);
            this.$store.state.world.tag.unshift(element);
          }
        });
      }else if(b=="wankil"){
        this.$store.state.film.forEach((element,key) => {
          // console.log(element);
          var regExp = new RegExp(this.s, "gi");
          var nb=(element[1].match(regExp) || []).length;
          // console.log(nb);
          if (nb>0){
            // console.log(element);
            this.$store.state.film.splice(key, 1);
            this.$store.state.film.unshift(element);
          }

        });
        // console.log(this.$store.state.film);
      
        // alert("yo");
        let lol=this.$store.state.avis;
        // console.log(lol);
        
        if (Array.isArray(lol)) {
        
        // console.log("second");
        }else{  
          lol = Object.keys(lol).map(function(cle) {
            return [(cle), lol[cle]];
        });
        }


        // if(this.$store.state.avis.length>0){
          lol.forEach((element,key) => {
            // console.log(element);
            var regExp = new RegExp(this.s, "gi");
            let nb=(element[1].match(regExp) || []).length;
            nb+=(element[0].match(regExp) || []).length;

            // console.log(nb);
            if (nb>0){
              // console.log(element);
              lol.splice(key, 1);
              lol.unshift(element);
            }

          });
         
          // this.$store.state.avis=lol;
          this.$store.state.avis=Object.fromEntries(lol);
          console.log(this.$store.state.avis);


          // this.$root.sharedData=lol;
          this.$store.commit('addAvis',lol);

        // }
      
      
      
      
      
      }
    }
  }
}
</script>

<style>
    .suce{
  display: grid;
  grid-template-columns: 1fr auto 1fr;
    margin-bottom: 24px;
    
}
.chepa{
  grid-column-start: 2;
  background-color:#9bbcad;
  border-radius:4px;
  padding:4px;

}
/* .susuce{
  grid-column-start: 2;
          

} */
.suce button{
      height: 38px;
    border-radius: 4px !important;
}

.suse{
  display:grid;
  grid-template-columns: 77px auto;
        background-color:#7bbfa0;
        margin:4px;

}
.sususe{
      display: flex;
          overflow: auto;
}
.susususe{
  margin:4px;
  background-color:#42b983;
}
</style>