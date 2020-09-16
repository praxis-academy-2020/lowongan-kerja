<template>
  <div>
    <navbarPelamar></navbarPelamar>
  </div>
  
</template>

<script>
// @ is an alias to /src
import navbarPelamar from "@/components/navbar-pelamar.vue";


export default {
  name: 'Pelamar',
  data () {
      return {
        page: 1,
      }
    },
  components: {
    
    navbarPelamar
  }
}
</script>
