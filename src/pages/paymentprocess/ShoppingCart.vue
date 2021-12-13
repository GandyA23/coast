<template>
    <div class="q-ma-xl cf-body cc-pri">
        <h4 class="q-ma-none q-mb-lg cf-title">Shopping Cart</h4>
        <div class="text-body1">
            Envío gratis a partir de $899
        </div>
        <div class="row q-mt-md q-mb-md">
            <div class="col-xs-12 col-sm-6 col-md-7">

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
                                <div class="col-xs-12 col-sm-6 col-md-1 ">
                                    <q-btn flat round class="txt-cc-pri" icon="delete" size="13px" />
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
                                <q-input min="0" rounded outlined v-model="cantidad" type="number" label-color="indigo" color="indigo" class="q-pt-md" label="Cantidad" dense />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-5">
                <div class="register q-pa-lg">
                    <div class="row q-ml-mb text-body1 q-mb-md ">
                        <div class="text-weight-bold col-xs-12 col-sm-6 col-md-7">Descuento</div>
                        <div class="text-weight col-xs-12 col-sm-6 col-md-5">Elegir descuento</div>
                    </div>
                    <q-separator color="indigo" />
                    <div class="row q-ml-mb text-body1 q-pt-lg">
                        <div class="col-xs-12 col-sm-6 col-md-10 text-weight-bold">
                            Valor del pedido
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-2 text-grey-6">$458.00</div>
                    </div>
                    <div class="row q-pt-md text-body1 q-mb-md">
                        <div class="col-xs-12 col-sm-6 col-md-10 text-weight-bold">Envío</div>
                        <div class="col-xs-12 col-sm-6 col-md-2 text-grey-6">$99.00</div>
                    </div>
                    <q-separator color="indigo" />
                    <div class="row q-pt-lg text-body1 q-mb-md">
                        <div class="col-xs-12 col-sm-6 col-md-10 text-weight-bold">Total</div>
                        <div class="col-xs-12 col-sm-6 col-md-2 text-weight-bold">$557.00</div>
                    </div>
                    <q-btn rounded color="cc-pri" text-color="white" label="Continuar con la compra" class="full-width" />
                    <div class="q-pt-lg text-body1 text-weight-bold">
                        Aceptamos
                    </div>
                    <div class="row items-center">
                        <div v-for="(items,i) in cards" :key="i">
                            <div class="col-xs-12 col-sm-6 col-md-4 q-ma-sm">
                                <q-img :src="items.image" width="60px"></q-img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="sass" scoped>

.register
  max-width: 430px
  min-height: 529px
  border-radius: 20px
  margin-top: 1px
  border: 4px solid $cc-pri
  margin-left: auto


.btn-register
  display: flex
  justify-content: center
  color: $cc-pri
  margin-top: 20px
  color: #0C2D48
</style>


<script>
export default {
    name: "ShoppingCart",
    data() {
        return {
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
            }],
            cards: [{
                image: "https://cdn-icons-png.flaticon.com/512/349/349221.png"
            },{
               image:"https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            },

            {
                image: "https://cdn-icons-png.flaticon.com/512/196/196565.png"

            }]
        };
    },
    methods: {

    }
};
</script>

