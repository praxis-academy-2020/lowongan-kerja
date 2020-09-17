<template>
    <div>
      <v-col>
        <v-card
     class="mx-auto my-12"
    max-width="400"
  >
    <v-img
      height="150"
      src="@/assets/logo/logo8.png"
      
    ></v-img>
    <v-card-title>{{nama}}</v-card-title>
    <v-file-input
    v-model="files"
    placeholder="Upload your documents"
    label="File input"
    multiple
    prepend-icon="mdi-paperclip"
  >
    <template v-slot:selection="{ text }">
      <v-chip
        small
        label
        color="primary"
      >
        {{ text }}
      </v-chip>
    </template>
  </v-file-input>
    <v-btn class="primary mb-3 center">KIRIM</v-btn>
        </v-card>
  
      </v-col>
        
    </div>
</template>
<script>
export default {
  data: () => ({
      files: [],
    }),
    props:['nama']   
}
</script>

<style scoped>

  .center {
  margin: 0;
  margin-top: 10%;
 
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

}
</style>