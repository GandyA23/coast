
const routes = [
  // User Routes
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/Login.vue') },
      { path: 'registro', component: () => import('pages/user/Registro.vue') }
    ]
  },
  // User Routes
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'landing', component: () => import('pages/user/Landing.vue') },
      { path: 'checkout', component: () => import('pages/user/Checkout.vue') },
      { path: 'inbox-email', component: () => import('pages/user/InboxEmail.vue') },
      { path: 'planes', component: () => import('pages/user/Pricing.vue') },
      { path: 'carrito', component: () => import('pages/user/ShoppingCart.vue') },
      { path: 'chat', component: () => import('components/chat/ChatC.vue') },
      { path: 'perfil', component: () => import('pages/user/UserProfile.vue') },
      { path: 'detalles', component: () => import('pages/user/Detalles.vue') },
      { path: 'metodo-de-pago', component: () => import('pages/user/MetodoPago.vue') },
    ]

  },

  {
    path: '/caballeros',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'accesorios', component: () => import('pages/user/productos-caballero/Accesorios.vue') },
      { path: 'pantalones-shorts', component: () => import('pages/user/productos-caballero/Pantalones.vue') },
      { path: 'sudaderas-hoodies', component: () => import('pages/user/productos-caballero/Sudaderas.vue') },
      { path: 'camisas', component: () => import('pages/user/productos-caballero/Camisas.vue') }
    ]
  },
  {
    path: '/damas',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: 'accesorios', component: () => import('pages/user/productos-dama/Accesorios.vue') },
      { path: 'pantalones-shorts', component: () => import('pages/user/productos-dama/Pantalones.vue') },
      { path: 'sudaderas-hoodies', component: () => import('pages/user/productos-dama/Sudaderas.vue') },
      { path: 'camisas', component: () => import('pages/user/productos-dama/Camisas.vue') }
    ]
  },

  // Admin Routes
  {
    path: '/admin',
    component: () => import('src/layouts/AdminLayout.vue'),
    children: [
      { path: 'chart', component: () => import('pages/admin/Chart.vue') },
      { path: 'stepper', component: () => import('pages/admin/Stepper.vue') },
      { path: 'lista-productos', component: () => import('pages/admin/ListaProductos.vue') },
      { path: 'formulario', component: () => import('pages/admin/Form.vue') },
      { path: 'registro-productos', component: () => import('pages/admin/RegisterProducts.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  { path: '/error-:code', component: () => import('pages/Error.vue') },
  { path: '*', component: () => import('pages/Error.vue') }
]

export default routes
