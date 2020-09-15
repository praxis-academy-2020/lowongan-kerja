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
        alamat: 'Sleman',
        deskripsi: 'blablabla',
        lowongan: 'Frontend',
        syarat: 'dibutuhkan yang ganteng'
      },
      {
        nama: 'PT Makmur',
        alamat: 'Jogja',
        deskripsi: 'blablabla',
        lowongan: 'fullstack javascript',
        syarat: 'minimal lulusan sd'
      }
    ]
  },

  mutations: {
    tambahPerusahaan: function(state, payload){
        state.perusahaan.push(payload);
    }
  },

  actions: {
    tambahPerusahaan: function({commit}, payload){
      commit('tambahPerusahaan', payload);
      alert('ok')
      console.log(this.state)
    }
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
