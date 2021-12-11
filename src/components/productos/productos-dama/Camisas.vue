<template>
  <div>
    <ListaProductos :data="data" title="Camisas" />
  </div>
</template>

<script>
const data = [
  {
    name: "Camisa Deportiva Run Franjas $390.00 MXN",
    desc: "Camisa deportiva para clima templado o en días calurosos y soleados, absorbe la humedad y mantiene tu cuerpo seco.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/d86e13335a694269be81aab6011ffca4_9366/playera-para-correr-run-3-franjas.jpg",
  },
  {
    name: "Camisa manga corta Pull&Bear $600.00 MXN",
    desc: "Camisa de manga corta con logo Pull&Bear y sombres de ciudades, y cuello redondo.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://static.pullandbear.net/2/photos//2021/I/0/1/p/8240/204/800/8240204800_2_1_8.jpg?t=1634637275289&imwidth=1024",
  },
  {
    name: "Camisa de algodón orgánico $400.00 MXN",
    desc: "Camisa de algodón orgánico confeccionada con tejido 100% sostenible.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://calvinkleinmx.vteximg.com.br/arquivos/ids/257146-550-730/J20J216250BEH-PLANO.jpg?v=637602458540000000",
  },
  {
    name: "Camisa Under Armour Live $200.00 MXN",
    desc: "Camisa que domina el mejor estilo que mezcla lo deportivo con lo casual y mantén siempre el confort al máximo.",
    seller: "Vendedor: Under Armour",
    link: "https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/default/3016291-0100V1.jpg",
  },
  {
    name: "Camisa Adidas Sportswear $490.00 MXN",
    desc: "Camisa para entrenar o para tomar un paseo Sportswear Future Icons para mujer de la marca adidas.",
    seller: "Vendedor: Adidas",
    link: "https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/default/3015263-1101V1.jpg",
  },
  {
    name: "Camisa Superman Azul Real $390.00 MXN",
    desc: "Camisa original de superman en algodón de manga corta y cuello redondo.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://i.ebayimg.com/images/g/i-YAAOSwdGFYnG5o/s-l300.jpg",
  },
  {
    name: "Camisa Adidas Your For You $390.00 MXN",
    desc: "Camisa para divertirte fuera del gimnasio con la comodidad que necesitas.",
    seller: "Vendedor: Adidas",
    link: "https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/default/3016253-0909V1.jpg",
  },
  {
    name: "Camisa Nike One $390.00 MXN",
    desc: "Camisa con diseño único en su corte regular con mangas cortas y cuello redondo.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://dpjye2wk9gi5z.cloudfront.net/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/default/3014359-0901V1.jpg",
  },
];

import ListaProductos from "components/productos/ListaProductos.vue";
export default {
  components: { ListaProductos },
  name: "Camisas",
  data() {
    return {
      data: data,
    };
  },
};
</script>
