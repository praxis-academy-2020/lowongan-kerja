<template>
  <v-main>
    <navbarHome />
    <about/>
    <foot />
  </v-main>
</template>

<script>
import navbarHome from "@/components/navbar-home";
import foot from "@/components/footer.vue"
import about from "@/components/tentang.vue";
export default {
  components: {
    navbarHome,
    foot,
    about
  }
};
</script>