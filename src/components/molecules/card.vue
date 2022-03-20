<template>
  <div>
    <div
      v-if="display == 'column'"
      class="
        tw-m-auto
        tw-relative
        tw-p-2
        tw-rounded
        tw-overflow-hidden
        tw-border-2
        tw-border-transparent
      "
      :class="[
        alert && !isDark ? ' tw-border-rd-border-card' : '',
        alert && isDark ? ' tw-border-rd-border-card-dark' : ''
      ]"
      style="width: 300px"
    >
      <div
        v-if="isDisabled"
        class="
          tw-absolute
          tw-rounded
          tw-left-0
          tw-right-0
          tw-ml-auto
          tw-mr-auto
          tw-z-10
        "
        :class="
          isDark
            ? 'tw-bg-rd-transparent-dark-card'
            : 'tw-bg-rd-transparent-white-card'
        "
        style="width: calc(100% - 1rem);height: calc(100% - 1rem);"
      ></div>
      <div
        v-if="isDisabled"
        class="
          tw-absolute
          tw-left-0
          tw-right-0
          tw-ml-auto
          tw-mr-auto
          tw-text-center
          tw-top-32
          tw-uppercase
          tw-z-20
        "
      >
        <div class="text-gradient tw-font-medium" style="letter-spacing: 0.2em">
          <slot name="titleDisabled" />
        </div>
        <div
          class="tw-mt-2 tw-font-bold"
          :class="isDark ? 'tw-text-white' : 'tw-text-rd-main-dark'"
        >
          <slot name="descriptionDisabled" />
        </div>
      </div>
      <div
        v-if="alert"
        class="
          tw-absolute
          tw-text-center
          tw-top-0
          tw-uppercase
          tw-left-2/4
          tw-pt-1
          tw-px-2
          tw-pb-2
          tw-border-2
          tw-rounded-b
          tw-border-t-0
          tw-font-medium
          tw-z-20
          tw-whitespace-nowrap
        "
        style="transform: translate(-50%, 0%)"
        :class="[
          isDark
            ? 'tw-bg-rd-transparent-high-dark-card'
            : 'tw-bg-rd-transparent-high-white-card',
          alert && !isDark ? ' tw-border-rd-border-card' : '',
          alert && isDark ? ' tw-border-rd-border-card-dark' : ''
        ]"
      >
        {{ alert }}
      </div>
      <div class="tw-overflow-hidden tw-rounded">
        <div class="tw-h-72">
          <fancy-media :image="image" :video="video" />
        </div>
        <div
          class="tw-p-4 tw-bg-white tw-relative"
          :class="[
            !alert && isDark ? 'tw-bg-rd-main-dark' : '',
            alert && isDark ? 'tw-bg-rd-content-card-dark' : '',
            alert && !isDark ? 'tw-bg-rd-content-alert-card' : '',
            isSpecial ? 'bg-content-special-card' : ''
          ]"
        >
          <div
            class="tw-text-white"
            :class="[
              !isSpecial && !isDark
                ? 'tw-text-rd-subtext-dark'
                : 'tw-text-white'
            ]"
          >
            <slot name="title" />
          </div>
          <div class="tw-flex tw-mt-2">
            <div style="flex-basis: 75%;">
              <fancy-action-button
                v-if="buttonText"
                :name="buttonText"
                :styles="{
                  color: isSpecial ? 'white' : '#332f65',
                  colorDark: isSpecial ? 'white' : '#A6F2F9',
                  borderColor: isSpecial ? 'white' : '#332f65',
                  borderColorDark: isSpecial ? 'white' : '#A6F2F9'
                }"
              />
            </div>
            <div class="sub-text" style="flex-basis: 25%;">
              <div
                class="tw-font-bold"
                :class="[
                  isDark ? 'tw-text-white' : '',
                  !isDark && isSpecial ? 'tw-text-white' : ''
                ]"
              >
                <slot name="headerRightTop" />
              </div>
              <div
                class="tw-text-rd-subtext tw-font-medium"
                :class="[isSpecial ? 'tw-text-rd-pink' : '']"
              >
                <slot name="headerRightBottom" />
              </div>
            </div>
          </div>
          <div
            class="tw-my-4 tw-h-px"
            :class="[
              isDark & isSpecial
                ? 'tw-bg-rd-white-opacity'
                : 'tw-bg-rd-separator-card'
            ]"
          ></div>
          <div class="sub-text tw-font-medium">
            <fancy-content>
              <template #leftTop>
                <span :class="[isSpecial ? 'tw-text-white' : '']">
                  <slot name="bodyLeftTop" />1
                </span>
              </template>
              <template #leftBottom>
                <span :class="[isSpecial ? 'tw-text-rd-pink' : '']">
                  <slot name="bodyLeftBottom" />
                </span>
              </template>
              <template #rightTop>
                <span :class="[isSpecial ? 'tw-text-white' : '']">
                  <slot name="bodyRightTop" />
                </span>
              </template>
              <template #rightBottom>
                <span :class="[isSpecial ? 'tw-text-rd-pink' : '']">
                  <slot name="bodyRightBottom" />
                </span>
              </template>
            </fancy-content>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="display == 'list'"
      class="
        tw-relative
        tw-rounded
        tw-overflow-hidden
        tw-border-2
        tw-border-transparent
        tw-p-2
      "
      :class="[
        alert && !isDark ? ' tw-border-rd-border-card tw-p-2' : '',
        alert && isDark ? ' tw-border-rd-border-card-dark tw-p-2' : ''
      ]"
    >
      <div
        class="
          tw-bg-white tw-flex tw-h-36 tw-rounded-md
          lg:rounded-none lg:tw-p-2
          tw-relative
        "
        :class="[
          !alert && isDark ? 'tw-bg-rd-main-dark' : '',
          alert && isDark ? 'tw-bg-rd-content-card-dark' : '',
          alert && !isDark ? 'tw-bg-rd-content-alert-card' : '',
          isSpecial ? 'bg-content-special-card-line' : ''
        ]"
      >
        <div
          v-if="isDisabled"
          class="
            tw-absolute
            tw-left-0
            tw-right-0
            tw-ml-auto
            tw-mr-auto
            tw-z-10
            tw-rounded-md
            lg:rounded-none
            tw-w-full tw-h-full tw-top-0
          "
          :class="
            isDark
              ? 'tw-bg-rd-transparent-dark-card'
              : 'tw-bg-rd-transparent-white-card'
          "
        ></div>
        <div class="tw-relative" style="flex-basis: 30%; min-width: 7rem">
          <div
            v-if="isDisabled"
            class="
              tw-absolute tw-left-0 tw-right-0
              tw-text-center tw-top-0
              tw-uppercase tw-z-20
              tw-top-1/2
              tw-px-1
            "
            style="transform: translateY(-50%);"
          >
            <div
              class="text-gradient tw-font-medium tw-text-xs"
              style="letter-spacing: 0.2em"
            >
              <slot name="titleDisabled" />
            </div>
            <div
              class="tw-mt-2 tw-font-bold"
              :class="isDark ? 'tw-text-white' : 'tw-text-rd-main-dark'"
            >
              <slot name="descriptionDisabled" />
            </div>
          </div>
          <div
            v-if="alert"
            class="
              tw-absolute tw-text-center
              tw-uppercase tw-left-2/4 tw-pl-1 tw-pr-1 tw-pb-1
              sm:tw-pl-2 sm:tw-pr-2 sm:tw-pb-2 sm:tw-whitespace-nowrap
              tw-border-2
              tw-rounded-b
              tw-border-rd-border-card
              tw-border-t-0
              tw-font-medium
              tw-z-20
            "
            style="transform: translate(-50%, 0%)"
            :style="{
              top: screenBreakPoint == 'lg' ? '-1rem' : '-0.5rem'
            }"
            :class="[
              alert && !isDark ? ' tw-border-rd-border-card ' : '',
              alert && isDark ? ' tw-border-rd-border-card-dark ' : '',
              isDark
                ? 'tw-bg-rd-transparent-high-dark-card'
                : 'tw-bg-rd-transparent-high-white-card'
            ]"
          >
            {{ alert }}
          </div>
          <fancy-media
            :image="image"
            :video="video"
            class="tw-rounded-l-md lg:tw-rounded-none"
          />
        </div>
        <div
          class="tw-relative tw-p-3.5 lg:tw-flex lg:tw-items-center"
          style="flex-basis: 75%;"
        >
          <div style="flex-basis: 35%">
            <div
              class="lg:tw-text-2xl tw-text-white"
              :class="[
                !isSpecial && !isDark
                  ? 'tw-text-rd-subtext-dark'
                  : 'tw-text-white'
              ]"
            >
              <slot name="title" />
            </div>
            <div class="tw-mt-2">
              <fancy-action-button
                :styles="{
                  color: isSpecial ? 'white' : '#332f65',
                  colorDark: isSpecial ? 'white' : '#A6F2F9',
                  borderColor: isSpecial ? 'white' : '#332f65',
                  borderColorDark: isSpecial ? 'white' : '#A6F2F9'
                }"
                :name="buttonText"
              />
            </div>
          </div>
          <div class="tw-pt-3.5 lg:tw-pt-0 sub-text" style="flex-basis: 65%">
            <fancy-content :size="screenBreakPoint">
              <template #leftTop>
                <span :class="[isSpecial ? 'tw-text-white' : '']">
                  <span class="lg:tw-hidden">
                    <slot name="bodyCenterTop" />
                  </span>
                  <span class="tw-hidden lg:tw-block">
                    <slot name="bodyLeftTop" />
                  </span>
                </span>
              </template>
              <template #leftBottom>
                <span :class="[isSpecial ? 'tw-text-rd-pink' : '']">
                  <span class="lg:tw-hidden">
                    <slot name="bodyRightBottom" />
                  </span>
                  <span class="tw-hidden lg:tw-block">
                    <slot name="bodyLeftBottom" />
                  </span>
                </span>
              </template>
              <template #centerTop>
                <span :class="[isSpecial ? 'tw-text-white' : '']">
                  <slot name="bodyCenterTop" />
                </span>
              </template>
              <template #centerBottom>
                <span :class="[isSpecial ? 'tw-text-rd-pink' : '']">
                  <slot name="bodyCenterBottom" />
                </span>
              </template>
              <template #rightTop>
                <span :class="[isSpecial ? 'tw-text-white' : '']">
                  <slot name="headerRightTop" />
                </span>
              </template>
              <template #rightBottom>
                <span :class="[isSpecial ? 'tw-text-rd-pink' : '']">
                  <slot name="headerRightBottom" />
                </span>
              </template>
            </fancy-content>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import FancyMedia from "~/components/atoms/fancy-media.vue";
