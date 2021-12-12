<template>
    <div class="cf-body">
      <div class="row">
        <q-img style="height: 350px; max-height: 500px" :ratio="16/9" src="landing/landing-1.png">
          <div style="font-size: 3rem;" class="absolute-full text-center text-bold flex flex-center">
            CONOCE LA NUEVA COLECCIÓN DE OTOÑO
          </div>
        </q-img>
      </div>
      <div class="row justify-center">
        <q-list v-for="(item, index) in items" :key="index">
          <q-card class="my-card q-ma-md" style="max-width: 300px; height: 300px">
            <q-img v-bind:src="item.img">
              <div class="absolute-bottom">
                <div class="text-h6 text-weight-bold">{{ item.title }}</div>
              </div>
            </q-img>
            <q-card-section
              class="cc-sec text-bold"
              >{{ item.description }}
            </q-card-section>
          </q-card>
        </q-list>
    </div>
    </div>
</template>

<script>

export default {
  name: 'Lading',
  data () {
    return {
      items: [
        {
          title: "Ropa de caballero",
          img:
            "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          description:
            "Sección para ropa para caballero, entra y conoce la colleción de otoño."
        },
        {
          title: "Ropa de dama",
          img:
            "landing/landing-card-2.png",
          description:
            "Sección para ropa femenina, entra y conoce la colleción de otoño."
        },
        {
          title: "Sección de planes",
          img:
            "landing/landing-card-3.png",
          description:
            "Aquí podrás encontrar planes de para suscribirte y obtener beneficios exclusivo."
        }
      ]
    }
  }
}
</script>>
