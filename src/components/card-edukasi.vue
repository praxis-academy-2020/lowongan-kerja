<template>
  <div>
    <v-col>
      <v-card class="mx-auto" max-width="400">
        <v-img height="100" :src="poto"></v-img>
        <v-card-title>{{judul}}</v-card-title>
        <v-card-title>Gratis</v-card-title>
        <div class="ml-4">{{deskripsi}}</div>
        
         <a :href="link" target="_blank" class="text-decoraton-none" ><v-btn color="primary" class="mx-auto center">BACA</v-btn></a> 
     
      </v-card>
    </v-col>
  </div>
</template>
<script>
export default {
  props: ["judul", "deskripsi", "link", "poto"]
};
</script>
<style scoped>
.center {
  margin: 0;
  margin-top: 20%;

  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
