<template>
    <div class="q-ma-xl cf-body cc-pri">
        <h4 class="q-ma-none q-mb-lg cf-title">Checkout</h4>
        <div class="row q-mt-md q-mb-md">
            <div class="col-xs-12 col-sm-6 col-md-6">
              <div class="row">
                <!--Tarjeta-->
                <q-input
                  rounded
                  outlined
                  v-model="target"
                  mask="#### #### #### ####"
                  class="q-mt-lg col-xs-12 col-sm-6 col-md-5"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido',
                    (val) => val.length > 18 || 'Por favor, ingresa los 16 dígitos'
                  ]"
                  dense
                >
                  <p class="title-input text-grey-6">Tarjeta</p>
                  <template v-slot:prepend>
                    <q-icon name="credit_card" class="cc-pri" />
                  </template>
                </q-input>

                <!--Fecha-->
                <q-input
                  rounded
                  outlined
                  v-model="date"
                  mask="date"
                  :rules="['date']"
                  dense
                  class="q-mt-lg offset-sm-1 offset-md-1 col-xs-12 col-sm-6 col-md-3 cursor-pointer"
                >
                  <p class="q-ml-lg title-input text-grey-6">Fecha</p>
                  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                    <q-date v-model="date">
                      <div class="row items-center justify-end">
                        <q-btn v-close-popup label="Close" color="primary" flat />
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-input>

                <!--CVV-->
                <q-input
                  rounded
                  outlined
                  v-model="cvv"
                  mask="###"
                  class="q-mt-lg offset-sm-1 offset-md-1 col-xs-12 col-sm-6 col-md-2"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido',
                    (val) => val.length > 2 || 'Por favor, ingresa los 3 dígitos'
                  ]"
                  dense
                >
                  <p class="q-ml-lg title-input text-grey-6">CVV</p>
                </q-input>
              </div>

              <div class="row">
                <!--Dirección-->
                <q-input
                  rounded
                  outlined
                  v-model="direction"
                  class="q-mt-lg col-xs-12 col-sm-12 col-md-12"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido'
                  ]"
                  dense
                >
                  <p class="title-input text-grey-6">Dirección</p>
                  <template v-slot:prepend>
                    <q-icon name="home" class="cc-pri" />
                  </template>
                </q-input>
              </div>

              <div class="row">
                <!--Código Postal-->
                <q-input
                  rounded
                  outlined
                  v-model="zip"
                  class="q-mt-lg col-xs-12 col-sm-3 col-md-3"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido'
                  ]"
                  dense
                >
                  <p class="title-input text-grey-6">Código Postal</p>
                  <template v-slot:prepend>
                    <q-icon name="map" class="cc-pri" />
                  </template>
                </q-input>

                <!--Estado-->
                <q-input
                  rounded
                  outlined
                  v-model="state"
                  class="q-mt-lg offset-sm-1 offset-md-1 col-xs-12 col-sm-4 col-md-4"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido'
                  ]"
                  dense
                >
                  <p class="title-input text-grey-6">Estado</p>
                  <template v-slot:prepend>
                    <q-icon name="where_to_vote" class="cc-pri" />
                  </template>
                </q-input>

                <!--Ciudad-->
                <q-input
                  rounded
                  outlined
                  v-model="city"
                  class="q-mt-lg offset-sm-1 offset-md-1 col-xs-12 col-sm-3 col-md-3"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido'
                  ]"
                  dense
                >
                  <p class="title-input text-grey-6">Ciudad</p>
                  <template v-slot:prepend>
                    <q-icon name="location_city" class="cc-pri" />
                  </template>
                </q-input>
              </div>

              <div class="row">
                <!--Código de descuento-->
                <q-input
                  rounded
                  outlined
                  v-model="coupon"
                  class="q-mt-lg col-xs-12 col-sm-6 col-md-6"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido'
                  ]"
                  dense
                >
                  <p class="title-input text-grey-6">Código de descuento</p>
                  <template v-slot:prepend>
                    <q-icon name="account_balance_wallet" class="cc-pri" />
                  </template>
                </q-input>

                <!--Total-->
                <q-input
                  rounded
                  outlined
                  v-model="total"
                  mask="#.##"
                  reverse-fill-mask
                  class="q-mt-lg offset-sm-1 offset-md-1 col-xs-12 col-sm-5 col-md-5"
                  :rules="[
                    (val) => !!val || 'Este campo es requerido'
                  ]"
                  dense
                >
                  <p class="title-input text-grey-6">Total</p>
                  <template v-slot:prepend>
                    <q-icon name="attach_money" class="cc-pri" />
                  </template>
                </q-input>
              </div>

              <div class="row">
                <q-btn rounded color="cc-pri" text-color="white" label="Completar compra" class="q-mt-lg q-mb-lg full-width" />
              </div>
            </div>
            <div class="offset-md-1 col-xs-12 col-sm-6 col-md-5">
                <div class="register q-pa-lg">
                  <div v-for="(items,i) in products" :key="i">
                    <div class="row q-mb-md">
                      <div class="col-xs-12 col-sm-6 col-md-4 q-pa-sm">
                          <q-img :src="items.image" class="rounded-borders">
                          </q-img>
                      </div>
                      <div class="col-xs-12 col-sm-6 col-md-8">
                          <div class="row items-center">
                              <div class="col-xs-12 col-sm-6 col-md-11 text-h5 " color="indigo">
                                  {{items.name}}
                              </div>
                          </div>
                          <div class="text-body1" color="indigo">{{items.price}}</div>
                          <div class="row">
                              <div class="col-xs-12 col-sm-6 col-md-3 text-grey-6 text-weight-bold">
                                  Art. núm:
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-4 cf-body">{{items.nart}}</div>
                              <div class="col-xs-12 col-sm-6 col-md-2 text-grey-6 text-weight-bold">
                                  Talla:
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-3 cf-body">{{items.size}}</div>
                          </div>
                          <div class="row">
                              <div class="col-xs-12 col-sm-6 col-md-3 text-grey-6 text-weight-bold">
                                  Color:
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-4 cf-body">{{items.color}}</div>
                              <div class="col-xs-12 col-sm-6 col-md-2 text-grey-6 text-weight-bold">
                                  Total:
                              </div>
                              <div class="col-xs-12 col-sm-6 col-md-3 cf-body">{{items.total}}</div>
                              <q-input min="0" mask="#" reverse-fill-mask disabled rounded outlined v-model="cantidad" type="number" class="q-pt-md" label="Cantidad" dense />
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import "src/css/style.gl.scss"

.register
  max-width: 430px
  min-height: 529px
  border-radius: 20px
  margin-top: 1px
  border: 4px solid $cc-pri
  margin-left: auto
</style>


<script>
export default {
    name: "ShoppingCart",
    data() {
        return {
          target: '',
          date: '',
          cvv: '',
          direction: '',
          zip: '',
          state: '',
          city: '',
          coupon: '',
          total: '',
          cantidad: 1,
          products: [{
              name: "Sweater blanco básico",
              price: "$560 MXN",
              nart: "00000001",
              size: "M",
              color: "Blanco",
              total: "560.00",
              image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixid= MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8 & ixlib = rb - 1.2 .1 & auto = format & fit = crop & w = 772 & q = 80 "
          }, {
              name: "T-shirt blanca frase",
              price: "$285 MXN",
              nart: "00000002",
              size: "M",
              color: "Blanco",
              total: "285.00",
              image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
          }]
        }
    }
};
</script>

