<template>
  <div class="d-flex">
    <!-- small -->
    <v-navigation-drawer height="100%" v-model="sideNav" absolute temporary>
      <v-list dense>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">JOBDEV</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <router-link to="/perusahaan" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-home-city</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>BERANDA</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/perusahaan/tambah-lowongan" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-briefcase-plus</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Tambah lowongan</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/perusahaan/daftar-lowongan" class="text-decoration-none">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-view-list</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Daftar lowongan</v-list-item-title>
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
        <router-link to="/perusahaan" class="text-decoration-none hidden-xs-only">
          <v-btn class="mr-2" outlined>
            <v-icon class="mr-2">mdi-home-city</v-icon>
            <span>Perusahaan</span>
          </v-btn>
        </router-link>

        <router-link to="/perusahaan/tambah-lowongan" class="text-decoration-none hidden-xs-only">
          <v-btn class="mr-2" outlined>
            <v-icon class="mr-2">mdi-briefcase-plus</v-icon>
            <span>Tambah lowongan</span>
          </v-btn>
        </router-link>

        <router-link to="/perusahaan/daftar-lowongan" class="text-decoration-none hidden-xs-only">
          <v-btn class="mr-2" outlined>
            <v-icon class="mr-2">mdi-view-list</v-icon>
            <span>Daftar lowongan</span>
          </v-btn>
        </router-link>
      </v-toolbar-items>
      <v-app-bar-nav-icon
        @click.native.stop="sideNav = !sideNav"
        class="justify-end mr-2 hidden-sm-and-up"
      ></v-app-bar-nav-icon>
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
a.router-link-exact-active span {
  color: rgb(27, 233, 27);
}
</style>