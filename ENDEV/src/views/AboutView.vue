<template>
  <div class="about">
    <AboutUser/>
  </div>
</template>

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
</style>

<script>
// @ is an alias to /src
import AboutUser from '@/components/AboutUser.vue'

export default {
  components: {
    AboutUser,
  }
}
</script>