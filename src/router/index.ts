import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  SpeakingView from '../views/SpeakingView.vue'
import ContactViewVue from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/speaking',
      name: 'speaking',
      component: SpeakingView
    },
    {
      path: '/contact',
      name:'contact',
      component:ContactViewVue
    }
  ]
})

export default router
