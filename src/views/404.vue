<template>
  <v-main>
    <navbarHome />
    <v-img src="@/assets/404/404.png" class="mx-auto" width="800px"></v-img>
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