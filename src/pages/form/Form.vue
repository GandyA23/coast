<template>
  <div class="q-ma-xl cf-body cc-pri">
    <h4 class="q-ma-none q-mb-ms cf-title">
      Formulario
    </h4>
    <div class="row q-mt-md q-mb-md">
      <div class="col-xs-12 col-sm-6 col-md-6 q-pa-md">
        <h5 class="q-ma-none q-mb-sm cf-title text-grey-6">
          Activos
        </h5>
        <div class="text-grey-6 q-mb-none q-ml-xs  q-mt-sm">
          Input con icono
        </div>
        <q-input
          rounded
          outlined
          dense
          v-model="nombre"
          label="Nombre"
          label-color="indigo"
        >
          <template v-slot:prepend>
            <q-icon name="home" class="cc-pri" />
          </template>
        </q-input>
        <div class="text-grey-6 q-mb-none q-ml-xs  q-mt-sm">Input</div>
        <q-input
          rounded
          outlined
          dense
          v-model="nombre"
          label="Nombre"
          label-color="indigo"
        >
        </q-input>
        <div class="text-grey-6 q-mb-none q-ml-xs  q-mt-sm">Textarea</div>
        <q-input
          v-model="text"
          outlined
          rounded
          type="textarea"
          label-color="indigo"
          label="Descripción"
        />
        <div class="text-grey-6 q-mb-none q-ml-xs  q-mt-sm">Select</div>
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
        <div class="q-mt-sm">
          <q-checkbox v-model="right" label="Checkbox" />
        </div>
        <div class="q-mt-sm">
          <q-option-group :options="options" type="radio" v-model="group" />
        </div>
        <q-toggle v-model="value" label="Toggle" />
        <br />
        <div class="row q-mt-md q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-4 q-mb-md">
            <q-btn rounded filled color="indigo" label="Botón" />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-8 q-mb-md">
            <q-btn
              rounded
              filled
              color="indigo"
              icon="arrow_back"
              label="Botón con ícono"
            />
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-4 q-mb-md">
            <q-btn rounded outline color="indigo" label="Botón" />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-8">
            <q-btn
              rounded
              outline
              color="indigo"
              icon="arrow_back"
              label="Botón con ícono"
            />
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-6 col-md-6 q-pa-md">
        <h5 class="q-ma-none q-mb-sm cf-title text-grey-6">
          Desabilitados
        </h5>
        <div class="text-grey-6 q-mb-none q-ml-xs q-mt-sm">Input con icono</div>
        <q-input
          rounded
          outlined
          disable
          dense
          v-model="nombre"
          label="Nombre"
          label-color="indigo"
        >
          <template v-slot:prepend>
            <q-icon name="home" class="cc-pri" />
          </template>
        </q-input>
        <div class="text-grey-6 q-mb-none q-ml-xs  q-mt-sm">Input</div>
        <q-input
          rounded
          outlined
          disable
          dense
          v-model="nombre"
          label="Nombre"
          label-color="indigo"
        >
        </q-input>
        <div class="text-grey-6 q-mb-none q-ml-xs  q-mt-sm">Textarea</div>
        <q-input
          v-model="text"
          outlined
          disable
          rounded
          type="textarea"
          label-color="indigo"
          label="Descripción"
        />
        <div class="text-grey-6 q-mb-none q-ml-xs  q-mt-sm">Select</div>
        <q-select
          ref="size"
          rounded
          disable
          dense
          color="indigo"
          label-color="indigo"
          outlined
          v-model="modelSize"
          :options="size"
          label="Selecciona una talla ..."
        />
        <div class="q-mt-sm">
          <q-checkbox disable v-model="right" label="Checkbox" />
        </div>
        <div class="q-mt-sm">
          <q-option-group
            disable
            :options="options"
            type="radio"
            v-model="group"
          />
        </div>
        <q-toggle disable v-model="value" label="Toggle" />
        <div class="row q-mt-md q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-4 q-mb-md">
            <q-btn rounded filled disable color="indigo" label="Botón" />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-8 q-mb-md">
            <q-btn
              rounded
              filled
              disable
              color="indigo"
              icon="arrow_back"
              label="Botón con ícono"
            />
          </div>
        </div>
        <div class="row q-mt-md q-mb-md">
          <div class="col-xs-12 col-sm-6 col-md-4 q-mb-md">
            <q-btn rounded outline disable color="indigo" label="Botón" />
          </div>
          <div class="col-xs-12 col-sm-6 col-md-8">
            <q-btn
              rounded
              disable
              outline
              color="indigo"
              icon="arrow_back"
              label="Botón con ícono"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      nombre: "",
      text: "",
      right: false,
      group: null,
      modelSize: null,
      value: false,
      size: ["CH", "M", "G", "XG"],
      options: [
        { label: "Radio", value: "r1" },
        { label: "Radio", value: "r2" }
      ]
    };
  },
  methods: {}
};
</script>
