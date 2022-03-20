<template>
  <section
    data-test-id="roadmap"
    class="roadmap tw-mt-36"
    id="roadmap"
  >
    <div :key="isDark" class="roadmap-child">
      <div class="tw-flex tw-flex-col">
        <div
          class="
            tw-flex
            tw-justify-center
            tw-relative
            tw-font-semibold
            tw-text-center
          "
        >
          <div
            class="
              text-gradient
              tw-z-10 tw-uppercase tw-text-rd-highlight
              sm:tw-text-left sm:tw-ml-0
            "
          >
            {{ subtitle }}
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
              tw-mt-2
              tw-ml-2
            "
          ></div>
        </div>
        <div
          class="text-h1 tw-z-10 tw-text-center tw-mt-4"
        >
          ROADMAP
        </div>
        <div class="tw-relative tw-z-10 tw-text-xl tw-text-center tw-mt-4">
          <div
            class="
              roadmap-container
              tw-absolute tw-left-1/2 tw-transform tw--translate-x-1/2 tw-w-96
              md:tw-w-full
            "
          >
            <diamond
              :main="true"
              class="
                tw-left-1/2
                tw-transform
                tw--translate-x-1/2
                tw-absolute
                tw-mt-10
                tw-text-center
              "
            >
              <img
                alt="logo"
                class="tw-pt-0"
                :style="`min-width: 25px;`"
                :src="`${imageSrc}glogo.png`"
              />
            </diamond>
            <div
              class="
                roadmap-main
                md:tw-left-1/2
                md:tw-transform
                md:tw--translate-x-1/2
                md:tw-absolute
                md:tw-text-center
                md:tw-w-full
              "
            >
              <div
                class="
                  tw-z-1
                  backbone
                  tw-mt-3 tw-absolute
                  md:tw-h-full
                  tw-invisible tw-left-1/2 tw-transform tw--translate-x-1/2
                  md:tw-visible
                "
              ></div>
              <svg
                class="
                  tw--bottom-40
                  tw-z-1
                  tw-mt-2
                  tw-absolute
                  tw-invisible
                  tw-left-1/2
                  tw-transform
                  tw--translate-x-1/2
                  md:tw-visible
                "
                width="10"
                height="140"
                viewBox="0 0 12 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_231_2099)">
                  <path
                    d="M5.99988 132V0"
                    stroke="url(#paint0_radial_231_2099)"
                    stroke-width="4"
                    stroke-dasharray="2 2"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_231_2099"
                    x="-0.00012207"
                    y="0"
                    width="12"
                    height="140"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_231_2099"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_231_2099"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_231_2099"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(6.64512 63.871) rotate(89.8296) scale(100.065 2.09857)"
                  >
                    <stop stop-color="#A14FF0" />
                    <stop offset="0.296875" stop-color="#E387C1" />
                    <stop offset="1" stop-color="#6909C6" />
                  </radialGradient>
                </defs>
              </svg>

              <template v-for="(item, index) of roadmap">
                <roadmap-element
                  :key="index"
                  :left="index % 2 === 0 ? true : false"
                  :selected="item.status === 'current'"
                  :disabled="item.status === 'past'"
                  :title="item.title"
                  :class="[
                    index % 2 === 0
                      ? 'md-alignment md-alignment--right md:tw-right-1/2'
                      : ' md-alignment md-alignment--left md:tw-left-1/2',
                  ]"
                >
                  <template #date>
                    <div>{{ item.year }}</div>
                    <div>{{ item.q }}</div>
                  </template>
                </roadmap-element>
                <ul
                  :key="'ul'+index"
                  class="tw-list-disc tw-list-inside tw-mt-2"
                  :class="[
                    index % 2 == 0
                      ? 'tw-text-left tw-ml-10 right'
                      : 'tw-text-left tw-ml-20 left',
                  ]"
                >
                  <li
                    v-for="(note, j) of item.notes"
                    :key="`${index}${j}`"
                    class="sub-text tw-text-sm"
                  >
                    {{ note }}
                  </li>
                </ul>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Diamond from '~/components/atoms/diamond.vue'
import WideDiamond from '~/components/atoms/wide-diamond.vue'
import RoadmapElement from '~/components/molecules/roadmap-element.vue'
import roadmap from '~/data/roadmap.json'

@Component({
  components: { Diamond, WideDiamond, RoadmapElement },
})
export default class Roadmap extends Vue {
  roadmap = roadmap.data
  subtitle = roadmap.subtitle
  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  observe() {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
      // ugly
      setTimeout(() => {
        const roadmap = document.querySelector('.roadmap-child')
        roadmap?.classList?.remove('roadmap-transition')
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              roadmap?.classList?.add('roadmap-transition')
              observer.disconnect()
              return
            }
            roadmap?.classList?.remove('roadmap-transition')
          })
        })
        const wrapper = document.querySelector('.roadmap')
        if (wrapper) {
          observer.observe(wrapper)
        }
        setInterval(() => {
          const height = document.querySelector('.roadmap-main')?.clientHeight
          const width = document.querySelector('.roadmap')?.clientWidth
          if (width && width <= 500 && height) {
            document
              .getElementById('roadmap')
              ?.setAttribute('style', `height:${height + 190}px !important;`)
          } else if (height) {
            document
              .getElementById('roadmap')
              ?.setAttribute('style', `height:${height + 350}px !important;`)
          }
        }, 100)
      })
    }
  }
  @Watch('isDark', { immediate: true })
  onThemeChanged(value: boolean) {
    this.observe()
  }
}
</script>

<style lang="scss">
.roadmap {
  height: 1200px;
  @screen ss {
    height: 1200px;
  }
}
.roadmap-child {
  opacity: 0;
  transform: scale(0.9) !important;
  @screen ss {
    transform: scale(1) !important;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .roadmap-child {
    transition: opacity 1.6s ease;
  }
}
.roadmap-transition {
  opacity: 1;
  transform: none;
}

.backbone {
  background: #5ed398;
  width: 2px;
  /*
  rgba(227, 135, 193, 1)
  rgba(105, 9, 198, 1)
  */
}
.md-alignment {
  margin-top: 30px;
  @screen ss {
    margin-top: 55px;
  }
  @screen md {
    &--right {
      margin-right: -32px;
    }
    &--left {
      margin-left: -32px;
    }
  }
}
ul {
  &.left {
    @screen md {
      width: 300px;
      margin-left: calc(50% + 60px) !important;
    }
  }
  &.right {
    @screen md {
      width: 300px;
      margin-left: calc(50% - 300px) !important;
    }
  }
  li {
    list-style-position: outside;
  }
}
.dark{
  .sub-text{
    color:#bdbdc9 !important;
  }
}
</style>
