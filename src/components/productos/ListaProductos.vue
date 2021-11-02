<template>
  <div>
    <h4 class="text-weight-bold cf-title cc-pri title">
      {{ title }}
    </h4>
    <div class="col-12 col-sm-6 cf-body">
      <div class="row contain">
        <div v-for="value in data" :key="value.title">
          <q-card class="card">
            <q-img
              v-bind:src="value.link"
              style="max-width: 300px; max-height: 300px"
            >
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
              <div
                class="text-weight-bolder text-h6 cc-sec"
                style="font-size: 18px"
              >
                Descripción:
              </div>
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
.card
  width: 100%
  max-width: 300px
  height: 420px
  margin-top: 20px
  margin-left: 2.5vw

.button-cart
  position: absolute
  top: 10px
  right: 0

.title
  margin: auto
  margin-left: 2vw
  margin-top: 40px

@media only screen and (max-width: 1000px)
  .contain
    display: flex
    flex-wrap: wrap
    justify-content: center

  .title
    text-align: center
</style>
