<template>
    <div class="wankil">
        <HelloWankil/> 
        <HelloLink/> 
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWankil from '@/components/HelloWankil.vue';
import HelloLink from '@/components/HelloLink.vue';

export default {
  components: {
    HelloWankil,
    HelloLink,
  }
}
</script>
