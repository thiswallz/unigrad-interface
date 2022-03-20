<template>
  <div class="circle-chain tw-flex tw-rounded-full tw-w-12 tw-h-12">
    <img
      class="hover:tw-opacity-50 tw-cursor-pointer tw-w-full tw-p-2"
      :src="`${imageSrc}icons/${chain}.svg`"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class CrossChainIcon extends Vue {
  @Prop() chain!: string

  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  get icon() {
    return this.chain
  }
}
</script>
