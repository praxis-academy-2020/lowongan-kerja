<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">LokerDEV</div>

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn class="mr-2" outlined>
        <span>Beranda</span>
      </v-btn>
    </router-link>

    <router-link to="/klinik-pelamar">
      <v-btn class="mr-2" outlined>
        <span>Klinik pelamar</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: 'navbar'
};
</script>

<style>
</style>