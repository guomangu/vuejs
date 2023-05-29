<template>
    <div class="boss">
        <div class="suboss">
            <div class="susuboss"><h1>{{this.app2Tag.libTag}}<br>=</h1><input type="text" placeholder="star" v-model="repStar"></div>
            <hr>
            <div class="susuboss"><h1>{{this.app2Star.libStar}}<br>=</h1><input type="text" placeholder="tag" v-model="repTag"></div>
            <hr>
            <button type="button" class="btn btn-success" v-on:click="launch()">Success</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            app2Tag:{},  
            app2Star:{},   
            repStar:this.repStar,
            repTag:this.repTag, 
        }
    },
    async mounted() {
      await fetch("http://localhost/test/game.php",{
        // mode: 'no-cors'
      }).then(response => response.json())
      .then(response=>{console.log(response);this.app2Tag=response.tag;this.app2Star=response.star})
    },  
    methods:{
        launch(){
            let idStar=this.app2Star.idStar;
            let repStar=this.repStar;
            let idTag=this.app2Tag.idTag;
            let repTag=this.repTag;
            let j=JSON.stringify({star: {"idStar":idStar,"repTag":repTag}, tag: {"idTag":idTag,"repStar":repStar}})
            console.log(j);

            fetch("http://localhost/test/launch.php",{
                method: "POST",
                body: j,
            }).then(response => console.log(response))

            this.repStar="";
            this.repTag="";

            this.$router.push({ name: 'home' });


            // this.app2Tag="";
            // this.app2Star="";
            // fetch("http://localhost/test/game.php",{
            // }).then(response => response.json())
            // .then(response=>{console.log(response);this.app2Tag=response.tag;this.app2Star=response.star})
            // console.log(this.app2Tag);

            
            
        
        }
    },
}
</script>

<style>
.game{
    height: 100%;
}
    .boss{
        height: 100%; 
        /* ou 100vh-(pixel_menu) */
        display: grid;
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: 1fr auto 1fr;

    }
    .suboss{
        grid-row-start: 2;
        grid-column-start: 2;
    }
    .susuboss{
        /* display: flex; */
        border-radius:10px;
        padding:10px;
        background-color:#bdecd6;
    }
</style>