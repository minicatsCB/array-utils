import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/DefaultLayout.vue'),
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'Home',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue'),
        },
        {
          path: 'details/:id',
          name: 'Details',
          component: () => import(/* webpackChunkName: "infoTabs" */ '@/views/DetailsView.vue'),
          props: true
        }
      ],
    },
  ]
})

export default router
