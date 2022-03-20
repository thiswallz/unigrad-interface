<template>
  <div @click="$emit('click')">
    <div
      :class="selected === true ? 'fancy-card--selected' : ''"
      class="
        fancy-card
        tw-grid tw-gap-1 tw-grid-cols-xs-card ss:tw-grid-cols-ss-card sm:tw-grid-cols-sm-card tw-grid-rows-xs-card
      "
    >
      <div class="tw-relative">
        <slot name="left" />
      </div>
      <div class="tw-flex tw-flex-col tw-self-center">
        <slot name="main" />
      </div>
    </div>
    <div v-show="selected" class="selected-line tw-h-1 tw-w-full"></div>
    <div v-show="!selected" class="tw-h-1 tw-w-full"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({
  components: {},
})
export default class FancyCard extends Vue {
  @Prop({ default: false }) selected?: boolean

  get isDark() {
    return this.$store.state.theme.color === "dark"
  }
}
</script>

<style lang="scss">
.selected-line {
  background: linear-gradient(
    103.62deg,
    #a14ff0 -40.41%,
    #7455ef -10.59%,
    #dec79f 29.18%,
    #6909c6 95.93%
  );
  animation: animated-border 4s ease infinite;
  background-size: 200% 200%;
}
.fancy-card {
  &:hover,
  &--selected {
    border-radius: 7.75478px;
    cursor: pointer;
    background: linear-gradient(
      85.49deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 97.3%
    );
    .fancy-title {
      @apply tw-text-rd-high;
    }
  }
}
.dark {
  .selected-line {
    background: linear-gradient(
      122.69deg,
      #5c4ff0 30.52%,
      #e387c1 51.49%,
      #4509c6 69.61%
    );
    animation: animated-border 4s ease infinite;
    background-size: 200% 200%;
  }
  .fancy-card {
    &:hover,
    &--selected {
      border-radius: 7.75478px;
      background: linear-gradient(
        90deg,
        rgba(25, 28, 112, 0.5) 0%,
        rgba(25, 28, 112, 0) 99.85%
      );
      .fancy-title {
        @apply tw-text-rd-high-dark;
      }
    }
  }
}
@keyframes animated-border {
  0% {
    background-position: 10% 0%;
  }
  50% {
    background-position: 91% 100%;
  }
  100% {
    background-position: 10% 0%;
  }
}
</style>
