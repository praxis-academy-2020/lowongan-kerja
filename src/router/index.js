import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tentang',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  },
  {
    path: '/perusahaan',
    name: 'Perusahaan',
    component: () => import(/* webpackChunkName: "perusahaan" */ '../views/perusahaan/perusahaan.vue')
  },
  {
    path: '/tambah-lowongan',
    name: 'Tambah-lowongan',
    component: () => import(/* webpackChunkName: "perusahaan" */ '../views/perusahaan/tambah-lowongan.vue')
  },
  {
    path: '/perusahaan/tambah-edukasi',
    name: 'Tambah-edukasi',
    component: () => import(/* webpackChunkName: "perusahaan" */ '../views/perusahaan/tambah-edukasi.vue')
  },
  {
    path: '/pelamar',
    name: 'Pelamar',
    component: () => import(/* webpackChunkName: "pelamar" */ '@/views/pelamar/pelamar.vue'),
  },
  {
    path: '/pelamar/perusahaan/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/pelamar/detail.vue')
  },
  {
    path: '/pelamar/klinik-pelamar',
    name: 'Klinik-pelamar',
    component: () => import(/* webpackChunkName: "detail" */ '../views/pelamar/klinik-pelamar')
  },
  {
    path: '/pelamar/edukasi',
    name: 'Edukasi',
    component: () => import(/* webpackChunkName: "detail" */ '../views/pelamar/edukasi.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
