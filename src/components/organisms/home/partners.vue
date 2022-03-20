<template>
  <section
    data-test-id="partners"
    class="partners tw-relative tw-mt-24 6"
    id="partners"
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
      OUR PARTNERS
    </div>
    <div class="logo-grid">
      <div
        class="logo-wrapper w-inline-block"
        v-for="(item, index) in partners"
        :key="index"
      >
        <img
          alt="partner"
          class="slogo"
          :src="
            isDark
              ? `${imageSrc}partners/${item.iconDark}`
              : `${imageSrc}partners/${item.icon}`
          "
        />
      </div>
    </div>
    <simple-button
      v-if="false"
      class="tw-w-36 tw-pl-3 tw-left-1/2 tw-transform tw--translate-x-1/2 tw-absolute tw--bottom-16"
      >Become a partner</simple-button
    >
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SimpleButton from '~/components/atoms/simple-button.vue'
import partners from '~/data/partners.json'

@Component({
  components: { SimpleButton },
})
export default class Partners extends Vue {
  partners = partners
  imageSrc = '/images/'
  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>
