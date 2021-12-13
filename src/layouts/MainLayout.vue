<template>
  <q-layout view="hHh LpR fFf">

    <Header
      :showMenuDrawer="false"
    />

    <q-page-container class="full-height">
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
export default {
  name: 'MainLayout',
  components: { Header, Footer },
  data () {
    return {
    }
  }
}
</script>
