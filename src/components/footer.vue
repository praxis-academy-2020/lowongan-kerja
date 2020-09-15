<template>
  <v-footer  color="black">
    <div class="text-center">
      
    <v-row>
      <v-col cols="3" >  
        <v-btn v-for="icon in icons" :key="icon" class="mx-1 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      <v-img src="@/assets/logo/logo1.png" aspect-ratio="2.5"></v-img>  
      
      
      </v-col>
      <v-col cols="3" >
        
        <v-card-text
        class="warna"
      >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
      </v-card-text>
      
      </v-col>
      <v-col cols="3" >
        <v-card-text
        class="warna"
      >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.</v-card-text>
      </v-col>
      <v-col cols="3" >
        <v-card-text
        class="warna"
      >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.</v-card-text>
      </v-col>
    </v-row>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>mentor terbaik Hendi JHUOSS</strong>
      </v-card-text>
    </div>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"]
  })
};
</script>

<style scoped>
.warna{
  color:white ; 
}
</style>