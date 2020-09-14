<template>
  <v-app>
    <navbar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!--footer-->
      <foot/>
    </v-footer>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue";
import foot from "./components/footer.vue"

export default {
  name: "App",

  components: {
    navbar,
    foot
  },

  data: () => ({
    //
  })
};
</script>
