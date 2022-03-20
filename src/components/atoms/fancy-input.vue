<template>
  <div>
    <input
      @keyup="$emit('keyup', $event.target.value)"
      class="
        fancy-input-logo-placeholder
        tw-border-2
        tw-border-rd-title-white-dark
        tw-outline-none
        tw-bg-transparent
        tw-rounded-sm
        tw-border-2
        tw-w-full
        tw-pl-14
        tw-pr-2
        tw-py-2.5
      "
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class FancyInput extends Vue {
  @Prop({ default: 'Search', required: false }) placeholder: string
}
</script>
