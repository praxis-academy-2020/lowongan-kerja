<template>
  <v-main>
    <navbarPelamar />
    <h1 class="text-center mt-5">EDUKASI</h1>
    <v-row>
      <v-col>
        <CardEdu judul="Javascript Dasar" deskripsi="Belajar javascript dasar" />
      </v-col>
      <v-col>
        <CardEdu judul="VueJS dasar" deskripsi="Belajar framework Vue JS dasar" />
      </v-col>
    </v-row>
    <foot/>
  </v-main>
</template>

<script>
import NavbarPelamar from "@/components/navbar-pelamar.vue";
import CardEdu from "@/components/card-edukasi.vue";
import foot from "@/components/footer.vue";

export default {
  components: {
    NavbarPelamar,
    CardEdu,
    foot
  }
};
</script>

<style>
</style>