import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/homePage.vue')
  } ,
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/newsPage.vue')
  } ,
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/blogsPage.vue')
  } ,
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/aboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
