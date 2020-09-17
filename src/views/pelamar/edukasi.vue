<template>
  <div>
    <h1 class="text-center mt-5">EDUKASI</h1>
    <navbarPelamar/>
    <v-row>
        <v-col > 
            <CardEdu
            judul='haha'
            deskripsi='hauuu'

            />
        </v-col>
        <v-col > 
            <CardEdu
            judul='haha'
            deskripsi='hauuu'
        
            />
        </v-col>
        <v-col > 
            <CardEdu
            judul='haha'
            deskripsi='hauuu'
        
            />
        </v-col>
        <v-col > 
            <CardEdu
            judul='haha'
            deskripsi='hauuu'
        
            />
        </v-col>
    </v-row>
      
  </div>
</template>

<script>
import NavbarPelamar from "@/components/navbar-pelamar.vue"
import CardEdu from "@/components/card-edukasi.vue"
export default {
 
    components: {
      NavbarPelamar,
      CardEdu
    }
}
</script>

<style>

</style>