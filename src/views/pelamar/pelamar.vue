<template>
  <div>
    <navbarPelamar />
    <h1>pelamar</h1>
    <div v-for="(item, index) in getPerusahaan" :key="index">
      <card :nama="item.nama" :lowongan="item.lowongan" :syarat="item.syarat" />
    </div>
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
