<template>
  <div class="row">
    <div class="q-pa-md col-md-12 cf-body register">
      <h4 class="text-weight cf-title cc-pri">
        pago
      </h4>
      <q-input
        rounded
        outlined
        v-model="name"
        :rules="[
          (val) => !!val || 'Este campo es requerido',
          (val) => val.length <= 20 || 'Por favor máximo 20 caracteres',
          (val) => val.length >= 5 || 'Por favor mínimo 5 caracteres',
        ]"
        dense
      >
        <p class="title-input text-grey-6">Nombre:</p>
        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="cc-pri" />
        </template>
      </q-input>

      <q-input
        rounded
        outlined
        v-model="lastName"
        class="last-name"
        :rules="[
          (val) => !!val || 'Este campo es requerido',
          (val) => val.length <= 20 || 'Por favor máximo 20 caracteres',
          (val) => val.length >= 5 || 'Por favor mínimo 5 caracteres',
        ]"
        dense
      >
        <p class="title-input text-grey-6">Apellido:</p>
        <template v-slot:prepend>
          <q-icon name="assignment_ind" class="cc-pri" />
        </template>
      </q-input>
      <q-img
        class="img-visa"
        src="https://i.ibb.co/WP7MTyg/visa-mastercard.png"
      ></q-img>
      <q-input
        rounded
        outlined
        v-model="creditCard"
        class="credit-card"
        mask="#### #### #### ####"
        :rules="[
          (val) => !!val || 'Este campo es requerido',
          (val) => val.length == 19 || 'Ingrese un numero de tarjeta valido',
        ]"
        dense
      >
        <p class="title-input text-grey-6">Numero de tarjeta:</p>

        <template v-slot:prepend>
          <q-icon name="credit_card" class="cc-pri"/>
        </template>
      </q-input>

      <div class="date-cvv">
        <q-input
          v-model="date"
          rounded
          outlined
          dense
          mask="##-##-####"
          class="date-input"
          :rules="[
            (val) => !!val || 'Este campo es requerido',
            (val) => val.length == 10 || 'Ingrese una fecha valida',
            validateDate,
          ]"
        >
          <p class="title-input text-grey-6">
            Fecha de vencimiento:
          </p>
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer cc-pri">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date
                  v-model="date"
                  :locale="myLocale"
                  navigation-min-year-month="2021/01"
                  navigation-max-year-month="2026/12"
                  mask="MM-DD-YYYY"
                >
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Aceptar" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <q-input
          rounded
          outlined
          v-model="cvv"
          class="cvv-input"
          mask="###"
          :rules="[
            (val) => !!val || 'Este campo es requerido',
            (val) => val.length == 3 || 'Ingrese un numero de CVV/CVC valido',
          ]"
          dense
        >
          <p class="title-input text-grey-6">CVV/CVC:</p>
          <template v-slot:prepend>
            <q-icon name="credit_card" class="cc-pri" />
          </template>
        </q-input>
      </div>

      <q-btn
        rounded
        class="full-width btn-register"
        label="Guardar tarjeta"
        color="cc-pri"
        @click="continuar()"
      />
    </div>
    <div class="q-pa-sm col-sm-4 img">
      <q-img
        src="https://i.ibb.co/KxyvC9Q/tarjeta.png"
        style="margin-top: 40px"
      >
      </q-img>
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
      date: "01-01-2021",
      cvv: "",

      myLocale: {
        days: "Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),
        daysShort: "Dom_Lun_Mar_Mié_Jue_Vie_Sáb".split("_"),
        months:
          "Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split(
            "_"
          ),
        monthsShort: "Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic".split(
          "_"
        ),
        firstDayOfWeek: 1,
      },
    };
  },

  methods: {
    validateDate() {
      let date = this.date.split("-");
      if (
        date[0] < "01" ||
        date[0] > "12" ||
        date[1] < "01" ||
        date[1] > "31" ||
        date[2] < "2021" ||
        date[2] > "2026"
      ) {
        return "Ingrese una fecha valida";
      }
    },
    continuar() {
      if(this.name.length < 5 || this.lastName.length < 5
      || this.creditCard.length < 19 || this.cvv.length < 3){
          this.$q.notify({
        message: "Todos los campos son obligatorios.",
        icon: "error",
        type: "negative"
      });
      }else{
      this.$q.notify({
        message: "Tarjeta guardada correctamente.",
        icon: "check_circle",
        type: "positive"
      });
      this.$router.push('/checkout')
      }

    }
  },
};
</script>

<style lang="sass" scoped>
@import "src/css/style.gl.scss"
</style>
