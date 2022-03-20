<template>
  <section
    data-test-id="news"
    class="news tw-pt-5 tw-mt-10 tw-relative"
    id="news"
  >
    <div class="tw-flex tw-flex-col">
      <div
        class="
          tw-flex tw-justify-center tw-relative tw-font-semibold tw-text-center
        "
      >
        <div
          class="
            text-gradient
            tw-z-10 tw-uppercase tw-text-rd-highlight
            sm:tw-text-left sm:tw-ml-0
          "
        >
          STAY UPDATED
        </div>
        <div
          class="
            right-line
            tw-bg-gradient-to-r
            tw-from-indigo-500
            tw-to-transparent
            tw-z-10
            tw-w-20
            tw-h-px
            tw-ml-1
            tw-mt-2
          "
        ></div>
      </div>
      <div
        class="
          text-h1
          tw-z-10 tw-text-center tw-mt-4 
        "
      >
        RIDOTTO NEWS
      </div>
      <div class="tw-relative tw-z-10 tw-text-xl tw-text-center tw-mt-4">
        <b-carousel-list
          class="
            tw-border-hidden
            tw-shadow-none
            tw-top-1
            tw-pt-10
            tw-pb-24
            lg:tw-pb-4
            tw-left-1/2
            tw-transform
            tw--translate-x-1/2
            tw-absolute
          "
          icon-pack="fa"
          :data="enrichedNews"
          :arrow="true"
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
           
            <simple-box
              :title="props.title"
              :selected="props.index === selectedIndexValue"
              :blurred="true"
              :scaled="
                (screenBreakPoint !== '' &&
                  props.index - 1 === selectedIndexValue) ||
                (screenBreakPoint !== '' &&
                  props.index + 1 === selectedIndexValue)
              "
              :sub-title="props.date"
              :description="props.description"
              :image="props.image"
              :link="props.link"
            />
          </template>
        </b-carousel-list>
      </div>
      <div
        class="
          tw-left-1/2
          tw-transform
          tw--translate-x-1/2
          tw-absolute
          tw-text-center
          tw-bottom-5
        "
      >
       <a href="https://ridotto-io.medium.com/" target="_blank"> <simple-button class="tw-w-36">view all news &#x3e; </simple-button></a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import SimpleButton from '~/components/atoms/simple-button.vue'
import SimpleBox from '~/components/atoms/simple-box.vue'
import { BreakPoint } from '~/model/break-points'
import news from '~/data/news.json'

@Component({
  components: { SimpleButton, SimpleBox },
})
export default class RecentNews extends Vue {
  screenBreakPoint: string = ''
  selected?: number = 0
  news = news

  private interv: any

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  get selectedIndexValue() {
    if (!this.selected) {
      if (this.screenBreakPoint === '' || this.screenBreakPoint === 'sm' ) {
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
    if (this.screenBreakPoint === 'md' ) {
      return this.selected + 1
    }
    return this.selected + 2
  }

  get itemsToShow() {
    if (this.screenBreakPoint === '' || this.screenBreakPoint === 'sm') {
      return 1
    }
    if (this.screenBreakPoint === 'md') {
      return 3
    }
    return 5
  }

  get enrichedNews() {
    if (this.screenBreakPoint === '' || this.screenBreakPoint === 'sm') {
      return news
    }
    if (this.screenBreakPoint === 'md') {
      return [{}, ...news, {}]
    } else {
      return [{}, {}, ...news, {}, {}]
    }
  }

  mounted() {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
      this.winWidth()
    }
  }

  unmounted() {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
      clearInterval(this.interv)
    }
  }

  @Watch('itemsToShow')
  onItemsToShowChanged(value: number) {
    if (value > 3) {
      this.selected = 2
    } else if (value === 1) {
      this.selected = 0
    } else {
      this.selected = 1
    }
  }

  private winWidth() {
    this.interv = setInterval(() => {
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
}
</script>

<style lang="scss" scoped>
.news {
  height: 820px;
  @screen ss {
  height: 790px;
  }
  @screen md{
    height: 780px;
  }
  @screen lg {
    height: 730px;
  }
  @screen xl{
    height: 750px;
  }
}

::v-deep .carousel-slide {
  display: flex;
  justify-content: center;
}
::v-deep .carousel-arrow {
  position: absolute;
  bottom: 40px;
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
