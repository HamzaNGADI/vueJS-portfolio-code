import { createRouter, createWebHistory } from 'vue-router'
import Presentation from '../views/Presentation.vue'

const routes = [
  {
    path: '/',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/projets',
    name: 'Projets',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "projets" */ '../views/Projets.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
  return { left: 0, top: 0 }
   }
})

export default router
