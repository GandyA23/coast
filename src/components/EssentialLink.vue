<template>
  <div>
    <q-expansion-item
      expand-separator
      v-if="sublevel.length"
      :content-inset-level="1"
      :to="link"
      :expand-icon-class="expandIconClass"
    >
      <template v-slot:header>
        <q-item-section avatar>
          <q-icon :class="icon.classes" size="2rem" :name="icon.name" />
        </q-item-section>

        <q-item-section :class="`${classes} cfs-item`">
          {{ title }}
        </q-item-section>

        <q-item-section caption>
          {{ caption }}
        </q-item-section>
      </template>
      <EssentialLink
        v-for="(essentialLink, index) in sublevel"
        :key="`${essentialLink.title}${index}`"
        v-bind="essentialLink"
        :isSublevel="true"
      />
    </q-expansion-item>

    <q-item
      :class="`${classes} cfs-item`"
      clickable
      v-else
      :to="link"
    >
      <q-item-section
        v-if="icon"
        avatar
      >
        <q-icon :class="icon.classes" size="2rem" :name="icon.name" />
      </q-item-section>

      <q-item-section>
        <q-item-label class="q-mt-sm">{{ title }}</q-item-label>
        <q-item-label caption>
          {{ caption }}
        </q-item-label>
      </q-item-section>
    </q-item>
  </div>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: Object,
      default: () => {}
    },

    sublevel: {
      type: Array,
      default: () => []
    },

    classes: {
      type: String,
      default: ''
    },

    expandIconClass: {
      type: String,
      default: ''
    },

    isSublevel: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="sass">
  // Coast font size item in drawer
  .cfs-item
    font-size: 18px
</style>
