<template>
    <div class="su">
        <div class="bo">
            <h1 v-if="wan">{{wan.libStar}}</h1>
            <div class="image"><img :src="this.de.im"></div>
            <div><p>{{this.de.text}}</p></div>
            
            <br>
            <div class="tag2">
                <div class="ch">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    </div>
                    <div v-for="(dos) in this.lol" :key="dos" v-on:click="com(dos[0],dos[1])" class="us">{{dos[1]}}</div>
                </div>
                
                


                <div v-if="this.co.id" class="such">
                    <h2>Article : {{this.co.txt}}</h2>
                    <div class="lescom">
                        <div  v-for="(dos,key) in this.comm" :key="dos">
                            <hr>
                            <div class="sulescom">
                                <p>{{ key }}</p>
                                <img class="susules" :src="this.de.im">
                                <p>{{dos}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br>

            <!-- <div class="tag2">
                <div v-for="(dos) in this.end" :key="dos">
                    <h3>{{dos.site}}</h3>
                    <p>{{dos.link}}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </div>      -->
           
           
        </div>
    </div>
</template>

<script>

export default {
  data(){
    return {
        wan:this.$store.state.wa,
        lol:this.$store.state.film,
        de:{
            text:"Imaginez qu'un notaire vous convoque pour vous faire la lecture d'un document très important et que, le moment venu, dans son bureau, il renverse maladroitement toute une bouteille d'encre sur ledit document. Ça commence donc",
            im:"https://cdn.pixabay.com/photo/2022/03/18/02/54/flower-7075771_1280.jpg",
        },
        co:{
            id:false,
            txt:false,
        },
        comm:this.$store.state.avis,
        
    }
  },
  watch: {
    "$store.state.avis": {
      deep: true,
      handler(val) {
        this.comm = val;
      }
    }
  },
//   computed(){
//     this.comm=this.$store.state.avis;
//   },

//   watch: {
//   "$store.state.avis": {
//     deep: true,
//     handler(newValue) {
//       this.avis = newValue;
//     }
//   }
// }
//   ,
  mounted() {
      this.loadFilm(this.wan.libStar);
    this.testURL();
    if (!this.$store.state.wa) {
        // alert("ya");
        window.location.href = "/#/";
    }


        
      
  },
  methods:{
      
    
    async testURL(){
        let url=window.location.href;
        let tabU=url.split("#");
        console.log(tabU);
        if (tabU[2]) {
            tabU[2]=5

            await fetch("http://localhost/test/url.php?id="+tabU[2],{
            }).then(response => response.json())
            .then(response=>{console.log(response);this.$store.state.wa=response;this.$store.state.in=true})


        }

    },

    
    
    
    
    
    
    
    // f  inutile
      async starterpack(){
        
        let i = "{value:"+this.$store.state.wa.idStar+"}";
        let j=JSON.stringify(i);
        console.log(j);

        if(this.$store.state.wa){
            await fetch("http://localhost/test/wankil1.php",{
                method: "POST",
                body: j,
            }).then(response => response.json())
            .then(response=>{console.log(response);this.app=response})

        }else{
            window.location.href = "/#/";
        }
      },


    //  fin inutile :::::::::::::



      async loadFilm(star){
        // this.lol={
        //     1:"commentary",
        //     2:"gaming",
        //     6:"defi",
        //     12:"compilation"
        // }
        let tabPeopl = star.split(' ');
        let FinalStr = "https://api.themoviedb.org/3/search/person?api_key=7d575ffaee2c834502719c85b5ba5b6c&query=";
        tabPeopl.forEach((element,key) => {
            if(key+1>=tabPeopl.length){
                FinalStr+=element
            }else{
                FinalStr+=element+"+"
            }
        });
        console.log(FinalStr);
        await fetch(FinalStr,{
            method: "GET",
        })
        .then(response => response.json())
        .then(response => {
            this.lol={};
            // console.log(response);
            if (response.total_pages==0) {
                this.lol={
                    1:"rand film",
                    2:"gaming",
                    6:"defi",
                    12:"rand film",
                }
                return;

            }
            let tab = [];
            this.$store.state.film=={};
            response.results[0].known_for.forEach(element => {
                //  console.log(element.title);
                 this.lol[element.id]=element.title;
                //  console.log(element);
                 tab.push([element.id,element.title]);
                 
            })
            console.log(tab);
            this.$store.state.film=tab;
            this.lol=tab;
            console.log(this.lol);

        })
        
      }
      ,
      async com(key,star){
          this.co.id=key;
          this.co.txt=star;

          let id=key;
          await fetch("https://api.themoviedb.org/3/movie/"+id+"/reviews?api_key=7d575ffaee2c834502719c85b5ba5b6c&language=en-US&page=1",{
            method: "GET",
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.total_pages==0) {
                this.comm={
                    1:"AUCUN AVIS",
                    2:"AUCUN AVIS",
                    6:"defi",
                    12:"AUCUN AVIS"
                }
                return;

            }

            this.comm={};
            response.results.forEach(element => {
                 this.comm[element.author]=element.content;
                // console.log(element);
            })
        })
        
        this.$store.state.avis=this.comm;
        


      }
  },
}
</script>

<style>
    img{
        height:50% !important;
        width:50% !important;
        margin:20px;
    }
    .su{
        display: grid;
        grid-template-columns: 1fr auto 1fr;
    }
    /* .su div{
        grid-column-start: 2;
    } */
    .bo{
        grid-column-start: 2;
        width:95vw;   
    }

    .image img{
        background-size: cover;
    }
    .tag2{
        grid-column-start: 1;
        grid-column-end: 3;

    }



    .ch{
    display: flex;
    background-color: rgba(255, 0, 0, 0.24);
    overflow: auto;
    margin:10px;
  }
    .us{
    height:100px;
    min-width:100px;
    margin:5px;
    background-color:rgba(255, 0, 0, 0.4);
    }
    .such{
        background-color: rgba(255, 0, 0, 0.24);

    }





    .lescom{
        max-height: 250px;
        overflow: auto;
    }
    .sulescom{
        /* display:flex; */
        margin:40px;
    }
    .susules{
        width:100%;

    }
</style>