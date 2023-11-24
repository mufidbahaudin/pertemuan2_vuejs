import { createRouter, createWebHistory } from 'vue-router'

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: HomeView
//     },
//     {
//       path: '/',
//       name: '',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../pages/home.vue')
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/about',
    component: () => import('../pages/about.vue')
  },
  {
    path: '/restricted',
    component: () => import('../pages/restricted.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
