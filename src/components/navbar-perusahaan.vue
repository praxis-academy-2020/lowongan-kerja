<template>
  <v-app-bar app color="primary" dark>
    <router-link to="/">
      <div class="d-flex align-center gmb">JOB DEV</div>
    </router-link>

    <v-spacer></v-spacer>

    <router-link to="/perusahaan">
      <v-btn class="mr-2" outlined>
        <span>beranda</span>
      </v-btn>
    </router-link>

    <router-link to="/tambah-lowongan">
      <v-btn class="mr-2" outlined>
        <span>tambah lowongan</span>
      </v-btn>
    </router-link>

    <router-link to="/perusahaan/tambah-edukasi">
      <v-btn class="mr-2" outlined>
        <span>tambah edukasi</span>
      </v-btn>
    </router-link>
  </v-app-bar>
</template>

<script>
export default {
  name: "navbar"
};
</script>

<style scoped>
.gmb{
  color: rgb(27, 233, 27);
  font-size: 22px;
  font-weight: bold;
}
</style>