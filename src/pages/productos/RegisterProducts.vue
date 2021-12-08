<template>
  <div class="q-ma-xl cf-body cc-pri">
    <h4 class="q-ma-none q-mb-xl cf-title">
      Registro de productos
    </h4>
    <div class="row q-mt-md q-mb-md">
      <div class="col-xs-12 col-sm-6 col-md-6">
        <div class="text-grey-6 text-weight-bold q-mb-none q-ml-xs">
          Nombre:
        </div>
        <q-input
          rounded
          outlined
          dense
          v-model="nombre"
          label="Nombre del producto"
          label-color="indigo"
        >
        </q-input>
        <div class="text-grey-6 text-weight-bold q-mb-none q-ml-xs  q-mt-sm">
          Descripción:
        </div>
        <q-input
          v-model="text"
          outlined
          rounded
          type="textarea"
          label-color="indigo"
          label="Descripción del producto"
        />
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="text-grey-6 text-weight-bold q-mb-none q-ml-xs q-mt-sm">
              Stock:
            </div>
            <q-input rounded outlined dense v-model="stock" type="number">
            </q-input>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-1"></div>
          <div class="col-xs-12 col-sm-6 col-md-3">
            <div class="text-grey-6 text-weight-bold q-mb-none q-ml-xs q-mt-sm">
              Precio:
            </div>
            <q-input
              rounded
              outlined
              dense
              prefix="$"
              v-model="precio"
              type="number"
            >
            </q-input>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-1"></div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <div class="text-grey-6 text-weight-bold q-mb-none q-ml-xs q-mt-sm">
              Número de articulo:
            </div>
            <q-input
              rounded
              outlined
              dense
              label-color="indigo"
              label="Número de articulo"
              type="number"
              v-model="numeroArt"
            >
            </q-input>
          </div>
        </div>
        <div class="text-grey-6 text-weight-bold q-mb-none q-ml-xs q-mt-sm">
          Tallas disponibles:
        </div>
        <q-select
          ref="size"
          rounded
          dense
          color="indigo"
          label-color="indigo"
          outlined
          v-model="modelSize"
          :options="size"
          label="Selecciona una talla ..."
        />
        <div class="text-grey-6 text-weight-bold q-mb-none q-ml-xs q-mt-sm">
          Colores disponibles:
        </div>
        <q-select
          ref="color"
          rounded
          dense
          color="indigo"
          label-color="indigo"
          outlined
          v-model="modelColor"
          :options="color"
          label="Selecciona el color ..."
        />
        <div class="row q-mt-md q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-3 q-mb-md">
            <q-btn rounded filled color="cc-pri" label="Guardar" />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-9 q-mb-md">
            <q-btn rounded outline color="cc-pri" label="Limpiar formulario" />
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-6 col-md-1"></div>
      <div class="col-xs-12 col-sm-6 col-md-5">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          thumbnails
          infinite
          style="max-width:450px"
          height="550px"
          class="rounded-borders shadow-2"
        >
          <q-carousel-slide :name="1" img-src="~assets/photos.png" />
          <q-carousel-slide :name="2" img-src="~assets/photos.png" />
          <q-carousel-slide :name="3" img-src="~assets/photos.png" />
        </q-carousel>
        <div class="row q-mt-md q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-5 q-mb-md">
            <q-file
              v-model="files"
              label="Selecciona las imágenes"
              outlined
              rounded
              dense
              color="indigo"
              use-chips
              multiple
              style="max-width: 300px"
            >
              <template v-slot:prepend>
                <q-icon color="indigo" name="attach_file" />
              </template>
            </q-file>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-1"></div>
          <div class="col-xs-12 col-sm-6 col-md-6">
            <q-btn rounded filled color="cc-pri" icon="upload_file" label="Subir imágenes " />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegisterProducts",
  data() {
    return {
      slide: 1,
      nombre: "",
      text: "",
      stock: 1,
      precio: 10,
      numeroArt: null,
      modelSize: null,
      modelColor: null,
      files: null,
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
        //mensaje de error
      } else {
        //mensaje éxito
      }
    }
  }
};
</script>
