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

    <v-card-title>{{judul}}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >

        <div class="grey--text ml-4">Rating : {{rating}}</div>
      </v-row>

      <div class="my-4 subtitle-1">
        FREE
      </div>

      <div>{{deskripsi}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-text>
      <v-chip-group
        
        active-class="deep-purple accent-4 white--text"
        column
      >
       <v-btn class="primary">download</v-btn>

        
      </v-chip-group>
    </v-card-text>

    
        </v-card>
  
      
    </div>
</template>

<script>
export default {
    props: ['gambar','judul', 'rating', 'deskripsi']
}
</script>