<template>
  <q-layout view="hHh LpR fFf">

    <Header
      @openOrCloseDrawer="openOrCloseDrawer"
      :isLogged="true"
    />

    <Drawer
      :leftDrawerOpen="drawerOpen"
      :links="essentialLinks"
    />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer />
  </q-layout>
</template>

<script>

import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import Drawer from 'components/Drawer.vue'

const linksData = [
  {
    title: 'Inicio',
    icon: 'o_home',
    link: '',
    classes: 'cc-pri cf-body text-weight-bolder'
  },
  {
    title: 'Planes',
    icon: 'star_outline',
    link: '',
    classes: 'cc-pri cf-body text-weight-bolder'
  },
  {
    title: 'Caballeros',
    icon: 'male',
    link: '',
    sublevel: [
      {
        title: 'Pantalones / Short',
        link: '/caballeros/pantalones-shorts'
      },
      {
        title: 'Camisas',
        link: '/caballeros/camisas'
      },
      {
        title: 'Sudaderas / Hoddies',
        link: '/caballeros/sudaderas-hoodies'
      },
      {
        title: 'Accesorios',
        link: '/caballeros/accesorios'
      }
    ]
  },
  {
    title: 'Damas',
    icon: 'female',
    link: '',
    sublevel: [
      {
        title: 'Pantalones / Short',
        link: '/damas/pantalones-shorts'
      },
      {
        title: 'Camisas',
        link: '/damas/camisas'
      },
      {
        title: 'Sudaderas / Hoddies',
        link: '/damas/sudaderas-hoodies'
      },
      {
        title: 'Accesorios',
        link: '/damas/accesorios'
      }
    ]
  }
];

export default {
  name: 'UserLayout',
  components: { Header, Footer, Drawer },
  data () {
    return {
      drawerOpen: true,
      essentialLinks: linksData
    }
  },
  methods: {
    openOrCloseDrawer () {
      this.drawerOpen = !this.drawerOpen
    }
  }
}
</script>
