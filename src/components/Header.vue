<template>
  <div>
    <!-- User -->
    <q-header v-if="!showAdmin" elevated class="bg-cc-sec text-white">
      <q-toolbar>
        <q-btn v-if="showIconDrawer" dense flat round icon="menu" @click="openOrCloseDrawer" />

        <q-toolbar-title>
          <p class="q-mt-md q-ml-md cf-title">COAST</p>
        </q-toolbar-title>

        <div v-if="showIconsLogged">
          <q-btn class="bg-cc-sec q-mr-sm" size="12px" outline round color="white" icon="o_person" />
          <q-btn class="bg-cc-sec q-mr-sm" size="12px" outline round color="white" icon="o_shopping_cart" />
          <q-btn class="bg-cc-sec q-mr-lg" size="12px" outline round color="white" icon="o_power_settings_new" />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Admin -->
    <q-header v-else elevated class="bg-cc-sec text-white">
      <q-toolbar>
        <q-btn v-if="showIconDrawer" dense flat round icon="menu" @click="openOrCloseDrawer" />

        <q-toolbar-title>
          <p class="q-mt-md q-ml-md cf-title">ADMIN COAST</p>
        </q-toolbar-title>

        <div v-if="showIconsLogged">
          <!-- Notificaciones -->
          <q-btn-dropdown
            class="bg-cc-sec"
            fab-mini
            outline
            rounded
            no-icon-animation
            size="12px"
            color="white"
            dropdown-icon="notifications"
            :menu-offset="[10, 10]"
          >
            <q-list>
              <q-item v-for="(notification, index) in notifications" v-bind:key="`notification${index}`" clickable v-close-popup>
                <q-item-section avatar>
                  <q-avatar :icon="notification.avatar.name" :color="notification.avatar.color" :text-color="notification.avatar.textColor" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{notification.title}}</q-item-label>
                  <q-item-label caption>{{notification.date}}</q-item-label>
                </q-item-section>
                <q-item-section side>
                  <q-icon :name="notification.side.name" :color="notification.side.color" />
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>

          <q-badge class="q-mr-sm" align="top" color="red" :label="notifications.length" />

          <!--Cerrar sesión-->
          <q-btn class="bg-cc-sec q-mr-lg" size="12.5px" outline round color="white" icon="o_power_settings_new" />
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>

export default {
  name: "Header",
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
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
      showIconDrawer: this.showMenuDrawer,
      showAdmin: this.isAdmin,
      notifications: [
        { title: 'Nueva compra', date: 'Diciembre 12, 2021.', color: 'primary', avatar: { name: 'shopping_cart', color: 'primary', textColor: 'white' }, side: { name: 'info', color: 'positive' } },
        { title: 'Archivo agregado', date: 'Diciembre 12, 2021.', color: 'primary', avatar: { name: 'attach_file', color: 'primary', textColor: 'white' }, side: { name: 'info', color: 'positive' } },
        { title: 'Prenda entregada', date: 'Diciembre 12, 2021.', color: 'primary', avatar: { name: 'checkroom', color: 'primary', textColor: 'white' }, side: { name: 'info', color: 'positive' } }
      ]
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

