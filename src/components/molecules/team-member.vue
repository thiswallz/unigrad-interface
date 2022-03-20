<template>
  <div
    :class="[
      item.index === teamIndexSelected
        ? 'tw-mt-2 tw-mb-3 selected-team tw-scale-125 tw-transform-gpu'
        : '',
    ]"
    class="poker-card  tw-bg-white tw-rounded-lg  tw-w-4/5 tw-relative "
    
  >
    <div class="tw-left-1/2 tw-transform tw-w-full tw-text-center" >
      <img
        :alt="item.name"
        :src="item.image"
        class="symbol tw-block tw-mx-auto tw-w-4/6 tw-mt-1"
      />
      <div class="tw-leading-3" >
        <div class="tw-text-xs tw-mt-1 tw-font-bold tw-uppercase">{{ item.name }}</div>
        <div class="tw-uppercase sub-text tw-font-bold" style="font-size:0.4em">
          {{ item.title }}
        </div>
      </div>
    </div>
    <img
      alt="card number"
      :src="
        isDark
          ? `/images/numbers/dark/${item.cardNumber}.png`
          : `/images/numbers/${item.cardNumber}.png`
      "
      class="tw-w-3 tw-top-1 tw-left-1 tw-absolute"
    />
    <img
      alt="card number"
      :src="
        isDark
          ? `/images/numbers/dark/${item.cardNumber}.png`
          : `/images/numbers/${item.cardNumber}.png`
      "
      class="
        tw-transform tw-rotate-180 tw-w-3 tw-bottom-1 tw-right-1 tw-absolute
      "
    />

    <div 
      class=" 
        trapezoid
        tw-w-20
        tw-h-10
        tw-left-1/2
        tw-transform
        tw--translate-x-1/2
        tw-absolute
        tw-bottom-0
        tw-flex
        tw-justify-evenly
        tw-content-end
        tw-items-end
      "
    >
      <a
        v-for="(social, index) of item.social"
        :key="index"
        :href="social.link"
        target="_blank"
      >
        <img
          alt="social link"
          :src="social.icon"
          class="tw-w-3 tw-h-3 tw-mb-1"
        />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({
  components: {},
})
export default class TeamMember extends Vue {
  @Prop() item: any
  @Prop({ default: false }) selected?: boolean
  @Prop({ default: "" }) screenBreakPoint?: string
  @Prop({ default: 0 }) teamSelected?: number

  get isDark() {
    return this.$store.state.theme.color === "dark"
  }

  get teamIndexSelected() {
    if (!this.teamSelected) {
      if (this.screenBreakPoint === "") {
        return 0
      }
      if (this.screenBreakPoint === "md" || this.screenBreakPoint === "sm") {
        return 1
      }
      return 2
    }
    if (this.screenBreakPoint === "") {
      return this.teamSelected
    }
    if (this.screenBreakPoint === "md" || this.screenBreakPoint === "sm") {
      return this.teamSelected + 1
    }
    return this.teamSelected + 2
  }
}
</script>

<style lang="scss">
.symbol{
  border: 1px solid ;
  border-radius: 5px;
  color: rgba(98, 103, 149, 0.5) !important;
}
</style>
