<template>
    <div>
        <v-card
     class="mx-auto my-12"
    max-width="374"
  >
    <v-img
      height="250"
      src="@/assets/logo edukasi/html5.png"
      
    ></v-img>

    <v-card-title>{{nama}}</v-card-title>

    
        </v-card>
  
    </div>
</template>
<script>
export default {
    props:['nama']   
}
</script>

