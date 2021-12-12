<template>
  <div>
    <ListaProductos :data="data" title="Camisas" />
  </div>
</template>

<script>
const data = [
  {
    name: "Camisa Deportiva $390.00 MXN",
    desc: "Camisa deportiva muy elastica construida para darte ese estilo causal y deportivo al mismo tiempo.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://i.ibb.co/LtrhGVD/playera-deportiva.png",
  },
  {
    name: "Camisa de algodón $600.00 MXN",
    desc: "Camisa construida con 100% de algodón, hecho en mexico.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://i.ibb.co/4VSyHJQ/playera-de-algodon.png",
  },
  {
    name: "Camisa Gildan $400.00 MXN",
    desc: "Camisa cuello redondo, manga corta full print super comoda.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://i.ibb.co/tJKhgCR/playera-gildan.png",
  },
  {
    name: "Camisa Negra con estampado $200.00 MXN",
    desc: "Camisa casual con estampado de una rosa y mangas cortas.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://i.ibb.co/8M4Wrz4/playera-rosa-blanca.png",
  },
  {
    name: "Camisa Combinada $490.00 MXN",
    desc: "Camisa manga corta, combinada color rojo y blanco, estampado delantero.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://i.ibb.co/Fb17Vzn/playera-combinada.png",
  },
  {
    name: "Camisa de Tela $390.00 MXN",
    desc: "Camisa deportiva muy elastica construida para darte ese estilo causal y deportivo al mismo tiempo.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://i.ibb.co/W39h32t/playera-militar.png",
  },
  {
    name: "Camisa Graphic Neck Levi´s $390.00 MXN",
    desc: "Camisa hecha de suave tejido de punto jersey esta camisa tiene un fit estandar.",
    seller: "Vendedor: LEVI´S",
    link: "https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/2462446.jpg",
  },
  {
    name: "Camisa Premium Fit-SF $390.00 MXN",
    desc: "Camisa decorada con técnica de vinil, termo-transferible con terminado afelpado.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://www.tiendasfrogs.com.mx/3120-large_default/PLAYERA-HOMBRE-PREMIUM-FIT--SF-SPORT-OUT.jpg",
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
