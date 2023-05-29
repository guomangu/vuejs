<template>
<div class="tag2">
    <div v-for="(dos) in this.end" :key="dos">
        <h3>{{dos.site}}</h3>
        <p>{{dos.link}}</p>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
    </svg>
</div> 
</template>

<script>
export default {
  data(){
    return {
        end:{
            0:{
                site:"twitter",
                link:"https://vuex.vuejs.org/guide/#the-simplest-store",
            },
            1:{
                site:"twitter",
                link:"https://vuex.vuejs.org/guide/#the-simplest-store",
            },
            2:{
                site:"twitter",
                link:"https://vuex.vuejs.org/guide/#the-simplest-store",
            }
        }
    }
  }
}
</script>

<style>

</style>