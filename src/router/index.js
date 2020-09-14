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
    path: '/perusahaan',
    name: 'Perusahaan',
    component: () => import(/* webpackChunkName: "perusahaan" */ '../views/perusahaan.vue')
  },
  {
    path: '/perusahaan/:id',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/detail.vue')
  },
  {
    path: '/pelamar',
    name: 'Pelamar',
    component: () => import(/* webpackChunkName: "pelamar" */ '../views/pelamar.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
