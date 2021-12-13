<template>
  <div class="q-ma-xl cf-body cc-pri">
    <h4 class="q-ma-none q-mb-xl cf-title">
      Detalle del producto
    </h4>
    <div class="row q-mt-md q-mb-md">
      <div class="col-xs-12 col-sm-6 col-md-5 q-mb-md q-pl-md q-pr-md ">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          style="max-width:450px"
          height="550px"
          class="rounded-borders"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://images.unsplash.com/photo-1572804013427-4d7ca7268217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=446&q=80"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://images.unsplash.com/photo-1572804013854-26c537be296e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          />
        </q-carousel>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-7">
        <div class="row  q-mb-sm cc-pri">
          <div class="col-xs-12 col-sm-6 col-md-11 text-h4 text-weight-bold">
            Vestido naranja flores escote v
          </div>
          <div class="col-xs-12 col-sm-6 col-md-1 text-h4">
            <q-btn outline round color="cc-pri" icon="favorite_border" />
          </div>
        </div>
        <h5 class="q-ma-none  q-mb-md">
          Andrei Panfiloiu beauty
        </h5>
        <div class="row  q-mb-md items-end text-weight-bold">
          <div class="col-xs-12 col-sm-6 col-md-3 text-h2">
            $560
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 text-h4">MXN</div>
        </div>
        <h5 class="q-ma-none text-grey-6">
          En 12x $49.99 MXN
        </h5>
        <h5 class="q-ma-none text-grey-6 q-mb-md">
          IVA incluido
        </h5>
        <h6 class="q-ma-none text-grey-6 text-weight-bold">
          Stock disponible: 10
        </h6>
        <div class="q-ma-none text-grey-6 q-mb-md text-body1">
          Puedes comprar hasta 5 unidades
        </div>
        <div class="row  q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-12 cc-pri text-body1 q-mb-md">
            <q-icon size="31px" color="cc-pri" name="local_shipping" />
            Llega el lunes 18 por $99 MXN
          </div>
        </div>
        <q-select
          ref="size"
          class="q-mb-md"
          rounded
          dense
          color="indigo"
          label-color="indigo"
          outlined
          v-model="modelSize"
          :options="size"
          :rules="[val => !!val || 'Talla requerida']"
          label="Selecciona una talla ..."
        />
        <q-select
          ref="color"
          rounded
          dense
          color="indigo"
          label-color="indigo"
          outlined
          v-model="modelColor"
          :options="color"
          :rules="[val => !!val || 'Color requerido']"
          label="Selecciona el color ..."
        />
        <div class="row justify-center q-mt-lg">
          <div class="col-12 col-md-auto">
            <q-btn
              rounded
              outline
              type="reset"
              color="cc-pri"
              icon-right="shopping_cart"
              label="Añadir al carrito"
              @click="submit"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xs-12 col-sm-6 col-md-5 q-pl-md q-pr-md q-mb-md text-grey-6"
      >
        <h6 class="q-ma-none text-weight-bold">
          Descripción del producto
        </h6>
        <div class="text-body1 text-justify">
          Vestido naranja flores escote v.
        </div>
        <div class="text-body1 text-justify">
          Tallas disponibles (CH, M, G, XG).
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-7 text-body1">
        <div class="row  q-mb-sm justify-between">
          <div class="col-xs-12 col-sm-6 col-md-auto text-weight-bold">
            Calificación
          </div>
          <div class="col-xs-12 col-sm-6 col-md-auto">
            <q-icon color="cc-pri" name="star_border" />
            Sumas 15 puntos
          </div>
        </div>
        <div class="row justify-between">
          <div class="col-xs-12 q-mb-md col-sm-6 col-md-auto text-weight-bold">
            <q-rating
              color="primary"
              :max="5"
              size="32px"
              v-model="stars"
            ></q-rating>
          </div>
          <div class="col-xs-12 q-mb-md col-sm-6 col-md-auto">
            <q-btn
              rounded
              outline
              color="cc-pri"
              icon-right="chat"
              label="Chat del vendedor"
              @click="seamless=!seamless"
            />
          </div>
        </div>
      </div>
    </div>
    <ChatC :seamless="seamless"/>
  </div>
</template>
<script>
import ChatC from "src/components/chat/ChatC.vue";
export default {
  name: "Detalles",
  components: {
    ChatC
  },
  data() {
    return {
      slide: 1,
      seamless: false,
      stars: 3,
      modelSize: null,
      modelColor: null,
      size: ["CH", "M", "G", "XG"],
      color: ["Naranja", "Rojo", "Amarillo"]
    };
  },
  methods: {
    reset() {
      this.$refs.size.resetValidation();
      this.$refs.color.resetValidation();
    },
    submit() {
      this.$refs.size.validate();
      this.$refs.color.validate();

      if (this.$refs.size.hasError || this.$refs.color.hasError) {
        this.$q.notify({
          message: "Por favor, escoge una talla y color.",
          icon: "error",
          type: "negative"
        });
      } else {
        this.$q.notify({
          message: "Agregado al carrito correctamente.",
          icon: "check_circle",
          type: "positive"
        });
      }
    }
  }
};
</script>
