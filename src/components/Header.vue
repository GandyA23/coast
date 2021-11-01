<template>
  <q-header elevated class="bg-cc-sec text-white">
    <q-toolbar>
      <q-btn v-if="showIconDrawer" dense flat round icon="menu" @click="openOrCloseDrawer" />

      <q-toolbar-title>
        <p class="q-mt-md q-ml-md cf-title">COAST</p>
      </q-toolbar-title>

      <div v-if="showIconsLogged">
        <q-btn class="bg-cc-sec q-mr-sm" size="12px" outline round color="white" icon="o_person"  to="/perfil"/>
        <q-btn class="bg-cc-sec q-mr-sm" size="12px" outline round color="white" icon="o_shopping_cart" />
        <q-btn class="bg-cc-sec q-mr-lg" size="12px" outline round color="white" icon="o_power_settings_new" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script>

export default {
  name: "Header",
  props: {
    isLogged: {
      type: Boolean,
      default: false
    },
    showMenuDrawer: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      showIconsLogged: this.isLogged,
      showIconDrawer: this.showMenuDrawer
    }
  },
  methods: {
    openOrCloseDrawer () {
      this.$emit('openOrCloseDrawer')
    }
  }
}
</script>

<style lang="scss">
  // Coast font size for title header
  .cfs-header {
    font-size: 24px;
  }
</style>

