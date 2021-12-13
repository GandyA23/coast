<template>
  <div class="q-ma-xl cf-body cc-pri">
    <h4 class="q-ma-none cf-title">Planes de suscripción</h4>
    <p class="text-subtitle2 q-mt-md q-mb-none text-grey-5">
      Descripción de los planes
    </p>
    <p class="text-body2 text-justify text-grey-9">
      Todo usuario puede acceder a los diferentes artículos de la tienda, como
      mejora a la experiencia del usuario, para poder comprar tus productos
      preferidos deberás realizar una cuenta inicial de Nivel Bronce, a medida
      que acumules puntos en tus compras podrás pasar a Nivel Oro. Habilita el
      Nivel Platino para acceder a descuentos especiales, envíos gratis y
      tiempos de espera más cortos por una suscripción mensual.
    </p>
    <div class="row justify-between">
      <q-list v-for="(item, index) in items" :key="index">
        <q-card class="my-card q-mt-md" style="max-width: 300px">
          <q-img v-bind:src="item.img">
            <div class="absolute-bottom">
              <div class="text-h6 text-weight-bold">{{ item.title }}</div>
              <div class="text-subtitle">{{ item.price }}</div>
            </div>
          </q-img>
          <q-card-section>
            <div class="text-h6 cc-sec text-weight-bold">Beneficios</div>
          </q-card-section>
          <q-card-section
            v-if="item.btn"
            class="q-pt-none q-pb-none cc-thi"
            >{{ item.description }}
          </q-card-section>
          <q-card-section
            v-if="!item.btn"
            class="q-pt-none q-pb-xl cc-thi"
            >{{ item.description }}
          </q-card-section>
          <q-card-actions v-if="item.btn" vertical align="left" class="q-pt-xs">
            <q-btn flat>Suscribirse</q-btn>
          </q-card-actions>
        </q-card>
      </q-list>
    </div>
    <p class="text-subtitle2 q-mt-xl q-mb-none">
      Venta de productos
    </p>
    <p class="text-body2 text-justify text-grey-6">
      Para ser acreedor a una cuenta como vendedor se deberás aceptar los
      <a href="">Términos y Condiciones de venta</a>, además de pasar por un
      chequeo de seguridad del usuario y el filtrado de los parámetros de
      calidad establecidos en nuestro manual de
      <a href="">Códigos de ventas COAST México</a> para asegurar la integridad
      de nuestra plataforma. Todo producto debe cumplir con nuestras
      <a href="">Garantías COAST</a>.
    </p>
    <q-btn
      rounded
      outline
      color="cc-pri"
      icon-right="paid"
      label="Ser vendedor"
    />
  </div>
</template>
<script>
export default {
  name: "Pricing",
  data() {
    return {
      items: [
        {
          title: "Nivel Bronce",
          price: "Tener una cuenta registrada en COAST",
          btn: false,
          img:
            "https://images.unsplash.com/photo-1556740772-1a741367b93e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          description:
            "Realiza tus pedidos de todos los productos en la tiende y accede a todas nuestras funcionalidades básicas."
        },
        {
          title: "Nivel Oro",
          price: "500 puntos de compra",
          btn: false,
          img:
            "https://images.unsplash.com/photo-1594968973184-9040a5a79963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
          description:
            "Acceso a promociones Nivel Oro, descuentos  hasta del 50% de envío con productos del mismo vendedor."
        },
        {
          title: "Nivel Platino",
          price: "$159.99 MXN mensuales",
          btn: true,
          img:
            "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
          description:
            "Obtén acceso a promociones Nivel Platino, envíos gratis en la compra de 10 productos o 5  del mismo vendedor."
        }
      ]
    };
  }
};
</script>
