<template>
  <section
    data-test-id="theyTalked"
    class="theyTalked tw-pt-14 tw-relative"
    id="theyTalked"
  >
    <div class="tw-flex tw-flex-col">
      <div class="text-h1 tw-z-10 tw-text-center tw-mt-4">
        As Seen On
      </div>
      <div class="sub-head tw-text-center tw-mt-5 ">
        See what industry influencers have to say about us:
      </div>
      <div class="tw-relative tw-z-10 tw-text-xl tw-text-center tw-mt-4">
        <b-carousel-list
          class="
            tw-border-hidden
            tw-shadow-none
            tw-top-1
            tw-pt-10
            tw-pb-24
            tw-left-1/2
            tw-transform
            tw--translate-x-1/2
            tw-absolute
            sm:tw-w-full
          "
          icon-pack="fa"
          :data="enrichedList"
          :arrow="false"
          :arrow-hover="false"
          :items-to-show="itemsToShow"
          :items-to-list="1"
          :repeat="false"
          :has-drag="true"
          :has-grayscale="false"
          :has-opacity="false"
          v-model="selected"
        >
          <template slot="item" slot-scope="props">
            <div class="tw-relative">
              <a
                v-if="props.link"
                :href="props.link"
                target="_blank"
                class="
                  button-circle
                  tw-absolute
                  tw-left-1/2
                  tw-top-1/2
                  tw-transform
                  tw--translate-x-1/2
                  tw--translate-y-1/2
                "
              >
                <div class="circle tw-rounded-full tw-w-14 tw-h-14"></div>
                <img
                  :alt="props.icon"
                  :src="props.icon"
                  class="
                    tw-absolute
                    tw-left-1/2
                    tw-top-1/2
                    tw-transform
                    tw--translate-x-1/2
                    tw--translate-y-1/2
                    tw-w-5
                  "
                />
              </a>
              <img
                v-if="props.thumbnail"
                alt="background"
                :src="props.thumbnail"
                class="tw-w-full tw-h-auto"
              />
            </div>
          </template>
        </b-carousel-list>
      </div>
      <div
        class="
          super-lines
          tw-left-1/2 tw-transform tw--translate-x-1/2 tw-absolute
          tw-bottom-0
          tw-flex tw-flex-wrap tw-gap-2 tw-justify-center tw-z-10
        "
      >
        <div
          v-for="(line, index) of lines"
          :key="index"
          class="line tw-h-2 tw-w-2 tw-rounded-full"
          :class="[lineActive === index ? 'line--active' : '']"
          @click="selectLine(index)"
        ></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import SimpleButton from '~/components/atoms/simple-button.vue'
import SimpleBox from '~/components/atoms/simple-box.vue'
import { BreakPoint } from '~/model/break-points'
import list from '~/data/theytalked.json'

@Component({
  components: { SimpleButton, SimpleBox },
})
export default class TheyTalked extends Vue {
  screenBreakPoint: string = ''
  selected: number = 0
  lineActive: number = 0
  list: any[] = list

  private interval: ReturnType<typeof setInterval> | null = null
  private intervalMove: ReturnType<typeof setInterval> | null = null

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  get lines() {
    const count = Math.ceil(this.list.length / this.itemsToShow)
    return Array.from(Array(count).keys())
  }

  get enrichedList() {
    if (this.screenBreakPoint === '') {
      return list
    }
    if (this.screenBreakPoint === 'md' || this.screenBreakPoint === 'sm') {
      return [...list, {}, {}]
    } else {
      return [...list, {}, {}, {}, {}]
    }
  }

  get selectedIndexValue() {
    if (!this.selected) {
      if (this.screenBreakPoint === '' || this.screenBreakPoint === 'sm') {
        return 0
      }
      if (this.screenBreakPoint === 'md') {
        return 1
      }
      return 2
    }
    if (this.screenBreakPoint === '' || this.screenBreakPoint === 'sm') {
      return this.selected
    }
    if (this.screenBreakPoint === 'md') {
      return this.selected + 1
    }
    return this.selected + 2
  }

