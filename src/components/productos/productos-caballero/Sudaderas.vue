<template>
  <div>
    <ListaProductos :data="data" title="Sudaderas / Hoddies" />
  </div>
</template>

<script>
const data = [
  {
    name: "Hoodie negro de moda $220.00 MXN",
    desc: "Hoddie color negro con tiras ajustables y bolsillo delantero.",
    seller: "Vendedor: Fashionnet Work",
    link: "https://www.artebordado.com.mx/wp-content/uploads/2019/07/Captura-de-pantalla-2019-07-25-a-las-13.53.14.png",
  },
  {
    name: "Hoodie Jack & Jones $300.00 MXN",
    desc: "Hoddie para hombre con capucha, combinado de coles obscuros y claros.",
    seller: "Vendedor: Jack & Jones",
    link: "https://cdn.grupoelcorteingles.es/statics/manager/contents/images/uploads/2021/09/rkIWSDmzt.jpeg",
  },
  {
    name: "Sudadera de manga corta $400.00 MXN",
    desc: "Sudadera con capucha de manga corta y estampado 3D de Wave.",
    seller: "Vendedor: FASHIOLA",
    link: "https://cdn.fashiola.mx/L555990987/newchic-hombre-con-capucha-sudadera-con-capucha-de-manga-corta-con-capucha-y-estampado-3d-de-wave-para-hombre.jpg",
  },
  {
    name: "Sudadera con capucha casual $600.00 MXN",
    desc: "Sudadera casual de AutumnWinter con bolsillo de moda y colores sólidos.",
    seller: "Vendedor: FASHIOLA",
    link: "https://www.dhresource.com/0x0/f2/albu/g8/M01/77/03/rBVaV1wsZuyAcAE8AAI8MNdy44U829.jpg",
  },
  {
    name: "Hoodie gris Pull&Bear $190.00 MXN",
    desc: "Sudadera oversize con capucha y bajo ajustable.",
    seller: "Vendedor: Pull&Bear",
    link: "https://static.pullandbear.net/2/photos/2021/I/0/2/p/8591/513/827/8591513827_1_1_3.jpg?t=1635180384051",
  },
  {
    name: "Sudadera Hollister $200.00 MXN",
    desc: "Sudadera Hollister de color verde ajustable y hecha de algodón.",
    seller: "Vendedor: Hollister",
    link: "https://anf.scene7.com/is/image/anf/KIC_322-2120-1014-320_prod1",
  },
  {
    name: "Sudadera Unisex con capucha $200.00 MXN",
    desc: "Sudadera unisex con capucha y bolsillo canguro, combinación de algodón y poliéster.",
    seller: "Vendedor: Pull&Bear",
    link: "https://sudeporte.com/13741-thickbox_default/sudadera-capucha-keya-100-royal.jpg",
  },
  {
    name: "Sudadera con cierre y capucha $200.00 MXN",
    desc: "Sudadera con cierre básica por exelencia, sencilla y cómoda, indispensable en el armario.",
    seller: "Vendedor: Pull&Bear",
    link: "https://contents.mediadecathlon.com/p2073214/k$d8302e1b01ccd8402b21dcbea69e06c3/sudadera-con-cierre-y-capucha-fitness-ligera-gris.jpg?&f=452x452",
  },
];

import ListaProductos from "components/productos/ListaProductos.vue";
export default {
  components: { ListaProductos },
  name: "Sudaderas",
  data() {
    return {
      data: data,
    };
  },
};
</script>
