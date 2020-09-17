<template>
    <div>
      <v-col>
        <v-card
     class="mx-auto my-12"
    max-width="400"
  >
    <v-img
      height="100"
      src="@/assets/logo/logo8.png"
      
    ></v-img>
    <v-card-title>{{judul}}</v-card-title>
    <v-card-title>FREE</v-card-title>
    <div class="ml-4">
        {{deskripsi}}
      </div>
    <v-btn class="primary mb-3 center">Download</v-btn>

    
        </v-card>
  
      </v-col>
        
    </div>
</template>
<script>
export default {
    props:['judul','deskripsi']   
}
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
