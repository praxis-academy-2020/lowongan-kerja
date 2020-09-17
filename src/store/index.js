import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 1,
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
        id: 0,
        nama: 'Praxis',
        alamat: 'Yogyakarta, Sleman.',
        deskripsi: 'blablabla',
        lowongan: 'Frontend developer',
        syarat: 'dibutuhkan yang ganteng'
      },
      {
        id: 1,
        nama: 'PT Makmur',
        alamat: 'Jogja',
        deskripsi: 'blablabla',
        lowongan: 'fullstack javascript',
        syarat: 'minimal lulusan sd'
      }
    ]
  },

  mutations: {
    tambahId: function(state){
      state.id++
    },
    tambahPerusahaan: function(state, payload){
        state.perusahaan.push(payload);
    },
    hapusPerusahaan: function(state, id){
      state.perusahaan.splice(id, 1)
    }
  },

  actions: {
    tambahId: function({commit}){
      commit('tambahId')
    },
    tambahPerusahaan: function({commit}, payload){
      commit('tambahPerusahaan', payload);
    },
    hapusPerusahaan: function({commit}, id){
      commit('hapusPerusahaan', id)
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
