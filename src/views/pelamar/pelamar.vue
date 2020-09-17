<template>
  <div>
    <navbarPelamar />
    <h1>pelamar</h1>
    <v-row>
      <v-col v-for="(item, index) in getPerusahaan" :key="index" cols="4">
        <card
          :nama="item.nama"
          :lowongan="item.lowongan"
          :syarat="item.syarat"
          :btnDetail="true"
          :route="item.id"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import card from "@/components/card-pelamar.vue";
import navbarPelamar from "@/components/navbar-pelamar.vue";
import { mapGetters } from "vuex";

export default {
  name: "Pelamar",
  computed: {
    ...mapGetters(["getPerusahaan"])
  },
  components: {
    card,
    navbarPelamar
  }
};
</script>
