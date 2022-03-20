<template>
  <div class="tw-relative tw-font-semibold tw-text-center tw-flex">
    <div
      class="
      text-gradient
      tw-z-10 tw-text-rd-highlight
      sm:tw-text-left 
      tw-uppercase
      "
      >
      <slot name="text" />
    </div>
    <div
      class="
      right-line
      tw-bg-gradient-to-r
      tw-from-indigo-500
      tw-to-transparent
      tw-z-10
      tw-ml-4
      tw-w-40
      tw-h-px
      tw-mt-2
      "
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class PostSection extends Vue { }
</script>