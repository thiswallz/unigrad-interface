<template>
  <button
    @click="$emit('click')"
    :style="{
      color: isDark ? styles.colorDark : styles.color,
      backgroundColor: styles.backgroundColor,
      borderColor: isDark ? styles.borderColorDark : styles.borderColor,
    }"
    class="
      tw-rounded-full tw-px-4 tw-py-0.5
      tw-pb-1 tw-uppercase tw-font-medium
    "
    style="border-width: 1.5px"
  >
    {{ name }}
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class FancyActionButton extends Vue {
  @Prop({
    default: {
      color: '#332f65',
      colorDark: 'white',
      backgroundColor: 'transparent',
      borderColor: '#332f65',
      borderColorDark: '#332f65',
    },
  })
  styles: any
  @Prop() name: string

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>
