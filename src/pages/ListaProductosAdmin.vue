<template>
  <div class="q-pa-md cf-body q-mb-4">
    <h4 class="text-weight-bold cf-title cc-pri title-product">Lista de productos</h4>
    <q-table
      class="q-mt-md"
      :data="rows"
      :columns="columns"
      :filter="filter"
      row-key="name"
      :pagination.sync="pagination"
      hide-pagination
    >
      <template v-slot:top-right>
        <q-input
          borderless
          dense
          debounce="300"
          v-model="filter"
          placeholder="Buscar"
          outlined
          rounded
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td key="number" :props="props">
            {{ props.row.number }}
          </q-td>
          <q-td key="nombre" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="precio" :props="props">
            {{ props.row.precio }}
          </q-td>

          <q-td key="stock" :props="props">
            {{ props.row.stock }}
          </q-td>

          <q-td key="vendedor" :props="props">
            {{ props.row.vendedor }}
          </q-td>

          <q-td key="accion" :props="props">
            <div class="row justify-evenly">
              <q-btn round color="yellow" icon="edit" size="10px" />
              <q-btn round color="red" icon="delete" size="10px" />
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>

    <div class="row justify-center q-mt-md">
      <q-pagination
        v-model="pagination.page"
        color="grey-8"
        :max="pagesNumber"
        size="sm"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaProductosAdmin",

  data() {
    return {
      filter: "",
      pagination: {
        sortBy: "desc",
        descending: false,
        page: 1,
        rowsPerPage: 5,
        // rowsNumber: xx if getting data from a server
      },

      columns: [
        {
          name: "number",
          align: "left",
          label: "#",
          field: "number",
          sortable: true,
        },
        {
          name: "nombre",
          align: "center",
          label: "Nombre",
          field: "name",
          sortable: true,
        },

        {
          name: "precio",
          align: "center",
          label: "Precio",
          field: "precio",
          sortable: true,
        },

        {
          name: "stock",
          align: "center",
          label: "Stock",
          field: "stock",
          sortable: true,
        },
        {
          name: "vendedor",
          align: "center",
          label: "Vendedor",
          field: "vendedor",
          sortable: true,
        },

        {
          name: "accion",
          label: "Acciones",
          align: "center",
          field: "accion",
          sortable: true,
        },
      ],

      rows: [
        {
          number: 1,
          name: "Pantalones vaqueros",
          precio: "$300",
          stock: 11,
          vendedor: "SHOPSTYLE",
        },
        {
          number: 2,
          name: "Jeans Modone",
          precio: "$220",
          stock: 30,
          vendedor: "Pull&&Bear",
        },
        {
          number: 3,
          name: "Camisa de algodón",
          precio: "$600",
          stock: 20,
          vendedor: "Rock && Roll store",
        },
        {
          number: 4,
          name: "Camisa deportiva",
          precio: "$390",
          stock: 42,
          vendedor: "Pull&&Bear",
        },
        {
          number: 5,
          name: "Camisa gildan",
          precio: "$400",
          stock: 2,
          vendedor: "Pull&&Bear",
        },
        {
          number: 6,
          name: "Gorra Forty",
          precio: "390",
          stock: 55,
          vendedor: "Pull&&Bear",
        },
      ],
    };
  },

  computed: {
    pagesNumber() {
      return Math.ceil(this.rows.length / this.pagination.rowsPerPage);
    },
  },
};
</script>

<style lang="sass" scoped>
@import "../css/style.gl.scss"
</style>
