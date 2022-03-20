<template>
  <div
    class="
          fancy-table 
          tw-bg-rd-white-opacity
          tw-text-sm 
          sub-text
          tw-rounded-sm
          tw-border-rd-border-fancy-table
          tw-border
          ss:tw-p-5"
    >
    <template v-if="isHeaderVisible">
      <slot name="header"></slot>
    </template>
    <template v-for="(row, index) in rows">
      <slot v-bind:row="row, index, rows"></slot>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class FancyTable extends Vue {
  @Prop() rows: any[]
  @Prop({ default: true }) isHeaderVisible: boolean
  @Prop() classes: string[]

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>
