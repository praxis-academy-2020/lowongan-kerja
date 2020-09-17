<template>
  <div>
    <h1 class="text-center">TEMPAT PEMBERIAN KARIER</h1>
    <h1 class="text-center">TERBAIK UNTUK PERUSAHAAN MU</h1>
    <P class="text-center mb-15">Pasang Lowongan Perusahaan Mu Disini!</P>
    <v-divider></v-divider>
    <v-img class="hidden-xs-only" src="@/assets/perusahaan/orang.png"></v-img>
    <h1 class="text-center">TEMPAT PEMBERIAN KARIER</h1>
    <h1 class="text-center">TERBAIK UNTUK PERUSAHAAN MU</h1>
    <P class="text-center mb-15">Pasang Lowongan Perusahaan Mu Disini!</P>

    <v-row>
      <v-col>
        <v-img src="@/assets/perusahaan/1.png" height="400px" width="700px"></v-img>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
      <v-col>
        <v-img src="@/assets/perusahaan/2.png" height="400px" width="700px"></v-img>
      </v-col>
    </v-row>

    <div class="tulis">
      <p class="text-center mt-10">MAU CARI</p>
      <p class="text-center">SOFTWARE ENGINEER?</p>
    </div>

    <div class="tulisan">
      <p class="text-center">Ikuti program ONLINE Job Fair JOBDEV.</p>
      <p class="text-center">Pasang Lowongan Perusahaan Mu Disini!</p>
    </div>
    <router-link to="/perusahaan/tambah-lowongan">
      <v-btn class="center primary">Daftar sekarang</v-btn>
    </router-link>
  </div>
</template>
<script>
export default {
  // props:['judul','deskripsi']
};
</script>
<style scoped>
.center {
  margin: 0;
  margin-top: 2%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.tulis {
  font-size: 50px;
}
.tulisan {
  font-size: 18px;
}
</style>