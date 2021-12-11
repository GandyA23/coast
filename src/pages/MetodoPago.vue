<template>
  <div class="row">
    <div class="q-pa-md col-md-12 register">
      <h4 class="text-weight-bold cf-title cc-pri" style="margin-left:10px">pago</h4>
      <q-input rounded outlined v-model="name" bg-color="white" dense>
        <p class="title-input">Nombre:</p>
        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="color-icon" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="lastName"
        style="padding-top: 50px"
        bg-color="white"
        dense
      >
        <p class="title-input">Apellido:</p>
        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="color-icon" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="creditCard"
        style="padding-top: 50px"
        bg-color="white"
        dense
      >
        <q-img
          style="max-width: 100px; position absoulte; top: -40px"
          src="https://i.ibb.co/WP7MTyg/visa-mastercard.png"
        ></q-img>
        <p class="title-input">Numero de tarjeta:</p>

        <template v-slot:prepend>
          <q-icon name="email" class="color-icon" />
        </template>
      </q-input>

      <div class="date-cvv">
        <q-input
          rounded
          outlined
          v-model="date"
          style="padding-top: 20px; width: 55%"
          bg-color="white"
          clear-icon="native_date"
          dense
        >
          <p class="title-input" style="width: 200px">Fecha de vencimiento:</p>
          <template v-slot:prepend>
            <q-icon name="date_range" class="color-icon" />
          </template>
        </q-input>

        <q-input
          rounded
          outlined
          v-model="cvv"
          style="padding-top: 20px; width: 40%"
          bg-color="white"
          dense
        >
          <p class="title-input">CVV/CVC:</p>
          <template v-slot:prepend>
            <q-icon name="credit_card" class="color-icon" />
          </template>
        </q-input>
      </div>

      <q-btn
        rounded
        class="full-width"
        style="margin-top: 20px; background-color: #145da0; color: white"
        text-color="#0C2D48"
        label="Guardar tarjeta"
      />
    </div>
    <div class="q-pa-sm col-sm-4 img" >
      <q-img src="https://i.ibb.co/KxyvC9Q/tarjeta.png" style="margin-top:40px"> </q-img>
    </div>
  </div>
</template>

<script>
export default {
  name: "Payment",

  data() {
    return {
      name: "",
      lastName: "",
      creditCard: "",
      date: "",
      cvv: "",
    };
  },
};
</script>

<style lang="sass" scoped>

.title-input
  position: absolute
  color: black
  top: -20px
  left: -30px

.date-cvv
  display: flex
  justify-content: space-between
  padding-top: 30px

.color-icon
  color: #145DA0

.title
  display: flex
  justify-content: center
  color: white
  margin: 0
  margin-bottom: 15px

.btn-register
  display: flex
  justify-content: center
  color: white
  margin-top: 20px
  color: #0C2D48

.register
  width: 100%
  max-width: 500px
  border-radius: 30px
  margin: auto
  margin-top: -30px

.img
  width: 100%
  margin: auto
  max-width: 450px
</style>
