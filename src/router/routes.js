
const routes = [
  {
    path: '/',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/user/Landing.vue') },
      { path: 'checkout', component: () => import('pages/user/Checkout.vue') },
      { path: 'inbox-email', component: () => import('pages/user/InboxEmail.vue') },
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/planes',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/pagos/Pricing.vue') }
    ]
  },
  {
    path: '/carrito',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/paymentprocess/ShoppingCart.vue') }
    ]
  },
  {
    path: '/stepper',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/paymentprocess/Stepper.vue') }
    ]
  },
  //Prueba componente de chat
{
  path: '/chat',
  component: () => import('layouts/UserLayout.vue'),
  children: [
    { path: '', component: () => import('src/components/chat/ChatC.vue') }
  ]
},
  {
    path: '/perfil',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/home/UserProfile.vue') }
    ]
  },

  {
    path: '/detalles',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/productos/Detalles.vue') }
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
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },

  {
    path: '/lista-productos',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/ListaProductosAdmin.vue') }
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

  {
    path: '/formulario',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/form/Form.vue')}
    ]
  },

  {
    path: '/registro-productos',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      { path: '', component: () => import('pages/productos/RegisterProducts.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  { path: '/error-:code', component: () => import('pages/Error.vue') },
  { path: '*', component: () => import('pages/Error.vue') }
]

export default routes
