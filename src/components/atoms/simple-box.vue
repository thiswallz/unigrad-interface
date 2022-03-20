<template>
  <div
    :class="[
      selected
        ? 'tw-pl-5 tw-pr-5 xs:tw-pr-0 xs:tw-pl-0 ss:tw-mt-2 tw-mb-3 selected tw-scale-110	 tw-transform-gpu tw-z-20'
        : '',
      !selected && blurred ? 'tw-z-1 tw-filter  tw-blur-xs' : ' ',
      scaled ? ' tw-z-10 tw-transform-gpu' : 'tw-transform-gpu tw-scale-90',
      !title ? 'nothing' : '',
    ]"
    class="new-card tw-relative"
  >
    <div class="tw-left-1/2 tw-transform tw-w-full tw-text-center" style="min-width: 300px;max-width: 350px;">
      <img
        :alt="title"
        :src="image"
        class="tw-w-full tw-h-auto"
        style="margin-left: auto; margin-right: auto; display: block"
      />
      <div style="min-height:250px">
        <div
          style="font-size: .5em;"
          class="sub-text tw-text-left tw-m-2 tw-mx-6 sm:tw-mx-2"
        >
          {{ subTitle }}
        </div>
        <div
          style="font-size:.9em;"
          class="tw-text-left tw-font-bold tw-m-2 tw-mx-6 sm:tw-mx-2 "
        >
          {{ title }}
        </div>
        <div
          class="tw-text-left tw-mx-6 sm:tw-mx-2 sub-text"
          style="font-size:.70em;"
        >
          {{ description }}
        </div>
      </div>
    </div>
    <a
      :href="link"
      target="blank"
      class="modern-link tw-flex tw-mx-6 sm:tw-mx-2 tw-absolute tw-left-2 tw-bottom-1"
      style="font-size:.8em;"
    >
      Find out more
      <img
        alt="Find out more"
        class="tw-h-1 tw-ml-1 tw-mt-3"
        :src="isDark ? `${imageSrc}dark/arrow.png` : `${imageSrc}arrow.png`"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class SimpleBox extends Vue {
  @Prop({ default: false }) selected?: boolean
  @Prop({ default: false }) scaled?: boolean
  @Prop({ default: false }) blurred?: boolean
  @Prop({ default: null }) title?: string
  @Prop({ default: '' }) subTitle?: string
  @Prop({ default: '' }) description?: string
  @Prop({ default: '' }) image?: string
  @Prop({ default: '' }) link?: string

  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>

<style lang="scss" scoped>
.nothing {
  visibility: hidden;
}

.new-card {
  opacity: 0.7;
  background-color: #ededf3;
}
.selected.new-card {
  background-color: #ededf3;
  opacity: 1;
}

.dark {
  .new-card {
    opacity: 1;
    background: #000024;
  }
  .selected.new-card {
    opacity: 1;
    background-color: #0e1052;
  }
}
</style>
