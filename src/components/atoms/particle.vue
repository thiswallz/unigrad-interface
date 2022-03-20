<template>
  <svg
    width="303"
    height="283"
    viewBox="0 0 303 283"
    fill="none"

    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_f_231_1109)">
      <ellipse
        cx="151.747"
        cy="141.619"
        rx="57.4166"
        ry="31.1213"
        transform="rotate(-33.4562 151.747 141.619)"
        :fill="color"
      />
    </g>
    <defs>
      <filter
        id="filter0_f_231_1109"
        x="0.850586"
        y="0.676758"
        width="301.793"
        height="281.884"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation="50"
          result="effect1_foregroundBlur_231_1109"
        />
      </filter>
    </defs>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Particle extends Vue {
  get color() {
    return this.$store.state.theme.color === 'dark' ? '#8000FF' : '#FFC0CB'
  }
}
</script>
