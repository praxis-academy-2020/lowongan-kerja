<template>
  <v-app>
    <navbar/>

    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue"

export default {
  name: 'App',

  components: {
    navbar
  },

  data: () => ({
    //
  }),
};
</script>
