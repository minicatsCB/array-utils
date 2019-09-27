
const routes = [
  {
    path: '/',
    component: () => import('layouts/Index.vue'),
    children: [
      { path: '', component: () => import('pages/machinesList.vue') }
    ]
  },
  {
    path: '/infoTabs',
    component: () => import('layouts/Index.vue'),
    children: [
      { path: '', component: () => import('pages/infoTabs.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
