<template>
  <v-main>
      <navbarPerusahaan/>
      <h1 class="text-center mt-5">BERANDA PERUSAHAAN</h1>
      <foot/>
  </v-main>
</template>

<script>
import navbarPerusahaan from "@/components/navbar-perusahaan"
import foot from "@/components/footer.vue";

export default {
    components: {
        navbarPerusahaan,
        foot
    }
}
</script>

<style>

</style>