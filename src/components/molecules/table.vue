<template>
  <div
    class="
          container
          tw-bg-rd-main
          tw-font-bold 
          tw-text-sm 
          tw-p-5 
          tw-space-y-4
          tw-m-0
          tw-max-h-96"
          :class="classes"
      >
    <header class="tw-flex" v-if="showColumns">
      <div 
        class="col tw-grow-0" 
        v-for="(column, index) in gridColumns" :key="index" 
        :style="{'flex-basis': widthColumns[index]}"
        >
        {{ column }}
      </div>
    </header>
    <div class="tw-flex" v-for="entry in gridData">
      <div 
        class="col sub-text" 
        v-for="(key, index) in gridColumns" :key="index"
        :style="{'flex-basis': widthColumns[index]}">
        <template>
          {{ entry[key] }}
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import TableDiamond from '~/components/atoms/table-diamond.vue'

@Component({
  components: { TableDiamond },
})
export default class TokenTable extends Vue {
  @Prop() gridColumns: string[]
  @Prop() gridData: Object[]
  @Prop() widthColumns: string[]
  @Prop({ default: true }) showColumns: boolean
  @Prop() classes: string[]

  get isDark() {
    return this.$store.state.theme.color === "dark"
  }
}
</script>
<style lang="scss" scoped>
.dark {
  .container {
    background: #000125 !important;
  }
}
</style>
