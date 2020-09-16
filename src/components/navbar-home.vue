<template>
  <div>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-apple</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <router-link to="/perusahaan">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-apple</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Perusahaan</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="primary">
      <router-link to="/">
        <v-toolbar-title class="d-flex align-center gmb">JOB DEV</v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-xs-only">
        <router-link to="/pelamar">
          <v-btn class="mr-2" outlined>
            <span>Pelamar</span>
          </v-btn>
        </router-link>

        <router-link to="/perusahaan">
          <v-btn class="mr-2" outlined>
            <span>Perusahaan</span>
          </v-btn>
        </router-link>

        <router-link to="/tentang">
          <v-btn class="mr-2" outlined>
            <span>Tentang</span>
          </v-btn>
        </router-link>
      </v-toolbar-items>
      <v-app-bar-nav-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
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
.gmb {
  color: rgb(27, 233, 27);
  font-size: 22px;
  font-weight: bold;
}


</style>