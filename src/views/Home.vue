<template>
  <div >
    <navbarHome/>
    
    
    <v-carousel cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
    </v-carousel-item>
  </v-carousel>
  <br><br>
  <v-row>
  <v-col v-for="cards in cardss" :key="cards.id" cols="4">
    
  <cardss />
  </v-col>
  </v-row>
  <br><br>
  <v-divider></v-divider>
  
  
  <v-row>
    <v-col cols="6">
      <v-img src="@/assets/kontak/orang.png"  height="80%"></v-img>
    </v-col >
    <v-col cols="5" class="mt-15 " >
      <h2 class="text-center">HUBUNGI KAMI</h2><br>
        <kontakk/>
    </v-col >
    <v-col cols="1">

    </v-col>
  </v-row>
    <kerjaa/>
  </div>

  
</template>

<script>
// @ is an alias to /src
import navbarHome from "../components/navbar-home.vue";
import cardss from "@/components/home/card.vue";
import kontakk from "@/components/home/kontak.vue";
import kerjaa from "@/components/home/kerjasama.vue";
import j1 from "@/assets/jombroton/jombroton1.jpg";
import j2 from "@/assets/jombroton/jombroton2.jpg";
import j3 from "@/assets/jombroton/jombroton3.jpg";

export default {
  name: 'Home',
   data () {
      return {
        items: [
          {
            src: j1,
          },
           {
            src: j2,
          },
           {
            src: j3,
          },
          // 'indigo',
          // 'warning',
          // 'pink darken-2',
          // 'red lighten-1',
          // 'deep-purple accent-4',
        ],
        // slides: [
        //   'First',
        //   'Second',
        //   'Third',
          
        // ],
        cardss: ['a','b','c'],
      }
    },
  components: {
    navbarHome,
    cardss,
    kontakk,
    kerjaa
  }
}
</script>


