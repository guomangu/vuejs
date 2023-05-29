<template>
<div>
    <div>
      <h1 v-for="(uno) in this.$store.state.ch" :key="uno">{{uno.value}}
        <svg v-on:click="suppr(uno.id)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
         <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </h1>
    </div>

    <div>
      <div class="ch">
        <div v-for="(dos) in this.lol" :key="dos" v-on:click="charge2(dos.idTag,dos.libTag)" class="us">{{dos.libTag}}</div>
      </div>

      <hr>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
     <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
    <div class="suyt">
      <div v-for="(dos,key) in this.app" :key="dos" v-on:click="charge(key,dos)" class="yt">{{dos.libStar}}</div>
      <!-- <div class="yt">sqeezie</div>
      <div class="yt">wankil</div>
      <div class="yt">joyca</div>
      <div class="yt">sqeezie</div>
      <div class="yt">wankil</div> -->
    </div>
</div>
</template>

<script>

export default {
  data(){
    return {
        app:{},
        lol:{},     
    }
  },
  methods:{
    suppr(key){
      // this.$store.mutations.del(key);
      this.$store.commit('del',key);

      // Reflect.deleteProperty(this.$store.state.ch, key);

      this.$store.state.ab=Object.keys(this.$store.state.ch).length;
      if (Object.keys(this.$store.state.ch).length===0) {
        window.location.href = "/#/";
      }else{
          let y=this.$store.state.ch;
          let i="{";
          for (let index = 0; index < y.length; index++) {
            if (index==(y.length)-1) {
              i+= "\""+index+"\":{\"value\":"+y[index].id+"}";
            }else{
              i+= "\""+index+"\":{\"value\":"+y[index].id+"}, ";
            }
          }
          i+="}";

          let j=JSON.stringify(i);
          console.log(j);

          fetch("http://localhost/test/about.php",{
                      method: "POST",
                      body: j,
                  }
          ).then(response => response.json())
          .then(response=>{console.log(response);this.app = response})





          // ==============================




          
           y=this.app;
      console.log(y);

    i="{";
    for (let index = 0; index < y.length; index++) {
      if (index==(y.length)-1) {
        i+= "\""+index+"\":{\"value\":"+y[index].idStar+"}";
      }else{
        i+= "\""+index+"\":{\"value\":"+y[index].idStar+"}, ";
      }
    }
    i+="}";

    j=JSON.stringify(i);
    // console.log(i);

    fetch("http://localhost/test/about2.php",{
                method: "POST",
                body: j,
            }
    ).then(response => response.json())
    .then(response=>{console.log(response);


    for (let index = 0; index < response.length; index++) {
      for (let index2 = 0; index2 < this.$store.state.ch.length; index2++) {

        console.log(this.$store.state.ch[index2].value+"//"+response[index].libTag);
        if (this.$store.state.ch[index2].value==response[index].libTag) {
          response.splice(index, 1);
        //  console.log("victory");
        }
        
      }
    }

    
    this.lol = response})
          
      }
    },
    charge(lolkey,dos){
      this.$store.state.wa=dos;
      // console.log(this.$store.state.ch);
      this.$store.state.in=Object.keys(this.$store.state.wa).length;
      window.location.href = "/#/wankil";
    },
    charge2(key2,value){
      this.$store.commit('add', { "id": key2, "value": value});
      // console.log(this.$store.state.ch);
      this.$store.state.ab=Object.keys(this.$store.state.ch).length;
      // window.location.href = "/#/about";




       let y=this.$store.state.ch;
          let i="{";
          for (let index = 0; index < y.length; index++) {
            if (index==(y.length)-1) {
              i+= "\""+index+"\":{\"value\":"+y[index].id+"}";
            }else{
              i+= "\""+index+"\":{\"value\":"+y[index].id+"}, ";
            }
          }
          i+="}";

          let j=JSON.stringify(i);
          console.log(j);

          fetch("http://localhost/test/about.php",{
                      method: "POST",
                      body: j,
                      
                      // mode: 'no-cors', 
                      // headers: {
                      //   'Content-Type': 'application/json'
                      //   // 'Content-Type': 'application/x-www-form-urlencoded',
                      // },
                  }
          ).then(response => response.json())
          .then(response=>{console.log(response);this.app = response})
          



          // ============================



           y=this.app;
      console.log(y);

    i="{";
    for (let index = 0; index < y.length; index++) {
      if (index==(y.length)-1) {
        i+= "\""+index+"\":{\"value\":"+y[index].idStar+"}";
      }else{
        i+= "\""+index+"\":{\"value\":"+y[index].idStar+"}, ";
      }
    }
    i+="}";

    j=JSON.stringify(i);
    // console.log(i);

    fetch("http://localhost/test/about2.php",{
                method: "POST",
                body: j,
            }
    ).then(response => response.json())
    .then(response=>{console.log(response);


    for (let index = 0; index < response.length; index++) {
      for (let index2 = 0; index2 < this.$store.state.ch.length; index2++) {

        console.log(this.$store.state.ch[index2].value+"//"+response[index].libTag);
        if (this.$store.state.ch[index2].value==response[index].libTag) {
          response.splice(index, 1);
        //  console.log("victory");
        }
        
      }
    }

    
    this.lol = response})




    }
  },
  async mounted() {
    let y=this.$store.state.ch;
    console.log(y);
        // console.log(y.length);

    let i="{";
    for (let index = 0; index < y.length; index++) {
      if (index==(y.length)-1) {
        i+= "\""+index+"\":{\"value\":"+y[index].id+"}";
      }else{
        i+= "\""+index+"\":{\"value\":"+y[index].id+"}, ";
      }
    }
    i+="}";

    let j=JSON.stringify(i);
    console.log(j);

    await fetch("http://localhost/test/about.php",{
                method: "POST",
                body: j,
            }
    ).then(response => response.json())
    .then(response=>{console.log(response);this.app = response})
    
 
    // let lol={
    //   1:"squeezie",
    //   2:"wankil",
    //   6:"joyca",
    //   12:"ibra",
    //   3:"la menace",
    //   4:"george",
    //   5:"micode",
    //   13:"tibo",
    // } ==============================


      y=this.app;
      console.log(y);

    i="{";
    for (let index = 0; index < y.length; index++) {
      if (index==(y.length)-1) {
        i+= "\""+index+"\":{\"value\":"+y[index].idStar+"}";
      }else{
        i+= "\""+index+"\":{\"value\":"+y[index].idStar+"}, ";
      }
    }
    i+="}";

    j=JSON.stringify(i);
    // console.log(i);

    await fetch("http://localhost/test/about2.php",{
                method: "POST",
                body: j,
            }
    ).then(response => response.json())
    .then(response=>{console.log(response);


    for (let index = 0; index < response.length; index++) {
      for (let index2 = 0; index2 < this.$store.state.ch.length; index2++) {

        // console.log(this.$store.state.ch[index2].value+"//"+response[index].libTag);
        if (this.$store.state.ch[index2].value==response[index].libTag) {
          response.splice(index, 1);
        //  console.log("victory");
        }
        
      }
    }

    
    this.lol = response})
    
  },
}
</script>

<style>
.yt{
  grid-column-start: 2;
  background-color:brown;
  margin:10px;
  padding:5px;
}
.suyt{
  display:grid;
  grid-template-columns: 1fr auto 1fr;
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