<template>
  <div>
    <ListaProductos :data="jeans" title="Pantalones / short" />
  </div>
</template>

<script>
const jeans = [
  {
    name: "Pantalones parche $390.00 MXN",
    desc: "Pantalones con bolsillo con parche con nudo delantero color rosa claro.",
    seller: "Vendedor: SHEIN",
    link: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Pantalones vaqueros $600.00 MXN",
    desc: "Pantalones vaqueros rotos bajo crudo y ligero.",
    seller: "Vendedor: SHEIN",
    link: "https://images.unsplash.com/photo-1585145197082-dba095ba01ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=702&q=80",
  },
  {
    name: "Jeans Comfy ciclón $700.00 MXN",
    desc: "Pantalones de mezclilla de tiro alto que aplanan el abdomen, levantan los glúteos y moldean tu figura.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Pantalones fruncido $200.00 MXN",
    desc: "Pantalones fruncidos de tela gruesa muy comodos con 4 bolas.",
    seller: "Vendedor: SHEIN",
    link: "https://i.pinimg.com/originals/05/de/16/05de16d0baf68c14f670155a6fefdb78.png",
  },
  {
    name: "Pantalones American Eagle $200.00 MXN",
    desc: "Pantalones American Eagle skinny azul claro de moda comodos.",
    seller: "Vendedor: SHEIN",
    link: "https://ss540.liverpool.com.mx/xl/1069385843_1p.jpg",
  },
  {
    name: "Pantalones Baggy con vuelta en bajo $200.00 MXN",
    desc: "Pantalones vaquero baggy de tiro medio, pernera ancha y cinco bolsillos con una vuelta en el bajo.",
    seller: "Vendedor: SHEIN",
    link: "https://static.lefties.com/9/photos2/2021/I/0/1/p/5414/310/405/5414310405_2_1_5.jpg?t=1626950508807",
  },
  {
    name: "Short That´s It  $490.00 MXN",
    desc: "Short hecho a base de mezclilla color verde obscuro.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://s7d2.scene7.com/is/image/aeo/0338_6209_309_of?$cat-main_large$",
  },
  {
    name: "Short That´s It $390.00 MXN",
    desc: "Short hecho a base de mezclilla color azul claro con 3 botones de metal.",
    seller: "Vendedor: Rock && Roll Store",
    link: "https://catalog.21buttons.com/dd0050a9498bce1dddb499d30032227a6f79abec.smedium.jpg",
  },
];

import ListaProductos from "components/productos/ListaProductos.vue";
export default {
  components: { ListaProductos },
  name: "Pantalones",
  data() {
    return {
      jeans: jeans,
    };
  },
};
</script>
