<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <div class="d-flex align-center gmb">JOB DEV</div>
    </router-link>

    <v-spacer></v-spacer>

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

    <router-link to="/tentang">
      <v-btn class="mr-2" outlined>
        <span>Tentang</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.gmb{
  color: rgb(27, 233, 27);
  font-size: 22px;
  font-weight: bold;
}
</style>