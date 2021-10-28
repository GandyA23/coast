<template>
  <div class="q-ma-xl">
    <h3 class="q-ma-none q-mb-xl" style="color:#145DA0">
      Detalle del producto
    </h3>
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
        <div class="row  q-mb-sm" style="color: #145DA0">
          <div class="col-xs-12 col-sm-6 col-md-11 text-h4 text-weight-bold">
            Vestido naranja flores escote v
          </div>
          <div class="col-xs-12 col-sm-6 col-md-1 text-h4">
            <q-btn outline round color="primary" icon="favorite_border" />
          </div>
        </div>
        <h5 class="q-ma-none  q-mb-md" style="color: #145DA0">
          Andrei Panfiloiu beauty
        </h5>
        <div
          class="row  q-mb-md items-end text-weight-bold"
          style="color: #145DA0"
        >
          <div class="col-xs-12 col-sm-6 col-md-3 text-h2">
            $560
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 text-h4">MXN</div>
        </div>
        <h5 class="q-ma-none" style="color: #868990">
          En 12x $49.99 MXN
        </h5>
        <h5 class="q-ma-none  q-mb-md" style="color: #868990">
          IVA incluido
        </h5>
        <h6 class="q-ma-none  text-weight-bold" style="color: #868990">
          Stock disponible: 10
        </h6>
        <div class="q-ma-none  q-mb-md text-body1" style="color: #868990">
          Puedes comprar hasta 5 unidades
        </div>
        <div class="row  q-mb-md">
          <div
            class="col-xs-12 col-sm-6 col-md-12 text-body1 q-mb-md"
            style="color: #145DA0"
          >
            <q-icon size="31px" color="indigo" name="local_shipping" />
            Llega el lunes 18 por $99 MXN
          </div>
        </div>
        <q-select
          class="q-mb-md"
          rounded
          dense
          color="indigo"
          label-color="indigo"
          outlined
          v-model="modelSize"
          :options="size"
          label="Selecciona una talla ..."
        />
        <q-select
          rounded
          dense
          color="indigo"
          label-color="indigo"
          outlined
          v-model="modelColor"
          :options="color"
          label="Selecciona el color ..."
        />
        <div class="row justify-center q-mt-lg">
          <div class="col-12 col-md-auto">
            <q-btn
              rounded
              outline
              color="indigo"
              icon-right="shopping_cart"
              label="Añadir al carrito"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-6 col-md-5 q-pl-md q-pr-md q-mb-md">
        <h6 class="q-ma-none text-weight-bold" style="color: #868990">
          Descripción del producto
        </h6>
        <div class="text-body1 text-justify" style="color:#575B64">
          Vestido naranja flores escote v.
        </div>
        <div class="text-body1 text-justify" style="color:#575B64">
         Tallas disponibles (CH, M, G, XG).
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-7 text-body1">
        <div class="row  q-mb-sm justify-between" style="color: #145DA0">
          <div class="col-xs-12 col-sm-6 col-md-auto text-weight-bold">
            Calificación
          </div>
          <div class="col-xs-12 col-sm-6 col-md-auto">
            <q-icon color="primary" name="star_border" />
            Sumas 15 puntos
          </div>
        </div>
        <div class="row justify-between" style="color: #145DA0">
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
              color="indigo"
              icon-right="chat"
              label="Chat del vendedor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Detalles",
  data() {
    return {
      slide: 1,
      stars: 3,
      modelSize: null,
      modelColor: null,
      size: ["CH", "M", "G", "XG"],
      color: ["Naranja", "Rojo", "Amarillo"]
    };
  }
};
</script>
