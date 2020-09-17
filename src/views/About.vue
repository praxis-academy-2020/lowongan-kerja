<template>
  <v-main>
    <navbarHome />
    <h1>This is an about page</h1>
    <foot />
  </v-main>
</template>

<script>
import navbarHome from "@/components/navbar-home";
import foot from "@/components/footer.vue"

export default {
  components: {
    navbarHome,
    foot
  }
};
</script>