<template>
  <q-layout view="hHh LpR fFf">

    <Header
      @openOrCloseDrawer="openOrCloseDrawer"
      :isAdmin="true"
      :isLogged="true"
    />

    <Drawer
      :leftDrawerOpen="drawerOpen"
      :links="essentialLinks"
      :isAdmin="true"
    />

    <q-page-container>
      <router-view />
    </q-page-container>

    <Footer :isAdmin="true" />
  </q-layout>
</template>

<script>
import Header from 'components/Header.vue'
import Footer from 'components/Footer.vue'
import Drawer from 'components/Drawer.vue'
const linksData = [
  {
    title: 'Form',
    icon: {
      name: 'check_box',
      classes: 'text-white'
    },
    link: '',
    classes: 'text-white cf-body text-weight-bolder'
  },
  {
    title: 'Stepper',
    icon: {
      name: 'table_chart',
      classes: 'text-white'
    },
    link: '',
    classes: 'text-white cf-body text-weight-bolder'
  },
  {
    title: 'Charts',
    icon: {
      name: 'pie_chart',
      classes: 'text-white'
    },
    link: '',
    classes: 'text-white cf-body text-weight-bolder'
  },
  {
    title: 'Gestión',
    icon: {
      name: 'app_registration',
      classes: 'text-white'
    },
    link: '',
    classes: 'text-white cf-body text-weight-bolder',
    expandIconClass: 'text-white',
    sublevel: [
      {
        title: 'Lista de productos',
        link: '',
        classes: 'text-white cf-body text-body2'
      },
      {
        title: 'Registro',
        link: '',
        classes: 'text-white cf-body text-body2'
      }
    ]
  }
];
export default {
  name: 'MainLayout',
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
