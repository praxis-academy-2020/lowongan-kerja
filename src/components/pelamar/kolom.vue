<template>
    <div>
    <h1 class="text-center">TEMPAT PEMBERIAN KARIER </h1>
    <h1 class="text-center">TERBAIK UNTUK PERUSAHAAN MU </h1>
    <P class="text-center mb-15"> Pasang Lowongan Perusahaan Mu Disini! </P>
<v-divider></v-divider>
<v-img class="hidden-xs-only" src="@/assets/perusahaan/orang.png"></v-img>
     <h1 class="text-center mt-15">KAMI HADIR UNTUK MU</h1>
    <h1 class="text-center">ANDA PUAS KAMI PUAS</h1>
    <P class="text-center mb-15"> Pasang Lowongan Perusahaan Mu Disini! </P>
<v-divider></v-divider>
<v-row >
    <v-col>
        <v-img class="hidden-xs-only"  src="@/assets/perusahaan/2.png" height="400px"
    width="700px"></v-img>
    </v-col>
    <v-col>
        <h1 class="text-center mt-2 hidden-xs-only">Kirim Lamaran</h1>
        <p class="text-center mt-2 hidden-xs-only">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magni neque possimus nam quae. Sequi, ullam iure vero voluptates at illum pariatur itaque, earum, aperiam odio debitis. Expedita, architecto amet.</p>
    </v-col>
</v-row>
<v-divider class="hidden-xs-only" ></v-divider>
<v-row >
    <v-col>
        <h1 class="text-center mt-2 hidden-xs-only">Seleksi Pelamar</h1>
        <p class="text-center mt-2 hidden-xs-only">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magni neque possimus nam quae. Sequi, ullam iure vero voluptates at illum pariatur itaque, earum, aperiam odio debitis. Expedita, architecto amet.</p>
    </v-col>
    <v-col>
        <v-img class="hidden-xs-only"  src="@/assets/perusahaan/3.png" height="400px"
    width="700px"></v-img>
    </v-col>
</v-row>
<v-divider class="hidden-xs-only" ></v-divider>
<v-row >
    <v-col>
        <v-img class="hidden-xs-only"  src="@/assets/perusahaan/1.png" height="400px"
    width="700px"></v-img>
    </v-col>
    <v-col>
        <h1 class="text-center mt-2 hidden-xs-only">Temui dan Tentukan</h1>
        <p class="text-center mt-2 hidden-xs-only">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magni neque possimus nam quae. Sequi, ullam iure vero voluptates at illum pariatur itaque, earum, aperiam odio debitis. Expedita, architecto amet.</p>
    </v-col>
</v-row>
<v-divider class="hidden-xs-only" ></v-divider>

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