<template>
  <div class="d-flex">
    <!-- small -->
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">JOBDEV</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <router-link to="/pelamar" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-briefcase-search</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Lowongan</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/pelamar/klinik-pelamar" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-bag-checked</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Klinik pelamar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/pelamar/edukasi" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-cast-education</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Edukasi</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- dekstop -->
    <v-toolbar dark class="justify-end primary">
      <router-link to="/">
        <v-toolbar-title class="align-center white--text font-weight-bold">JOBDEV</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="justify-end align-center">
        <router-link to="/pelamar" class="text-decoration-none hidden-xs-only">
          <v-btn class="mr-2" outlined>
            <v-icon class="mr-2">mdi-briefcase-search</v-icon>
            <span>Lowongan</span>
          </v-btn>
        </router-link>

        <router-link to="/pelamar/klinik-pelamar" class="text-decoration-none hidden-xs-only">
          <v-btn class="mr-2" outlined>
            <v-icon class="mr-2">mdi-bag-checked</v-icon>
            <span>Klinik pelamar</span>
          </v-btn>
        </router-link>

        <router-link to="/pelamar/edukasi" class="text-decoration-none hidden-xs-only">
          <v-btn class="mr-2" outlined>
            <v-icon class="mr-2">mdi-cast-education</v-icon>
            <span>Edukasi</span>
          </v-btn>
        </router-link>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav" class="justify-end mr-2 hidden-sm-and-up"></v-app-bar-nav-icon>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      sideNav: false
    };
  }
};
</script>

<style scoped>
a.router-link-exact-active button {
  color: #0288D1;
  background-color: white;
}
</style>