<template>
  <div>
    <navbarPelamar/>
    <v-row>
      <v-col cols="6">
        <klinikk 
    nama='review'
    />
      </v-col>
      <v-col cols="6">
        <klinikk 
    nama='interview'
    />
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import NavbarPelamar from "@/components/navbar-pelamar.vue"
import klinikk from "@/components/card-klinik.vue"

export default {
  data () {
      return {
       
      }
    },
    components: {
      NavbarPelamar,
      klinikk
    }
}
</script>

<style>

</style>