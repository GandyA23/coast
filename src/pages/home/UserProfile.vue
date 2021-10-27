<template>
  <div class="q-ma-xl">
    <h3 class="q-ma-none q-mb-xl" style="color:#145DA0">Perfil de usuario</h3>
    <div class="row q-mt-md q-mb-md">
      <div class="col-xs-12 col-sm-6 col-md-2 flex flex-center">
        <q-avatar size="12rem" class="q-mb-md">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
          />
        </q-avatar>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-10">
        <h4
          class="q-ma-none q-ml-lg q-mb-sm text-weight-bold"
          style="color: #0C2D48"
        >
          Sarah Vásquez
        </h4>
        <div>
          <div class="row q-ml-lg">
            <div class="col-xs-12 col-sm-6 col-md-2 text-grey-5">
              <q-icon size="15px" color="grey-5" name="calendar_today" />
              10/28/92
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4 text-grey-5">
              <q-icon size="15px" color="grey-5" name="room" />
              6391 Elkin St. Celina, Delaware 10299
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 text-grey-5">
              <q-icon size="15px" color="grey-5" name="call" />
              (684) 555-0102
            </div>
          </div>
        </div>
        <h5
          class="text-weight-bold q-ma-none q-mt-sm q-ml-lg"
          style="color: #145DA0"
        >
          Cliente de nivel Platino
        </h5>
        <p
          class="text-subtitle2 q-ml-lg q-mt-md q-mb-none"
          style="color:#B1B7C6"
        >
          Referencias del domicilio
        </p>
        <p class="text-body2 text-justify q-ml-lg" style="color:#575B64">
          Elkin St. Celina, Delaware 10299. Rumbo al centro de la ciudad, cerca
          de un quiosco, enfrente de un muro con una pintura colorida,. Casa
          blanca de dos pisos con un pequeño balcón con jardinera, puerta verde
          y un portón de rejillas con enredaderas. Número exterior 10299 con
          código postal 6391. Busón para correos visible en el portón.
          Cuernavaca, Morelos.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  data() {
    return {
      items: [
        {
          icon: "Nivel Bronce",
          description: "10/28/92"
        },
        {
          icon: "Nivel Bronce",
          description: "6391 Elkin St. Celina, Delaware 10299"
        },
        {
          icon: "Nivel Bronce",
          description: "Tener una cuenta registrada en COAST"
        }
      ]
    };
  },
  methods: {}
};
</script>
