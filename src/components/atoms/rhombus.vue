<template>
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8.48535"
        width="8"
        height="8"
        transform="rotate(45 8.48535 0)"
        :fill="color"
      />
    </svg>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Rhombus extends Vue {
  @Prop({ default: 'red' }) color?: string
}
</script>
