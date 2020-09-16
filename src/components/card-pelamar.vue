<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{nama}}</v-card-title>
    </v-img>

    <v-card-text class="text--primary">
      <h1>{{lowongan}}</h1>

      <div>{{syarat}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="success" text>Apply</v-btn>
      <router-link :to="`/pelamar/perusahaan/${route}`" v-show="btnDetail">
        <v-btn color="primary" text>Detail</v-btn>
      </router-link>
      <v-btn color="error" @click="del()" v-show="btnDel" text>Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: [
    "nama",
    "alamat",
    "deskripsi",
    "lowongan",
    "syarat",
    "btnDel",
    "id",
    'route',
    "btnDetail"
  ],
  methods: {
    del: function() {
      this.$store.dispatch("hapusPerusahaan", this.id);
      alert("ok");
    }
  }
};
</script>