<template>
  <v-main>
    <navbarPelamar />

    <v-container>
      <v-row class="mx-5">
        <v-col cols="12" sm="4">
          <v-img :src="foto" />
        </v-col>
        <v-col class="text-center" cols="12" sm="8">
          <h1>{{item[0].nama}}</h1>
          <p>Alamat : {{item[0].alamat}}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p>Deskripsi : {{item[0].deskripsi}}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p>Lowongan : {{item[0].lowongan}}</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <p>Syarat : {{item[0].syarat}}</p>
        </v-col>
      </v-row>

      <v-row class="d-flex justify-center">
        <router-link to="/pelamar" class="text-decoration-none">
          <v-btn color="error" outlined class="mr-2">Batal</v-btn>
        </router-link>
        <modalPelamar />
      </v-row>
    </v-container>

    <foot />
  </v-main>
</template>

<script>
import navbarPelamar from "@/components/navbar-pelamar";
import modalPelamar from "@/components/modal-pelamar";
import foot from "@/components/footer.vue";
import vue from "@/assets/logo.png";
import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      foto: vue
    };
  },
  components: {
    navbarPelamar,
    modalPelamar,
    foot
  },
  computed: {
    ...mapGetters(["getPerusahaan"]),
    item: function() {
      let a = this.getPerusahaan.filter(a => a.id == this.$route.params.id);
      return a;
    }
  }
};
</script>

<style>
</style>