<template>
  <div>
    <navbarHome />

    <v-carousel class="mb-10" cycle height="400" hide-delimiter-background show-arrows-on-hover>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <v-row class="mb-10">
      <v-col v-for="cards in cardss" :key="cards.id">
        <cardss />
      </v-col>
    </v-row>

    <v-divider></v-divider>

    <v-row class="mb-10">
      <v-col class="hidden-xs-only">
        <v-img src="@/assets/kontak/orang.png" height="80%"></v-img>
      </v-col>
      <v-col class="mx-10">
        <h2 class="text-center mb-5">HUBUNGI KAMI</h2>
        <kontakk />
      </v-col>
    </v-row>
    <v-row class="mb-10 ml-15" >
     <v-col >
        <kerjaa />
     </v-col>
    </v-row>
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
  name: "Home",
  data() {
    return {
      items: [
        {
          src: j1
        },
        {
          src: j2
        },
        {
          src: j3
        }
      ],
      cardss: ["a", "b", "c"]
    };
  },
  components: {
    navbarHome,
    cardss,
    kontakk,
    kerjaa
  }
};
</script>


