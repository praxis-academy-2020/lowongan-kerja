<template>
  <v-main>
    <navbarPerusahaan />
    <h1 class="text-center mt-5">TAMBAH LOWONGAN</h1>
    <v-container>
      <form>
        <v-text-field label="Nama perusahaan" v-model="form.nama" required></v-text-field>
        <v-text-field label="Alamat perusahaan" v-model="form.alamat" required></v-text-field>
        <v-text-field label="Nama lowongan" v-model="form.lowongan" required></v-text-field>
        <v-text-field label="Syarat" v-model="form.syarat" required></v-text-field>
        <v-textarea label="Deskripsi" v-model="form.deskripsi"></v-textarea>
        <v-btn color="primary" @click="save()">Kirim</v-btn>
      </form>
    </v-container>
    <foot/>
  </v-main>
</template>

<script>
import navbarPerusahaan from "@/components/navbar-perusahaan";
import foot from "@/components/footer.vue";

export default {
  data: () => {
    return {
      form: {
        id: null,
        nama: "",
        alamat: "",
        lowongan: "",
        syarat: "",
        deskripsi: ""
      }
    };
  },
  methods: {
    save: function() {
      this.$store.dispatch("tambahId");
      this.form.id = this.$store.state.id;
      console.log("vuex : " + this.$store.state.id, "state : " + this.form.id);
      this.$store.dispatch("tambahPerusahaan", this.form);
    }
  },
  components: {
    navbarPerusahaan,
    foot
  }
};
</script>

<style>
</style>