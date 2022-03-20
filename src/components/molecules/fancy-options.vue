<template>
  <div
    class="tw-inline-block tw-rounded-sm tw-border-2 tw-border-rd-border-fancy"
    :class="isDark ? 'tw-border-rd-border-fancy-dark' : ''"
  >
    <div
      v-for="(option, index) in options"
      :key="index"
      class="tw-inline-block"
      :class="[
        index + 1 == options.length ? '' : 'tw-border-r-2 tw-border-rd-border-fancy',
        isDark ? 'tw-border-rd-border-fancy-dark' : ''
      ]"
    >
      <fancy-option
        @click="setActive(option)"
        :isActive="active == option"
        :icon="option"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import FancyOption from '~/components/atoms/fancy-option.vue'

@Component({
  components: { FancyOption },
})
export default class FancyOptions extends Vue {
  @Prop({ required: true }) options: string[]
  @Prop({ required: true }) active: string;

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  setActive(option: string) {
    this.$emit('click', option)
    this.active = option
  }
}
</script>
