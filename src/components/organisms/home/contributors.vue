<template>
  <section
    data-test-id="contributors"
    class="contributors tw-mt-24 "
    id="contributors"
  >
    <div
      class="
      text-h1
      tw-z-10
      tw-text-center
      tw-mt-4
      tw-mb-14
      "
    >
      OUR CONTRIBUTORS
    </div>

    <div class="logo-grid">
      <div
        class="logo-wrapper w-inline-block"
        v-for="(item, index) in contributors"
        :key="index"
      >
        <img
          alt="contributor"
          class="slogo"
          :src="
            isDark
              ? `${imageSrc}contributors/${item.iconDark}`
              : `${imageSrc}contributors/${item.icon}`
          "
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import contributors from '~/data/contributors.json'

@Component({
  components: {},
})
export default class Contributors extends Vue {
  contributors = contributors
  imageSrc = '/images/'
  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>
