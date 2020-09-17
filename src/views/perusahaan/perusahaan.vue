<template>
  <div>
      <navbarPerusahaan/>
        <v-carousel class="mb-10" cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
      <branda/>
  </div>
</template>

<script>
import navbarPerusahaan from "@/components/navbar-perusahaan"
import j1 from "@/assets/jombroton/jombroton1.jpg";
import j2 from "@/assets/jombroton/jombroton2.jpg";
import j3 from "@/assets/jombroton/jombroton3.jpg";
import branda from "@/components/pelamar/kolom.vue";
export default {
     data() {
    return {
      items: [
        {
          src: j1
        },
        {
          src: j2
        },
        {
          src: j3
        }
      ]
    };
  },
    components: {
        navbarPerusahaan,
        branda
    }
}
</script>

<style>

</style>