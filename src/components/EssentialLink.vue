<template>
  <div>
    <q-expansion-item
      expand-separator
      v-if="sublevel.length"
      :content-inset-level="1"
      :to="link"
    >
      <template :class="classes" v-slot:header>
        <q-item-section avatar>
          <q-icon class="cc-pri" size="2rem" :name="icon" />
        </q-item-section>

        <q-item-section class="cc-pri cf-body text-weight-bolder cfs-item">
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
      :class="'cc-pri cf-body cfs-item ' + (isSublevel ? 'text-body2' : 'text-weight-bolder')"
      clickable
      v-else
      :to="link"
    >
      <q-item-section
        v-if="icon"
        avatar
      >
        <q-icon class="cc-pri" size="2rem" :name="icon" />
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
      type: String,
      default: ''
    },

    sublevel: {
      type: Array,
      default: () => []
    },

    classes: {
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

<style lang="scss">
  // Coast font size item in drawer
  .cfs-item {
    font-size: 18px;
  }
</style>
