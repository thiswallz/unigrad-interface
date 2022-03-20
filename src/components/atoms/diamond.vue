<template>
  <div
    class="diamond-container tw-relative"
    :class="[
      main ? 'diamond-container--main tw-w-12 tw-h-12' : 'tw-w-16 tw-h-16',
      selected ? 'diamond-container--selected' : '',
      disabled ? 'diamond-container--disabled' : '',
    ]"
  >
    <div
      class="diamond-text tw-absolute tw-z-10  tw-text-center tw-text-sm tw-font-semibold
        tw-top-1/2 tw-left-1/2 tw-transform tw--translate-x-1/2 tw--translate-y-1/2
      "
    >
      <slot />
    </div>
    <div class="diamond tw-absolute tw-w-full tw-h-full"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Diamond extends Vue {
  @Prop({ default: false }) selected?: boolean
  @Prop({ default: false }) disabled?: boolean
  @Prop({ default: false }) main?: boolean

  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>

<style lang="scss" scoped>
.diamond-container {
  color: rgba(64, 57, 136, 1);
  .diamond {
    background: rgba(255, 255, 255, 0.8);
    border: 2px solid #d8dbf1;
    backdrop-filter: blur(22.9838px);
    border-radius: 1.14919px;
    transform: rotate(45deg);
  }
  &--main {
    .diamond {
      box-shadow: 0px 8px 96px rgba(255, 207, 50, 0.2);
      backdrop-filter: blur(40px);
      border-radius: 2px;
    }
  }
  &--selected {
    .diamond {
      box-shadow: 0px 8px 96px rgba(255, 207, 50, 0.2);
      border-image: linear-gradient(
        80deg,
        rgba(161, 79, 240, 1),
        rgba(116, 85, 239, 1),
        rgba(105, 9, 198, 1),
        rgba(222, 199, 159, 1)
      );
      border-image-slice: 1;
    }
  }
  &--disabled {
    color: #a7a9ba;
  }
}

.dark {
  .diamond-container {
    color: #fff;
    .diamond {
      background: rgb(16, 16, 16);
      border: 2.05148px solid #5ed398;
      box-shadow: 0px 4.59676px 55.1611px #14281d;
    }
    &--main {§
      .diamond {
        border: 3.3px solid #ffffff;
      }
    }
    &--selected {
      .diamond {
        background: rgba(33, 33, 33, 0.7);
        box-shadow: 0px 8.96281px 107.554px #5ed398;
        border-image: linear-gradient(
          45deg,
          rgba(227, 135, 193, 1),
          #5ed398,
          #40966b,
          rgba(227, 135, 193, 1)
        );
        border-image-slice: 1;
      }
    }
    &--disabled {
      color: #626795;
    }
  }
}
</style>
