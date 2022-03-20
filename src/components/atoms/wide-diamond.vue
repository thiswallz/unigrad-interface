<template>
  <div
    class="diamond-container tw-h-32"
    :class="[selected ? 'diamond-container--selected' : '']"
  >
    <div
      class="diamond-text tw-absolute tw-z-10  tw-text-sm 
      tw-font-semibold tw-top-1/2 tw-left-20 tw-pl-2 tw-transform 
       tw--translate-y-1/2 "
    >
      <slot />
    </div>
    <div class="rectangle tw-absolute tw-w-full tw-h-full">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 672 242"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_bd_728_1343)">
          <path
            d="M122.179 82.7594L549.986 82.7594C550.901 82.7594 551.359 82.7594 551.771 82.93C552.183 83.1006 552.507 83.4244 553.154 84.072L586.996 117.914C588.49 119.407 589.237 120.154 589.237 121.082C589.237 122.011 588.49 122.757 586.996 124.251L553.154 158.093C552.507 158.74 552.183 159.064 551.771 159.235C551.359 159.405 550.901 159.405 549.986 159.405L122.179 159.405C121.263 159.405 120.805 159.405 120.394 159.235C119.982 159.064 119.658 158.74 119.01 158.093L85.1688 124.251C83.675 122.757 82.9281 122.011 82.9281 121.082C82.9281 120.154 83.675 119.407 85.1688 117.914L119.01 84.072C119.658 83.4244 119.982 83.1006 120.394 82.93C120.805 82.7594 121.263 82.7594 122.179 82.7594Z"
            fill="white"
            fill-opacity="0.5"
            shape-rendering="crispEdges"
          />
          <path
            d="M122.179 82.7594L549.986 82.7594C550.901 82.7594 551.359 82.7594 551.771 82.93C552.183 83.1006 552.507 83.4244 553.154 84.072L586.996 117.914C588.49 119.407 589.237 120.154 589.237 121.082C589.237 122.011 588.49 122.757 586.996 124.251L553.154 158.093C552.507 158.74 552.183 159.064 551.771 159.235C551.359 159.405 550.901 159.405 549.986 159.405L122.179 159.405C121.263 159.405 120.805 159.405 120.394 159.235C119.982 159.064 119.658 158.74 119.01 158.093L85.1688 124.251C83.675 122.757 82.9281 122.011 82.9281 121.082C82.9281 120.154 83.675 119.407 85.1688 117.914L119.01 84.072C119.658 83.4244 119.982 83.1006 120.394 82.93C120.805 82.7594 121.263 82.7594 122.179 82.7594Z"
            :stroke="svgStroke"
            stroke-width="3"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <radialGradient
            xmlns="http://www.w3.org/2000/svg"
            id="paint0_radial_728_2432"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(322.082 172.887) rotate(66.4352) scale(92.634 401.916)"
          >
            <stop stop-color="#A14FF0" />
            <stop offset="0.296875" stop-color="rgba(227, 135, 193, 1)" />
            <stop offset="1" stop-color="#5ed398" />
          </radialGradient>
          <filter
            id="filter0_bd_728_1343"
            x="0.687439"
            y="0.517578"
            width="670.79"
            height="241.13"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="8" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_728_1343"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="40" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0196078 0 0 0 0 0.25098 0 0 0 0 0.541176 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_backgroundBlur_728_1343"
              result="effect2_dropShadow_728_1343"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_728_1343"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_728_1343"
            x1="-190.231"
            y1="-659.314"
            x2="-498.201"
            y2="-154.306"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5ed398" />
            <stop offset="0.270833" stop-color="#5ed398" />
            <stop offset="0.703125" stop-color="#5ed398" />
            <stop offset="0.953125" stop-color="#5ed398" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class WideDiamond extends Vue {
  @Prop({ default: false }) selected?: boolean

  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  get svgStroke() {
    if (!this.isDark) {
      return this.selected ? 'url(#paint0_linear_728_1343)' : '#D8DBF1'
    }
    return this.selected ? 'url(#paint0_radial_728_2432)' : '#626795'
  }
}
</script>

<style lang="scss" scoped>
svg {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  fill: rgba(255, 255, 255, 0.2);
}
.dark {
  svg {
    fill: rgb(16, 16, 16);
  }

  .diamond-container {
    &--selected {
      svg {
        fill: #004d26;
      }
    }
  }
}
.diamond-container {
  color: #403988;
  position: relative;
  &--selected {
    color: rgba(64, 57, 136, 1);
  }
}

.dark {
  .diamond-container {
    color: #fff;
  }
}
</style>
