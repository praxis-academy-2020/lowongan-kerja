<template>
  <div>
    <navbarPelamar/>
    <v-row>
        <v-col cols="4"> 
            <CardEdu
            judul='haha'
            rating='15'
            deskripsi='hauuu'
        
            />
        </v-col>
        <v-col cols="4"> 
            <CardEdu
            judul='haha'
            rating='15'
            deskripsi='hauuu'
        
            />
        </v-col>
        <v-col cols="4"> 
            <CardEdu
            judul='haha'
            rating='15'
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