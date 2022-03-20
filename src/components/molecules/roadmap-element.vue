<template>
  <div
    class="r-element tw-items-center tw-relative"
    :class="[left ? 'tw-flex tw-flex-row-reverse' : 'tw-flex']"
  >
    <diamond :selected="selected" :disabled="disabled">
      <slot name="date" />
    </diamond>
    <wide-diamond
      class="tw-w-96 tw-absolute"
      :class="[left ? 'r-left tw-right-5' : 'r-right tw-left-5']"
      :selected="selected"
    >
      <div
        class="tw-uppercase tw-font-bold"
        :class="[disabled ? 'tw-opacity-50' : '']"
      >
        {{ title }}
      </div>
    </wide-diamond>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"
import Diamond from "~/components/atoms/diamond.vue"
import WideDiamond from "~/components/atoms/wide-diamond.vue"

@Component({
  components: { Diamond, WideDiamond },
})
export default class RoadmapElement extends Vue {
  @Prop({ default: false }) disabled?: boolean
  @Prop({ default: false }) selected?: boolean
  @Prop({ default: false }) left?: boolean
  @Prop() title?: string

  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === "dark"
  }
}
</script>

<style lang="scss">
.r-element {
  .r-left {
    &:not(.diamond-container--selected) {
      svg {
        padding-left: 2px;
      }
    }
  }
  .r-right {
    &:not(.diamond-container--selected) {
      svg {
        padding-right: 2px;
      }
    }
  }
}
</style>
