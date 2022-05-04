import Vue from 'vue'
import VueRouter from 'vue-router'
import Benvinguda from '../views/Benvinguda.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'benvinguda',
    component: () => import(/* webpackChunkName: "benvinguda" */ '../views/Benvinguda.vue')
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/home',
    name: 'home',
    
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
