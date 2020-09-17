<template>
  <v-main>
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

    <v-row class="mb-10 d-flex align-center">
      <v-col class="hidden-xs-only">
        <v-img src="@/assets/kontak/orang.png"></v-img>
      </v-col>
      <v-col class="mx-10">
        <h2 class="text-center mb-5">HUBUNGI KAMI</h2>
        <kontakk />
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <h1 class="text-center mb-5">KATA MEREKA</h1>
    
    <v-row>
      <v-col>
        <tes/>
        </v-col>
        <v-col>
        <tes/>
        </v-col>
        <v-col>
        <tes/>
        </v-col>
    </v-row>
    <v-divider class="mt-10"></v-divider>
    <v-row class="mb-10 mx-auto" >
     <v-col>
        <kerjaa />
     </v-col>
    </v-row>
    
    <foot/>
  </v-main>
</template>

<script>
// @ is an alias to /src
import navbarHome from "../components/navbar-home.vue";
import cardss from "@/components/home/card.vue";
import kontakk from "@/components/home/kontak.vue";
import kerjaa from "@/components/home/kerjasama.vue";
import tes from "@/components/home/testimoni.vue";
import foot from "@/components/footer.vue";
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
    kerjaa,
    foot,
    tes
  }
};
</script>


