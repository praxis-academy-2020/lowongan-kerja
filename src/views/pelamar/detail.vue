<template>
  <div>
    <navbarPelamar />
    <h1>Detail {{this.$route.params.id}}</h1>
    <h1>{{item[0].nama}}</h1>
    <h1>{{item[0].lowongan}}</h1>
    <p>{{item[0].alamat}}</p>
    <p>{{item[0].deskripsi}}</p>
    <p>{{item[0].syarat}}</p>
    <modalPelamar/>
  </div>
</template>

<script>
import navbarPelamar from "@/components/navbar-pelamar";
import modalPelamar from "@/components/modal-pelamar";
import { mapGetters } from "vuex";

export default {
  components: {
    navbarPelamar,
    modalPelamar
  },
  computed: {
    ...mapGetters(["getPerusahaan"]),
    item: function() {
      let a = this.getPerusahaan.filter((a) => a.id == this.$route.params.id);
      return a;
    }
  }
};
</script>

<style>
</style>