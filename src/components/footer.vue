<template>
  <v-footer color="primary" class="mt-12">
    <div class="text-center">
      <v-row>
        <v-col cols="12" sm="4" md="3">
          <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
          <v-img src="@/assets/logo/logo7.png" aspect-ratio="2.5"></v-img>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <h3 class="warna mb-5">JOBDEV</h3>
          <p class="warna">Tentang Kami</p>
          <p class="warna">Bantuan</p>
          <p class="warna">Berkarir bersama Kami</p>
          <p class="warna">FAQ</p>
        </v-col>

        <v-col cols="12" sm="4" md="3">
          <h3 class="warna mb-5">PERUSAHAAN</h3>
          <p class="warna">Lowongan Kerja</p>
          <p class="warna">Edukasi</p>
          <p class="warna">Loker Klinik</p>
        </v-col>

        <v-col class="hidden-xs-only" md="3">
          <v-card-text
            class="warna"
          >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.</v-card-text>
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>mentor terbaik Hendi JHUOSS</strong>
      </v-card-text>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style scoped>
.warna {
  color: white;
}
.warna a {
  color: white;
  text-decoration: none;
}
.warna a:hover {
  color: wheat;
  text-decoration: none;
}
</style>