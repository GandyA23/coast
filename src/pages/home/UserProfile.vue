<template>
  <div class="q-ma-xl cf-body cc-pri">
    <h4 class="q-ma-none q-mb-xl cf-title">Perfil de usuario</h4>
    <div class="row q-mt-md q-mb-md">
      <div class="col-xs-12 col-sm-6 col-md-3 flex flex-center">
        <q-avatar size="12rem" class="q-mb-md">
          <img
            src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
          />
        </q-avatar>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-9">
        <h4 class="q-ma-none q-ml-mb q-mb-sm text-weight-bold cc-sec">
          Sarah Vásquez
        </h4>
        <div>
          <div class="row q-ml-mb">
            <div class="col-xs-12 col-sm-6 col-md-2 text-grey-5">
              <q-icon size="15px" color="grey-5" name="calendar_today" />
              10/28/92
            </div>
            <div class="col-xs-12 col-sm-6 col-md-5 text-grey-5">
              <q-icon size="15px" color="grey-5" name="room" />
              6391 Elkin St. Celina, Delaware 10299
            </div>
            <div class="col-xs-12 col-sm-6 col-md-2 text-grey-5">
              <q-icon size="15px" color="grey-5" name="call" />
              (684) 555-0102
            </div>
          </div>
        </div>
        <h5 class="text-weight-bold q-ma-none q-mt-sm q-ml-mb">
          Cliente de nivel Platino
        </h5>
        <p class="text-subtitle2 q-ml-mb q-mt-sm q-mb-none text-grey-5">
          Referencias del domicilio
        </p>
        <p class="text-body2 text-justify q-ml-mb text-grey-9">
          Elkin St. Celina, Delaware 10299. Rumbo al centro de la ciudad, cerca
          de un quiosco, enfrente de un muro con una pintura colorida. Casa
          blanca de dos pisos con un pequeño balcón con jardinera, puerta verde
          y un portón de rejillas con enredaderas. Número exterior 10299 con
          código postal 6391. Busón para correos visible en el portón.
          Cuernavaca, Morelos.
        </p>
      </div>
    </div>
    <q-separator />
    <div>
      <div class="row q-ml-mb q-mb-md text-grey-5 ">
        <div
          class="col-xs-12 col-sm-6 col-md-3 q-mt-md column content-center"
          v-for="(item, index) in items"
          :key="index"
        >
          <div>
            <q-avatar
              :color="item.color"
              size="lg"
              text-color="white"
              :icon="item.icon"
            />
            <b class="q-ml-sm text-subtitle1">{{ item.description }}</b>
          </div>
        </div>
      </div>
    </div>
    <q-separator />
    <div class="row justify-center q-mt-lg">
      <div class="col-12 col-md-auto">
        <q-btn
          rounded
          outline
          color="indigo"
          icon-right="edit"
          label="Editar perfil"
        />
      </div>
    </div>
    <h4 class="text-weight-bold cc-sec q-mt-sm">
      Productos favoritos
    </h4>
    <div class="row justify-between">
      <q-list v-for="(item, index) in cards" :key="index">
        <q-card class="my-card q-mb-md" style="width: 300px">
          <q-img v-bind:src="item.img">
            <div class="absolute-bottom">
              <div class="text-h6">{{ item.title }}</div>
              <div class="text-subtitle">{{ item.seller }}</div>
            </div>
          </q-img>
          <q-card-section>
            <div class="text-h6 text-weight-bold cc-sec">Calificación dada</div>
          </q-card-section>
          <q-card-section class="q-pt-none" style="color:#2E8BC0">
            <q-rating
              color="primary"
              :max="5"
              size="32px"
              :value="item.stars"
            ></q-rating>
          </q-card-section>
        </q-card>
      </q-list>
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
          icon: "perm_identity",
          description: "Sara_vel21",
          color: "info"
        },
        {
          icon: "mail_outline",
          description: "svas@gmail.com",
          color: "deep-purple-14"
        },
        {
          icon: "star_outline",
          description: "Nivel Platino",
          color: "red-5"
        },
        {
          icon: "favorite_border",
          description: "Guardados: 10",
          color: "purple-11"
        }
      ],
      cards: [
        {
          title: "Blusa negra Talla CH",
          seller: "Vendedor: Rock && Roll Store",
          stars: 3,
          img:
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
          title: "Conjunto otoño Talla M",
          seller: "Vendedor:  Romina West",
          stars: 4,
          img:
            "https://images.unsplash.com/photo-1613891737415-be7670d21c19?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
        },
        {
          title: "Conjunto rosa Talla M",
          seller: "Vendedor:  Alex Miray",
          stars: 5,
          img:
            "https://images.unsplash.com/photo-1594750863984-8be99377ce41?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=869&q=80"
        }
      ]
    };
  }
};
</script>