  get itemsToShow(): number {
    if (this.screenBreakPoint === '' || this.screenBreakPoint === 'sm') {
      return 1
    }
    if (this.screenBreakPoint === 'md') {
      return 3
    }
    return 3
  }

  selectLine(index: number) {
    this.lineActive = index
    if (index === 0) {
      this.selected = 0
    }
    if (index) {
      const next = this.itemsToShow * index
      if (next >= list.length) {
        this.selected = list.length
      } else {
        this.selected = next
      }
    }
  }

  mounted() {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
      this.winWidth()
      this.intervalMove = setInterval(() => {
        if (this.lines.length <= 1 + this.lineActive) {
          this.selectLine(0)
        } else {
          if (this.lines.length === this.lineActive + 1) {
            this.selectLine(this.lineActive)
          } else {
            this.selectLine(this.lineActive + 1)
          }
        }
      }, 5000)
    }
  }

  unmounted() {
    if (this.interval) {
      clearInterval(this.interval)
      clearInterval(this.intervalMove)
    }
  }

  private winWidth() {
    this.interval = setInterval(() => {
      var w = window.innerWidth
      if (w <= BreakPoint.ss) {
        this.screenBreakPoint = ''
      } else if (w >= BreakPoint.ss && w <= BreakPoint.sm) {
        this.screenBreakPoint = 'sm'
      } else if (w >= BreakPoint.sm && w <= BreakPoint.lg) {
        this.screenBreakPoint = 'md'
      } else {
        this.screenBreakPoint = 'lg'
      }
    }, 100)
  }

  @Watch('selected')
  onSelectChanged(value: number) {
    if(this.itemsToShow>1){
      const r = Math.ceil(this.list.length / this.itemsToShow)
      const page = Math.floor((r + value) / this.itemsToShow)
      this.lineActive = page - 1
    }else{
      this.lineActive =  value
    }
 }
}
</script>

<style lang="scss" scoped>
.theyTalked {
  height: 450px;
  @screen ss {
    height: 640px;
  }
  @screen sm {
    height: 480px;
  }
  @screen md {
    height: 500px;
  }
  @screen lg {
    height: 520px;
  }
  @screen xl {
    height: 580px;
  }
}
.super-lines {
  @screen sm {
    display: flex !important;
  }
  .line {
    cursor: pointer;
    background: #626795;
    &--active {
      background: #2d53b2;
    }
    &:hover {
      opacity: 0.9;
    }
  }
}
.button-circle {
  &:hover {
    opacity: 0.9;
  }
}
.circle {
  background: #332f65;
}
.dark {
  .circle {
    background: #a14ff0;
  }
  .super-lines {
    .line {
      background: #626795;
      &--active {
        background: #a6f2f9;
      }
    }
  }
}
::v-deep .carousel-slide {
  display: flex;
  justify-content: center;
}
::v-deep .carousel-arrow {
  position: absolute;
  bottom: 20px;
  top: unset;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  @screen lg {
    bottom: unset;
    position: unset;
  }
  .has-icons-left {
    border: 1px solid #626795;
    left: calc(50% - 60px) !important;
    height: 40px;
    width: 40px;
    background-color: transparent !important;
    background: url(/images/extra/arrow-left.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px;
    @screen lg {
      left: 10px !important;
    }
    &:hover {
      opacity: 0.5;
    }
  }
  .has-icons-right {
    border: 1px solid #626795;
    right: calc(50% - 60px) !important;
    height: 40px;
    width: 40px;
    background-color: transparent !important;
    background: url(/images/extra/arrow-right.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px;
    @screen lg {
      right: 10px !important;
    }
    &:hover {
      opacity: 0.5;
    }
  }
}
.dark {
  ::v-deep .carousel-arrow {
    .has-icons-left {
      border: 1px solid #b9bbce;
    }
    .has-icons-right {
      border: 1px solid #b9bbce;
    }
  }
}
</style>
