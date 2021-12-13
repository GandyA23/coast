<template>
  <div>
    <h4 class="text-weight cf-title cc-pri title-product">
      {{ title }}
    </h4>
    <div class="col-sm-6 cf-body">
      <div class="row contain">
        <div v-for="value in data" :key="value.title">
          <q-card class="card">
            <q-img v-bind:src="value.link" class="img-product">
              <div class="absolute-bottom">
                <div class="text-weight-bold text-h6">{{ value.name }}</div>
                <div class="text-subtitle2">{{ value.seller }}</div>
              </div>
            </q-img>

            <div class="button-cart">
              <q-btn
                class="cc-pri"
                round
                flat
                icon="add_shopping_cart"
                to="/detalles"
              >
              </q-btn>
            </div>

            <q-card-section>
              <div class="text-weight-bolder text-h6 cc-sec">Descripción:</div>
              <div class="q-pt-none">
                {{ value.desc }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListaProductos",
  props: {
    data: Array,
    title: String,
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/style.gl.scss"
</style>
