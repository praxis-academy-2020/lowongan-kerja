<template>
  <v-main>
    <navbarPerusahaan />
    <h1 class="text-center mt-5">DAFTAR LOWONGAN</h1>
    <v-container>
      <v-row>
      <v-col v-for="(item, index) in getPerusahaan" :key="index" cols="12" sm="6" md="4">
        <cardPelamar
          :nama="item.nama"
          :lowongan="item.lowongan"
          :syarat="item.syarat"
          :btn-del="true"
          :id="index"
          :lamar="false"
        />
      </v-col>
    </v-row>
    </v-container>
    <foot/>
  </v-main>
</template>

<script>
import navbarPerusahaan from "@/components/navbar-perusahaan.vue";
import cardPelamar from "@/components/card-pelamar.vue";
import foot from "@/components/footer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    navbarPerusahaan,
    cardPelamar,
    foot
  },
  computed: {
    ...mapGetters(["getPerusahaan"])
  }
};
</script>

<style>
</style>