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
    icon: {
      name: 'o_home',
      classes: 'cc-pri'
    },
    link: '',
    classes: 'cc-pri cf-body text-weight-bolder'
  },
  {
    title: 'Planes',
    icon: {
      name: 'star_outline',
      classes: 'cc-pri'
    },
    link: '/planes',
    classes: 'cc-pri cf-body text-weight-bolder'
  },
  {
    title: 'Caballeros',
    icon: {
      name: 'male',
      classes: 'cc-pri'
    },
    link: '',
    expandIconClass: 'cc-pri',
    classes: 'cc-pri cf-body text-weight-bolder',
    sublevel: [
      {
        title: 'Pantalones / Short',
        link: '/caballeros/pantalones-shorts',
        classes: 'cc-pri cf-body text-body2'
      },
      {
        title: 'Camisas',
        link: '/caballeros/camisas',
        classes: 'cc-pri cf-body text-body2'
      },
      {
        title: 'Sudaderas / Hoddies',
        link: '/caballeros/sudaderas-hoodies',
        classes: 'cc-pri cf-body text-body2'
      },
      {
        title: 'Accesorios',
        link: '/caballeros/accesorios',
        classes: 'cc-pri cf-body text-body2'
      }
    ]
  },
  {
    title: 'Damas',
    icon: {
      name: 'female',
      classes: 'cc-pri'
    },
    link: '',
    expandIconClass: 'cc-pri',
    classes: 'cc-pri cf-body text-weight-bolder',
    sublevel: [
      {
        title: 'Pantalones / Short',
        link: '/caballeros/pantalones-shorts',
        classes: 'cc-pri cf-body text-body2'
      },
      {
        title: 'Camisas',
        link: '/caballeros/camisas',
        classes: 'cc-pri cf-body text-body2'
      },
      {
        title: 'Sudaderas / Hoddies',
        link: '/caballeros/sudaderas-hoodies',
        classes: 'cc-pri cf-body text-body2'
      },
      {
        title: 'Accesorios',
        link: '/caballeros/accesorios',
        classes: 'cc-pri cf-body text-body2'
      }
    ]
  },
  {
    title: 'Inbox Email',
    icon: {
      name: 'o_mail',
      classes: 'cc-pri'
    },
    link: '',
    classes: 'cc-pri cf-body text-weight-bolder'
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
