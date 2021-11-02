<template>
  <div class="fullscreen bg-cc-pri text-white text-center q-pa-md flex flex-center">
    <div class="row">
      <div class="col-12">
        <p style="font-size: 4rem" class="cf-title"> ERROR {{code}} </p>
      </div>

      <div class="col-12">
        <p style="font-size: 3rem" class="cf-body"> {{message}} </p>
      </div>

      <div class="col-12">
        <q-btn outline rounded size="sm" class="bg-cc-pri" color="white">
          <q-icon left size="2rem" name="arrow_back" />
          <p style="font-size: 1.3rem" class="q-mt-md cf-body">
            Regresar
          </p>
        </q-btn>
      </div>

      <div class="q-mt-lg col-12">
        <img
          width="30%"
          :src="getImg(code)"
        />
      </div>
    </div>
  </div>
</template>

<script>
const errorMessages = {
  '404': 'Página no encontrada',
  '500': 'Error en el servidor',
  '503': 'Servicio no disponible'
}

export default {
  name: 'Error',
  data () {
    return {
      code: 404,
      message: ''
    }
  },
  mounted () {
    if (this.$route.params.code) {
      this.code = this.$route.params.code
    }

    this.message = errorMessages[this.code]
  },
  methods: {
    getImg (code) {
      return require(`assets/error/${code}.png`)
    }
  }
}
</script>
