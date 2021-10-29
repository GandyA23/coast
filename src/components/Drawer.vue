<template>
  <q-drawer show-if-above v-model="$props.leftDrawerOpen" side="left" elevated>
      <q-list class="q-mt-xl">
        <EssentialLink
          v-for="(essentialLink, index) in essentialLinks"
          class="text-bold"
          :key="`${essentialLink.title}${index}`"
          v-bind="essentialLink"
        />
      </q-list>
  </q-drawer>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

export default {
  name: "Drawer",
  components: { EssentialLink },
  props: {
    links: {
      type: Array,
      required: true
    },

    leftDrawerOpen: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      essentialLinks: this.links
    }
  }
}
</script>
