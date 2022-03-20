<template>
  <div @click="$emit('click')">
    <div class="selector tw-relative tw-h-8 tw-w-14">
      <div
        v-show="isDark"
        class="circle tw-absolute tw-z-10 tw-mt-px tw-top-px tw-left-0 tw-h-7 tw-w-7 tw-rounded-full"
      ></div>
      <div
        v-show="!isDark"
        class="circle tw-absolute tw-z-10 tw-mt-px tw-top-px tw-right-0 tw-h-7 tw-w-7 tw-rounded-full"
      ></div>
      <div class="">
        <v-icon
          v-show="isDark"
          name="lightbulb"
          class="tw-fill-current light-moon tw-z-20 tw-absolute tw-left-2 tw-top-2"
        />
        <v-icon
          v-show="!isDark"
          name="moon"
          class="tw-fill-current light-moon tw-z-20 tw-absolute tw-right-2 tw-top-2"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({
  components: {},
})
export default class ThemeSelector extends Vue {
  get isDark() {
    return this.$store.state.theme.color === "dark"
  }
}
</script>

<style lang="scss" scoped>
.selector {
  background: rgba(255, 255, 255, 0.2);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 141.429px;
  cursor: pointer;
  .circle {
    background: #403988;
    border: 0.803571px solid #403988;
    box-sizing: border-box;
    transition-property: opacity, left, top, height;
    transition-duration: 3s, 5s;
    transition: all 0.5s ease-out;
  }
  .light-moon {
    color: #e7ad3c;
  }
}
</style>
