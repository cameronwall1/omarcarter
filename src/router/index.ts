import LandingComponentVue from '@/View/LandingComponent.vue'
import LargeAboutComponentVue from '@/View/LargeAboutComponent.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingComponentVue
    },
    {
      path: '/about',
      name: 'about',
      component: LargeAboutComponentVue
    }
  ]
})

export default router
