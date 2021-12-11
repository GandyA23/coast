<template>
    <div class="q-ma-xl cf-body cc-pri">
        <h4 class="q-ma-none q-mb-lg cf-title">Stepper</h4>
        <div class="q-pa-md">
            <q-stepper v-model="step" ref="stepper" animated done-color="cc-sec" active-color="indigo-10" inactive-color="gray">
                <q-step :name="1" title="Proveedor" :done="step > 1">
                    <div class="col-xs-12 col-sm-6 col-md-6 q-mt-md column content-center">
                        <h4 class="q-ma-none q-mb-lg cf-body">Ingresa los datos del proveedor</h4>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-12">
                        <div class="row q-ml-mb justify-center">
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md">
                                <p class=" text-body1">Dirección:</p>
                                <q-input rounded outlined dense >

                                </q-input>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md ">
                                <p class=" text-body1">Empresa:</p>
                                <q-input rounded outlined dense>
                                </q-input>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md">
                                <p class="text-body1">Responsable:</p>
                                <q-input rounded outlined dense>
                                </q-input>
                            </div>
                        </div>
                        <div class="row q-ml-mb justify-center">
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md">
                                <p class=" text-body1">Código postal:</p>
                                <q-input rounded outlined dense>

                                </q-input>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md ">
                                <p class=" text-body1">Email:</p>
                                <q-input rounded outlined dense>
                                </q-input>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md">
                                <p class="text-body1">Teléfono:</p>
                                <q-input rounded outlined dense>
                                </q-input>
                            </div>
                        </div>
                    </div>

                </q-step>

                <q-step :name="2" title="Ropa" icon="checkroom" :done="step > 2">
                    <div class="col-xs-12 col-sm-6 col-md-6 q-mt-md column content-center">
                        <h4 class="q-ma-none q-mb-lg cf-body">Tipos de Ropa</h4>
                    </div>
                    <div class="row q-ml-mb q-mb-sm">
                        <div class="col-xs-12 col-sm-6 col-md-6 q-mt-sm column content-center" v-for="(item, index) in items" :key="index">
                            <!-- :color="item.color" -->
                            <div>
                                <q-btn size="85px" outline round text-color="indigo" :icon="item.icon" />
                            </div>
                        </div>
                    </div>

                </q-step>

                <q-step :name="3" title="Forma de Pago" icon="paid">
                    <div class="col-xs-12 col-sm-6 col-md-6 q-mt-md column content-center">
                        <h4 class="q-ma-none q-mb-lg cf-body">Datos de forma de pago</h4>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-12">
                        <div class="row q-ml-mb justify-center">
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md">
                                <p class=" text-body1">Número de tarjeta:</p>
                                <q-input rounded outlined dense>

                                </q-input>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md ">
                                <p class=" text-body1">Banco:</p>
                                <q-input rounded outlined dense>
                                </q-input>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md">
                                <p class="text-body1">Clave interbancaria:</p>
                                <q-input rounded outlined dense>
                                </q-input>
                            </div>
                        </div>
                        <div class="row q-ml-mb justify-center">
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md">
                                <p class=" text-body1">CVV:</p>
                                <q-input rounded outlined dense>

                                </q-input>
                            </div>
                            <div class="col-xs-12 col-sm-6 col-md-3 q-mr-lg q-mb-md ">
                                <p class=" text-body1">Titular:</p>
                                <q-input rounded outlined dense>
                                </q-input>
                            </div>

                        </div>

                    </div>


                </q-step>

                <template v-slot:navigation>
                  <div class="col column content-center q-pb-xl">
                                <q-stepper-navigation >
                                  <q-btn rounded @click="$refs.stepper.next()" color="cc-sec" :label="step === 3 ? 'Finalizar' : 'Continuar'" />
                                  <q-btn rounded outline v-if="step > 1"  color="cc-sec" @click="$refs.stepper.previous()" label="Volver" class="q-ml-sm" />
                                </q-stepper-navigation>
                            </div>
                </template>
    </q-stepper>
  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 1,
            name: "",
            items: [{
                    icon: "male",
                    color: "info"
                },
                {
                    icon: "female",
                    color: "deep-purple-14"
                },


            ],
        }
    }
}
</script>
