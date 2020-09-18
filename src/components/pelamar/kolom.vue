<template>
  <div>
    <v-row class="mb-10">
      <v-col>
        <h1 class="text-center">TEMPAT PEMBERIAN KARIER</h1>
        <h1 class="text-center">TERBAIK UNTUK PERUSAHAAN MU</h1>
        <P class="text-center">Pasang Lowongan Perusahaan Mu Disini!</P>
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="mb-10">
      <v-col>
        <v-img class="hidden-xs-only mb-5" src="@/assets/perusahaan/orang.png"></v-img>
        <h1 class="text-center">KAMI HADIR UNTUK MU</h1>
        <h1 class="text-center">ANDA PUAS KAMI PUAS</h1>
        <P class="text-center">Pasang Lowongan Perusahaan Mu Disini!</P>
      </v-col>
    </v-row>
  
    <v-row class="mb-10 d-flex">
      <v-col class="d-flex align-content-center">
        <v-img src="@/assets/perusahaan/2.png" height="400px" width="700px"></v-img>
      </v-col>
      <v-col class="align-self-center">
        <h1 class="text-center mt-2">Kirim Lamaran</h1>
        <p
          class="text-center mt-2 mx-5"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magni neque possimus nam quae. Sequi, ullam iure vero voluptates at illum pariatur itaque, earum, aperiam odio debitis. Expedita, architecto amet.</p>
      </v-col>
    </v-row>

    <v-row class="d-flex mb-10">
      <v-col class="order-first order-lg-last d-flex align-content-center">
        <v-img src="@/assets/perusahaan/3.png" height="400px" width="700px"></v-img>
      </v-col>
      <v-col class="order-last order-lg-first align-self-center">
        <h1 class="text-center mt-2">Seleksi Pelamar</h1>
        <p
          class="text-center mt-2 mx-5"
        >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magni neque possimus nam quae. Sequi, ullam iure vero voluptates at illum pariatur itaque, earum, aperiam odio debitis. Expedita, architecto amet.</p>
      </v-col>
    </v-row>

    <v-row class="mb-10 d-flex">
      <v-col class="d-flex align-content-center">
        <v-img src="@/assets/perusahaan/1.png" height="400px" width="700px"></v-img>
      </v-col>
      <v-col class="align-self-center">
        <h1 class="text-center mt-2">Temui dan Tentukan</h1>
        <p class="text-center mt-2 mx-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo magni neque possimus nam quae. Sequi, ullam iure vero voluptates at illum pariatur itaque, earum, aperiam odio debitis. Expedita, architecto amet.</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="tulis">
          <p class="text-center mt-10">MAU CARI</p>
          <p class="text-center">SOFTWARE ENGINEER?</p>
        </div>

        <div class="tulisan">
          <p class="text-center">Ikuti program ONLINE Job Fair JOBDEV.</p>
          <p class="text-center">Pasang Lowongan Perusahaan Mu Disini!</p>
        </div>
      </v-col>
    </v-row>

    <router-link to="/perusahaan/tambah-lowongan">
      <v-btn class="center primary">Daftar sekarang</v-btn>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.center {
  margin: 0;
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