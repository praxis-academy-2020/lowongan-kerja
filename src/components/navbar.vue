<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">LokerDEV</div>

    <v-spacer></v-spacer>

    <router-link to="/">
      <v-btn class="mr-2" outlined>
        <span>Beranda</span>
      </v-btn>
    </router-link>

    <router-link to="/pelamar">
      <v-btn class="mr-2" outlined>
        <span>Pelamar</span>
      </v-btn>
    </router-link>

    <router-link to="/perusahaan">
      <v-btn class="mr-2" outlined>
        <span>Perusahaan</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style>
</style>