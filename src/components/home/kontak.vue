<template>
  <div>
    <form>
      <v-text-field label="Nama" v-model="form.nama" required></v-text-field>
      <v-text-field label="Email" v-model="form.email" required></v-text-field>
      <v-textarea label="Deskripsi" v-model="form.deskripsi"></v-textarea>
      <v-btn color="primary">Kirim</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      form: {
        nama: "",
        email: "",
        deskripsi: ""
      }
    };
  },
  components: {}
};
</script>