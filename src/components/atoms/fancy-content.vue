<template>
  <div class="tw-block tw-flex tw-justify-between">
    <div :class="size == 'lg' ? 'tw-flex-1' : ''" style="flex-basis: 75%;">
      <div class="tw-text-rd-title-white-dark">
        <slot name="leftTop" />
      </div>
      <div class="tw-text-rd-subtext">
        <slot name="leftBottom" />
      </div>
    </div>
    <div v-if="size == 'lg'" class="tw-hidden lg:tw-block tw-flex-1 tw-px-4">
      <div class="tw-text-rd-title-white-dark">
        <slot name="centerTop" />
      </div>
      <div class="tw-text-rd-subtext">
        <slot name="centerBottom" />
      </div>
    </div>
    <div style="flex-basis: 25%;"  :class="size == 'lg' ? 'tw-flex-1' : ''">
      <div class="tw-text-rd-title-white-dark">
        <slot name="rightTop" />
      </div>
      <div class="tw-text-rd-subtext">
        <slot name="rightBottom" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class FancyContent extends Vue {
  @Prop({ default: 'sm' }) size: string
}
</script>
