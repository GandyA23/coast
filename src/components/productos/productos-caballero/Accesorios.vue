<template>
  <div>
    <ListaProductos :data="data" title="Accesorios" />
  </div>
</template>

<script>
const data = [
  {
    name: "Gorra Forty Seven $220.00 MXN",
    desc: "Gorra Forty Seven Yankees de Nueva York Lightning de mezclilla.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://images.unsplash.com/photo-1619184324666-a2912be71bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Gorra Jumpman $300.00 MXN",
    desc: "Gorra Jumpman confeccionada con una tela de sarga ligera lavada para ofrecer un look desgastado.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
  },
  {
    name: "Gorra Trucker Adicolor $300.00 MXN",
    desc: "Gorra Trucker Adicolor Universitaria curvada espuma.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a28e3e6e83854fbc9104ad2b0103a9e4_9366/gorra-trucker-adicolor-universitaria-curvada-espuma.jpg",
  },
  {
    name: "Mochila Unisex Azul $400.00 MXN",
    desc: "Mochila Urbania Unisex de color azul resistente al agua y un gran peso.",
    seller: "Vendedor: Everest Company",
    link: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Mochila clásica $200.00 MXN",
    desc: "Mochila clásica Burgundy con silueta aerodinámica elegante y detallada.",
    seller: "Vendedor: Everest Company",
    link: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Lentes Green Bottle $190.00 MXN",
    desc: "Lentes Green Bottle con armazón metálico plateado mate con terminales en acabado dorado.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Lentes de sol polarized $200.00 MXN",
    desc: "Lentes estilo browline con patillas y frontal superior en TR90 negro pulido.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://images.unsplash.com/photo-1600024914363-d9bf85e438f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Lentes de sol Legacy $200.00 MXN",
    desc: "Lentes de sol para hombre Legacy Verano Modelo 1828.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://media.revistagq.com/photos/606457a5a359af169e483a94/master/w_768,h_1165,c_limit/hbeu58089294_999_220.jpg",
  },
];

import ListaProductos from 'components/productos/ListaProductos.vue';
export default {
  components: { ListaProductos },
  name: "Accesorios",
  data() {
    return {
      data: data,
    };
  },
};
</script>
