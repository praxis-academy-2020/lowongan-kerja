<template>
  <v-main>
    <navbarPelamar />
    <h1 class="text-center mt-5">EDUKASI</h1>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <CardEdu :poto="g2" judul="HTML Dasar" link="https://docs.google.com/file/d/0B3UxDd4duYHuamc5NUhZSGlYcGM/edit" deskripsi="Belajar HTML dasar" />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <CardEdu :poto="g1" judul="VueJS dasar" link="https://vuejs.id/" deskripsi="Belajar framework Vue JS dasar" />
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <CardEdu :poto="g3" judul="Bootstrap" link=" https://drive.google.com/file/d/0BxK8qTUoVVLUS1B6ZzN5SGEtTHc/edit" deskripsi="Belajar Bootstrap dasar" />
       
      </v-col>
      
    </v-row>
  </v-container>
    <foot/>
  </v-main>
</template>

<script>
import NavbarPelamar from "@/components/navbar-pelamar.vue";
import CardEdu from "@/components/card-edukasi.vue";
import foot from "@/components/footer.vue";
import g1 from "@/assets/logo.png"
import g2 from "@/assets/logo edukasi/html5.png"
import g3 from "@/assets/logo edukasi/bootstrap.png"
export default {
  components: {
    NavbarPelamar,
    CardEdu,
    foot
  },
  data: () => {
    return {
      g1: g1,
      g2: g2,
      g3: g3
    }
  }
};
</script>

<style>
</style>