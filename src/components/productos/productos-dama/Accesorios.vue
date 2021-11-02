<template>
  <div>
    <ListaProductos :data="data" title="Accesorios" />
  </div>
</template>

<script>
const data = [
  {
    name: "Lentes Hawkers $390.00 MXN",
    desc: "Lente solar Hawkers Lauper unisex con figuras, color café.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://images.unsplash.com/photo-1566730301259-855bea8dee04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Lentes solar de moda $600.00 MXN",
    desc: "Lente solar para mujer Beckham Eyewear, color verde claro.",
    seller: "Vendedor: Shein",
    link: "https://images.unsplash.com/photo-1615854215399-02ca34f414cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    name: "Lentes Ralph negros $400.00 MXN",
    desc: "Lente solar Ralph color negro, perfecto para leer en todo momento.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=680&q=80",
  },
  {
    name: "Bolsa de piel de moda $700.00 MXN",
    desc: "Bolsa de piel sintética para portátil de 14 pulgadas con cadena de color café.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80",
  },
  {
    name: "Bolsa estilo cartera $590.00 MXN",
    desc: "Bolsa cartera con diseño de letra metálica, color blanco con gris.",
    seller: "Vendedor: Shein",
    link: "https://images.unsplash.com/photo-1609172795052-05bf80681031?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Gorro de tela para invierno $390.00 MXN",
    desc: "Gorro de punto de moda de color amarillo muy comodo para el invierno.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://images.unsplash.com/photo-1576529598261-96e376f6aabb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
  },
  {
    name: "Gorro de invierno $390.00 MXN",
    desc: "Gorro de invierno de punto bobble marfil con doble pompón de los New York Yankees.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://www.4elementsshop.es/14617-large_default/gorro-invierno-chica-new-era-ny-yankees-double-pompon-blanco-hueso.jpg",
  },
  {
    name: "Guantes para el invierno $390.00 MXN",
    desc: "Guantes de gamuza de imitación caliente del invierno.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://www.dhresource.com/0x0/f2/albu/g7/M01/D7/94/rBVaSVvuiXiAHCLAAADGpuyjuU0806.jpg/winter-glove-for-women-faux-suede-gloves.jpg",
  },
];

import ListaProductos from "components/productos/ListaProductos.vue";
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
