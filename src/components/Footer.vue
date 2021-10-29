<template>
  <q-footer elevated class="bg-cc-pri text-white">
      <q-toolbar>
        <q-toolbar-title class="cf-body text-center text-weight-bolder">
          &copy;COAST {{today.getFullYear()}}. Todos los derechos reservados
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
</template>

<script>
const now = new Date()

export default {
  name: "Footer",
  data () {
    return {
      today: now
    }
  }
}
</script>
