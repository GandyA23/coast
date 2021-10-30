
const routes = [
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/planes',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pagos/Pricing.vue')}
    ]
  },

  {
    path: '/perfil',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/UserProfile.vue')}
    ]
  },

  {
    path: '/detalles',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/productos/Detalles.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  { path: '*', component: () => import('pages/Error404.vue') }
]

export default routes
