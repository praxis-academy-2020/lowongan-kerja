<template>
  <v-main>
    <navbarPelamar />
    <h1 class="text-center mt-5">LOWONGAN KERJA</h1>
    <v-row>
      <v-col v-for="(item, index) in getPerusahaan" :key="index">
        <card
          :nama="item.nama"
          :lowongan="item.lowongan"
          :alamat="item.alamat"
          :btnDetail="true"
          :route="item.id"
        />
      </v-col>
    </v-row>
    <foot />
  </v-main>
</template>

<script>
// @ is an alias to /src
import card from "@/components/card-pelamar.vue";
import navbarPelamar from "@/components/navbar-pelamar.vue";
import foot from "@/components/footer.vue";
import { mapGetters } from "vuex";

export default {
  name: "Pelamar",
  computed: {
    ...mapGetters(["getPerusahaan"])
  },
  components: {
    card,
    navbarPelamar,
    foot
  }
};
</script>
