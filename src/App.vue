<template>
  <v-app>
    <navbar/>

    <v-main>
      <home/>
    </v-main>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue"
import home from "./views/Home"
export default {
  name: 'App',

  components: {
    navbar,
    home
  },

  data: () => ({
    //
  }),
};
</script>
