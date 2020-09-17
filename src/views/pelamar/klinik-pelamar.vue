<template>
  <div>
    <navbarPelamar/>
    <h1 class="text-center mt-5">KLINIK PELAMAR</h1>
    <v-row>
      <v-col >
        <klinikk 
    nama='Cek CV'
    />
      </v-col>

      <v-col>
        <klinikk 
    nama='Cek Surat Lamaran'
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