import FancyContent from "~/components/atoms/fancy-content.vue";
import FancyActionButton from "~/components/atoms/fancy-action-button.vue";
import { BreakPoint } from "~/model/break-points";

@Component({
  components: { FancyMedia, FancyContent, FancyActionButton }
})
export default class Card extends Vue {
  @Prop({ required: false, default: "column" }) display: string;
  @Prop({ required: false }) buttonText: string;
  @Prop({ required: false }) alert: string;
  @Prop({ required: false }) image: string;
  @Prop({ required: false }) video: string;
  @Prop({ required: false }) isDisabled: boolean;
  @Prop({ required: false }) isSelected: boolean;
  @Prop({ required: false }) isSpecial: boolean;
  screenBreakPoint: string = "";
  private interv: any;

  get isDark() {
    return this.$store.state.theme.color === "dark";
  }

  private winWidth() {
    this.interv = setInterval(() => {
      var w = window.innerWidth;
      if (w <= BreakPoint.ss) {
        this.screenBreakPoint = "xs";
      } else if (w >= BreakPoint.ss && w <= BreakPoint.sm) {
        this.screenBreakPoint = "sm";
      } else if (w >= BreakPoint.sm && w <= BreakPoint.lg) {
        this.screenBreakPoint = "md";
      } else {
        this.screenBreakPoint = "lg";
      }
    }, 100);
  }

  mounted() {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      this.winWidth();
    }
  }

  unmounted() {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      clearInterval(this.interv);
    }
  }
}
</script>
