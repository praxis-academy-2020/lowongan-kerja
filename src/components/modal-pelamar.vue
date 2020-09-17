<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" outlined dark v-bind="attrs" v-on="on">Lamar</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Form lamaran kerja</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nama lengkap*" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="No. HP*" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field label="Email*" required></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field hint="Contoh : https://github.com/yourname" label="Akun github"></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field hint="Contoh : https://instagram.com/yourname" label="Akun instagram"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Surat lamaran*" type="text" required></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  v-model="files"
                  color="primary"
                  counter
                  label="Masukan file*"
                  multiple
                  placeholder="Masukan CV, Portfolio dan file pendukung lainnya."
                  prepend-icon="mdi-paperclip"
                  outlined
                  :show-size="1000"
                >
                  <template v-slot:selection="{ index, text }">
                    <v-chip v-if="index < 2" color="primary" dark label small>{{ text }}</v-chip>

                    <span
                      v-else-if="index === 2"
                      class="overline grey--text text--darken-3 mx-2"
                    >+{{ files.length - 2 }} File(s)</span>
                  </template>
                </v-file-input>
              </v-col>
            </v-row>
          </v-container>
          <small>*wajib diisi</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">Batal</v-btn>
          <v-btn color="success" text @click="kirim()">Kirim</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    files: []
  }),
  methods: {
    kirim: function(){
      this.dialog = false;
      this.$swal({
        icon: 'success',
        title: 'Berhasil mengirim lamaran kerja'
      })
    }
  }
};
</script>