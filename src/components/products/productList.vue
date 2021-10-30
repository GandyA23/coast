<template>
  <div>
    <h3>{{title}}</h3>
    <div class="row col-12 col-sm-6">
      <q-card class="card" v-for="value in data" :key="value.title">
        <q-img :src="value.link" style="max-width: 300px; max-height: 300px">
          <div class="absolute-bottom">
            <div class="text-h6">{{ value.name }}</div>
            <div class="text-subtitle2">{{ value.seller }}</div>
          </div>
        </q-img>

        <div class="button-cart">
          <q-btn color="blue" round flat icon="add_shopping_cart">
            <q-menu cover auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>Añadir al carrito</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>

        <q-card-section>
          <div class="text-h6">
            Descripción:
          </div>
          <div class="q-pt-none">
            {{ value.desc }}
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "productList",
  props: {
    data: Array,
    title: String
  },
};
</script>

<style lang="sass" scoped>
.card
  width: 100%
  height: 100%
  max-width: 300px
  height: 420px
  margin: auto
  margin-top: 20px

.button-cart
  position: absolute
  top: 10px
  right: 0
</style>
