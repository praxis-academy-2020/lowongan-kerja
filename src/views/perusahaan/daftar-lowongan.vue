<template>
  <div>
      <navbarPerusahaan/>
    <div v-for="(item, index) in getPerusahaan" :key="index">
        <cardPelamar
            :nama="item.nama"
            :lowongan="item.lowongan"
            :syarat="item.syarat"
            :btn-del="true"
            :id="index"
        />
    </div>
  </div>
</template>

<script>
import navbarPerusahaan from "@/components/navbar-perusahaan.vue"
import cardPelamar from "@/components/card-pelamar.vue"
import {mapGetters} from "vuex";

export default {
    components: {
        navbarPerusahaan,
        cardPelamar
    },
    computed: {
        ...mapGetters([
            'getPerusahaan'
        ])
    }
}
</script>

<style>

</style>