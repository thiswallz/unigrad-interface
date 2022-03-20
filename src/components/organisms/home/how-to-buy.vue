<template>
  <section
    data-test-id="buy"
    class="buy tw-mt-64 sm:tw-mt-52 tw-flex tw-flex-row"
    id="buy"
  >
    <div class="tw-hidden sm:tw-block sm:tw-w-1/3 tw-relative">
      <img
        alt="coin"
        class="tw-w-4/5 tw-h-auto tw-left-1/2 tw-transform coins"
        :src="
          isDark
            ? `${imageSrc}buy/dark/coins.webp`
            : `${imageSrc}buy/coins.webp`
        "
      />
    </div>
    <div :key="isDark" class="animated-text sm:tw-w-2/3">
      <div
        class="
          text-h1
          tw-z-10 tw-text-center 
          sm:tw-text-left sm:tw-w-2/3
        "
      >
        Buy $RDT
      </div>
      <div
        class="
          sub-head
          tw-z-10 tw-pr-3  tw-text-center tw-mt-4
          sm:tw-text-justify sm:tw-max-w-lg
        "
      >
        Ridotto Token “$RDT” is currently available on Uniswap and PancakeSwap.
        It is also making its way to other blockchains and centralized
        exchanges.
      </div>
      <div>
        <div
          class="buy-container tw-flex tw-rounded-l-full tw-p-2 tw-mt-5 tw-h-20"
        >
          <a
            v-for="(option, index) of buyOptions"
            :key="'k' + index"
            :href="option.link"
            target="_blank"
            class="tw-pt-px"
          >
            <div
              class="svg-container"
              :class="isDark ? 'dark' : ''"
              v-html="option.icon"
              :style="{
                color: isDark ? option.hover.dark : option.hover.light,
              }"
            ></div>
          </a>
        </div>
      </div>
      <div
        class="sub-text tw-flex tw-text-left tw-text-lg tw-mt-8 tw-flex-col sm:tw-flex-row"
      >
        <div class="tw-text-center normal-text">
          Need help with buying tokens?
        </div>
        <a
          href="https://ridotto-io.medium.com/how-to-guide-on-buying-rdt-on-uniswap-69ca04d56492"
          target="_blank"
          class="modern-link tw-flex sm:tw-ml-3 tw-justify-center tw-mt-3 sm:tw-mt-0"
        >
          Find out more
          <img
            alt="see more"
            class="tw-h-3 tw-mt-2 tw-ml-2"
            :src="isDark ? `${imageSrc}dark/arrow.png` : `${imageSrc}arrow.png`"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import buyOptions from '~/data/buy-options.json'

@Component({
  components: {},
})
export default class HowToBuy extends Vue {
  buyOptions = buyOptions
  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  observe() {
    const isBrowser = typeof window !== 'undefined'
    if (isBrowser) {
      // ugly
      setTimeout(() => {
        const main = document.querySelector('.buy .animated-text')
        main?.classList?.remove('animated-transition')
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              main?.classList?.add('animated-transition')
              observer.disconnect()
              return
            }
            main?.classList?.remove('animated-transition')
          })
        })
        const wrapper = document.querySelector('.buy')
        if (wrapper) {
          observer.observe(wrapper)
        }
      })
    }
  }

  @Watch('isDark', { immediate: true })
  onThemeChanged(value: boolean) {
    this.observe()
  }
}
</script>

<style lang="scss" scoped>
.buy-container {
  background: linear-gradient(
    85.49deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 57.3%
  );
}
.dark {
  .buy-container {
    background: linear-gradient(
      90deg,
      rgba(25, 28, 112, 0.5) 0%,
      rgba(25, 28, 112, 0) 29.85%
    );
  }
}
.buy {
  height: 500px;
  @screen ss {
    height: 400px;
  }
  @screen sm {
    height: 320px;
  }
}

.animated-text {
  opacity: 0;
  right: -1000px;
}

@media (prefers-reduced-motion: no-preference) {
  .animated-text {
    transition: all 1s ease;
  }
}
.animated-transition {
  opacity: 1;
  position: relative;
  right: 0px;
}
.svg-container {
  ::v-deep svg {
    height: 60px !important;
    width: 75px !important;
    &:hover {
      rect:first-child {
        fill: currentColor !important;
      }
    }
  }
  &.dark {
    ::v-deep svg {
      fill: transparent !important;
      rect:first-child {
        fill: transparent !important;
      }
      &:hover {
        rect:first-child {
          fill: currentColor !important;
        }
      }
    }
  }
}
</style>
