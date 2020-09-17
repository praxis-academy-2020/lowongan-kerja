<template>
  <v-main>
    <navbarHome />
    <h1>Error not found</h1>
    <foot />
  </v-main>
</template>

<script>
import foot from "@/components/footer.vue";
import navbarHome from "@/components/navbar-home.vue";

export default {
  components: {
    foot,
    navbarHome
  }
};
</script>

<style>
</style>