import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Home from '@/views/HomeView.vue';
import Details from '@/views/DetailsView.vue';
import NotFound from '@/views/NotFoundView.vue';

const routes = [
  {
    path: '/',
    redirect: '/machines',
  },
  {
    path: '/machines',
    redirect: '/machines/home',
    component: DefaultLayout,
    children: [
      {
        path: 'home/',
        name: 'Home',
        component: Home,
      },
      {
        path: 'details/:id',
        name: 'About',
        component: Details,
      },
    ]
  },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;