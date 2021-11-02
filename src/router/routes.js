
const routes = [
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/registro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Registro.vue') }
    ]
  },

  {
    path: '/caballeros',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'accesorios', component: () => import('src/pages/productos-caballero/Accesorios.vue') },
      { path: 'pantalones-shorts', component: () => import('src/pages/productos-caballero/Pantalones.vue') },
      { path: 'sudaderas-hoodies', component: () => import('pages/productos-caballero/Sudaderas.vue') },
      { path: 'camisas', component: () => import('pages/productos-caballero/Camisas.vue') }


    ]
  },

  {
    path: '/damas',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'accesorios', component: () => import('pages/productos-dama/Accesorios.vue') },
      { path: 'pantalones-shorts', component: () => import('pages/productos-dama/Pantalones.vue') },
      { path: 'sudaderas-hoodies', component: () => import('pages/productos-dama/Sudaderas.vue') },
      { path: 'camisas', component: () => import('pages/productos-dama/Camisas.vue') }


    ]

  },

  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'metodo-de-pago', component: () => import('pages/MetodoPago.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  { path: '*', component: () => import('pages/Error404.vue') }
]

export default routes
