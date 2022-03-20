<template>
  <button
    class="tw-h-12 tw-w-12 tw-bg-transparent tw-p-3.5 lg:tw-p-4"
    :class="isActive ? '' : 'tw-opacity-30'"
    @click="$emit('click')"
  >
    <img v-bind:style="{ filter: isDark ? 'invert(100%)' : '' }" :src="`${imageSrc}extra/${icon}.svg`" /> 
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class FancyOption extends Vue {
  @Prop({ required: true, default: 'grid' }) icon: string
  @Prop({ required: false, default: false }) isActive: boolean

  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>
