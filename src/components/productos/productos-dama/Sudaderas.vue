<template>
  <div>
    <ListaProductos :data="data" title="Sudaderas / Hooddies" />
  </div>
</template>

<script>
const data = [
  {
    name: "Suéter cuello alto $390.00 MXN",
    desc: "Suéter BCBG Maxazria de corte recto en tejido piqué afelpado.",
    seller: "Vendedor: Acapella",
    link: "https://images.unsplash.com/flagged/photo-1573807195705-614cefe9ba9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Sudadera Conquered $600.00 MXN",
    desc: "Sudadera Conquered Pullover, fabricada a base de las telas más suaves.",
    seller: "Vendedor: Acapella",
    link: "https://images.unsplash.com/photo-1554568218-9a456cea00cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Suéter alto grueso $400.00 MXN",
    desc: "Suéter de cuello alto grueso de color sólido, acogedor casual de tejer.",
    seller: "Vendedor: Dawwoti",
    link: "https://images.unsplash.com/photo-1545552352-6eb1ab0862a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMjg5MzQyfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    name: "Sudadera GAP con capucha $400.00 MXN",
    desc: "Sudadera GAP con capucha y bolsa de color gris de moda.",
    seller: "Vendedor: Nautica",
    link: "https://ss523.liverpool.com.mx/xl/1105459765.jpg",
  },
  {
    name: "Sudadera Nautica clásica $400.00 MXN",
    desc: "Suadadera clásica supersuave 100% de algodón de color rojo y con capucha.",
    seller: "Vendedor: Nautica",
    link: "https://images-na.ssl-images-amazon.com/images/I/81q2bT8fyeL._AC._SR360,460.jpg",
  },
  {
    name: "Sudadera Nautica clásica $400.00 MXN",
    desc: "Suadadera clásica supersuave 100% de algodón de color blanco y con capucha.",
    seller: "Vendedor: Nautica",
    link: "https://images-na.ssl-images-amazon.com/images/I/71utinlMIyL._AC._SR360,460.jpg",
  },
  {
    name: "Suéter de otoño $690.00 MXN",
    desc: "Suéter de otoño para mujer punto de cable de cuello alto, color verde casual cálido.",
    seller: "Vendedor: American Eagle",
    link: "https://images.unsplash.com/photo-1580331451062-99ff652288d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  },
  {
    name: "Suéter cuello redondo $390.00 MXN",
    desc: "Suéter Only Hilde de corte relajado en tejido de punto entretejido con borde inferior ondulado.",
    seller: "Vendedor: American Eagle",
    link: "https://images.unsplash.com/photo-1521567097888-2c5fc40a8660?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
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
