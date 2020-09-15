<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <div class="d-flex align-center">LokerDEV</div>
    </router-link>

    <v-spacer></v-spacer>

    <router-link to="/pelamar">
      <v-btn class="mr-2" outlined>
        <span>Lowongan</span>
      </v-btn>
    </router-link>

    <router-link to="/pelamar/klinik-pelamar">
      <v-btn class="mr-2" outlined>
        <span>Klinik pelamar</span>
      </v-btn>
    </router-link>

        <router-link to="/pelamar/edukasi">
      <v-btn class="mr-2" outlined>
        <span>Edukasi</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style>
</style>