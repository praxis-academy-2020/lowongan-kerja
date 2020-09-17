<template>
    <div>
        
        <div class="text-center mt-10">
            <h1>TENTANG</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet architecto maiores culpa optio ea eveniet! Quaerat magni, adipisci fuga eligendi numquam autem deserunt repellendus, explicabo omnis aperiam eveniet architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet architecto maiores culpa optio ea eveniet! Quaerat magni, adipisci fuga eligendi numquam autem deserunt repellendus, explicabo omnis aperiam eveniet architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet architecto maiores culpa optio ea eveniet! Quaerat magni, adipisci fuga eligendi numquam autem deserunt repellendus, explicabo omnis aperiam eveniet architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, amet architecto maiores culpa optio ea eveniet! Quaerat magni, adipisci fuga eligendi numquam autem deserunt repellendus, explicabo omnis aperiam eveniet architecto.
            </p>
        </div>
        
    <v-parallax
            class="mt-15 mb-15"
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
            <v-row
            align="center"
            justify="center"
            >
            <v-col class="text-center" cols="12">
                <h1 class="display-1 font-weight-thin mb-4">Tentang & FAQ</h1>
            
            </v-col>
            </v-row>
  </v-parallax>
          <div class="text-center">
            <h1>F.A.Q</h1>
            <v-row justify="center">
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="(item,i) in 10"
        :key="i"
      >
        <v-expansion-panel-header>apakah lorem isum adalah ganja?</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
        </div>
        <v-divider class="mt-2"></v-divider>


    </div>
</template>
<script>
export default {
    
}
</script>