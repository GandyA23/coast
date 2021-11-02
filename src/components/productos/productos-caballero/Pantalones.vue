<template>
  <div>
    <ListaProductos :data="data" title="Pantalones / short" />
  </div>
</template>

<script>
const data = [
  {
    name: "Jeans P862 Modone $220.00 MXN",
    desc: "Pantalones de mezclilla de hombre clásicos, dos bolsillos interiores y dos cosidos en la espalda.",
    seller: "Vendedor: SHOPSTYLE",
    link: "https://modone.com/eng_pl_Mens-jeans-P862-blue-13989_2.jpg",
  },
  {
    name: "Pantalones vaqueros oscuros $300.00 MXN",
    desc: "Vaqueros de cintura media baja en denim elástico desteñido con corte super slim y cierre de cremallera y botón.",
    seller: "Vendedor: SHOPSTYLE",
    link: "https://images.ikrix.com/product_images/original/iKRIX-pt05-straight-leg-jeans-swing-super-slim-fit-dark-jeans-00000141335f00s003.jpg",
  },
  {
    name: "Pantalones vaqueros $400.00 MXN",
    desc: "Pantalones vaqueros rotos Athletic Taper Built-In Flex.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://img.shopstyle-cdn.com/sim/92/9d/929d362f4c377d5660db328893b00e42_best/skinny-built-in-flex-distressed-jeans-for-men.jpg",
  },
  {
    name: "Jeans de moda $200.00 MXN",
    desc: "Jeans de moda para hombre, sencillos de color celeste claro y fresco.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://images.beautifulhalo.com/images/v/201908/O/156498914158.jpg",
  },
  {
    name: "Short Sportswear $190.00 MXN",
    desc: "Short confecciondao con una camiseta de algodón suave.",
    seller: "Vendedor: Slash",
    link: "https://prochampions.vteximg.com.br/arquivos/ids/370569-410-410/GJ0854_1.jpg?v=637544674252500000",
  },
  {
    name: "Short suelto cómodo $200.00 MXN",
    desc: "Short suelto cómodo casual con bolsillos de moda.",
    seller: "Vendedor: Slash",
    link: "https://cdn.shopify.com/s/files/1/0264/2218/1937/products/d_252Ff_252Fb_252F7_252Fdfb7ea17390e7350b0981c76a5cecd3b46ec84c1_fs_camo_hero_grey_hd_01_1_500x.jpg?v=1595625562",
  },
  {
    name: "Short Air Lite Running $200.00 MXN",
    desc: "Short Air Running casual para hombres ropa deportiva.",
    seller: "Vendedor: Under Armour",
    link: "https://contents.mediadecathlon.com/p1730203/k$f7f9c655b25ed30ef3f2694281accffa/short-de-tenis-para-hombre-dry-500-azul-marino.jpg?&f=452x452",
  },
  {
    name: "Short para hombre color verde $200.00 MXN",
    desc: "Short hecho a base de poliéster tiro medio y tela ultra-ligera.",
    seller: "Vendedor: Under Armour",
    link: "https://falabella.scene7.com/is/image/FalabellaCO/3066347_1?wid=800&hei=800&qlt=70",
  },

];

import ListaProductos from "components/productos/ListaProductos.vue";
export default {
  components: { ListaProductos },
  name: "Pantalones",
  data() {
    return {
      data: data,
    };
  },
};
</script>
