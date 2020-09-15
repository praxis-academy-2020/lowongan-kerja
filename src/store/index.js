import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pelamar: [
      {
        nama: 'Walid',
        no_hp: "083010010010",
        email: 'walid@gmail.com',
        surat_lamaran: 'oke',
        rentang_gaji: '100-200'
      }
    ],
    perusahaan: [
      {
        nama: 'Praxis',
        alamat: 'sleman',
        deskripsi: 'blablabla',
        lowongan: 'Frontend',
        syarat: 'dibutuhkan yang ganteng'
      }
    ]
  },

  mutations: {
  },

  actions: {
  },

  getters: {
    getPerusahaan: function(state){
      return state.perusahaan
    },
    getPelamar: function(state){
      return state.pelamar
    }
  },

  modules: {
  }
})
