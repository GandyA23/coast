<template>
  <q-footer elevated :class="`${(showAdmin ? 'bg-cc-sec' : 'bg-cc-pri')} text-white`">
      <q-toolbar>
        <q-toolbar-title style="font-size: 1rem;" class="cf-body text-center text-weight-bolder">
          &copy;COAST {{today.getFullYear()}}. Todos los derechos reservados
        </q-toolbar-title>
      </q-toolbar>
  </q-footer>
</template>

<script>
const now = new Date()

export default {
  name: "Footer",
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      today: now,
      showAdmin: this.isAdmin
    }
  }
}
</script>
