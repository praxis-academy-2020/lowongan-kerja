<template>
  <v-app>
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <navbarPerusahaan/>
  </v-app>
</template>

<script>
import navbarPerusahaan from "@/components/footer"
export default {
  name: "App",

  components: {navbarPerusahaan
  },
  data: () => ({
    //
  })
};

</script>
