<template>
  <section
    data-test-id="whitepaper"
    class="whitepaper md:tw-mt-10 tw-mt-24"
    id="whitepaper"
  >
    <div class="content-flex-whitepaper">
      <div class="tw-self-center">
        <div
          class="
            text-h1
            tw-z-10 tw-text-center
            md:tw-text-left
          "
        >
          Whitepaper
        </div>
        <div
          class="
            sub-text
            md:tw-max-w-lg
            tw-z-10 tw-text-xl tw-text-center
            md:tw-text-left
            tw-mt-4
            md:tw-ml-0
          "
        >
          A thorough deep dive on everything that makes Ridotto an absolute
          industry shaker.
        </div>
        <div class="tw-hidden md:tw-block btn-content">
          <div class="tw-text-center tw-mt-4">
            <a href="/docs/whitepaper_ridotto.pdf" target="_blank">
              <simple-button class="tw-w-36">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.64327 10.8745C8.88082 10.8745 9.07353 11.067 9.07353 11.3046C9.07353 11.5421 8.88105 11.7348 8.6435 11.7348L1.18763 11.737C0.950059 11.7371 0.757353 11.5445 0.757353 11.307C0.757353 11.0694 0.949812 10.8768 1.18737 10.8767L8.64327 10.8745ZM4.85706 0.271019L4.91544 0.26709C5.13321 0.26709 5.31318 0.428917 5.34169 0.638869L5.34559 0.697237L5.34501 8.546L7.47958 6.4123C7.63231 6.25957 7.8713 6.24569 8.03969 6.37066L8.08792 6.41235C8.24059 6.56509 8.25447 6.80402 8.1295 6.97241L8.08786 7.02064L5.22153 9.88634C5.06892 10.039 4.8301 10.0529 4.66171 9.92815L4.61348 9.88651L1.74384 7.02081C1.57575 6.85294 1.57556 6.58063 1.74343 6.41253C1.89603 6.25968 2.13499 6.24563 2.30347 6.37049L2.35175 6.41207L4.48472 8.54198L4.48529 0.697237C4.48529 0.479474 4.64714 0.2995 4.85706 0.271019L4.91544 0.26709L4.85706 0.271019Z"
                    fill="white"
                  />
                </svg>
                download pdf
              </simple-button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="p-rel">
          <animation
            :key="'wp-' + isDark"
            :source="
              isDark
                ? `/animation/dark/whitepaper_start.json`
                : `/animation/whitepaper_start.json`
            "
            :alive="2"
            :autoload="true"
            :unobserve="true"
            :re-play="true"
            class="tw-absolute sm:tw--left-16 sm:tw--top-10 tw-z-1"
          />
          <animation
            :key="'wpl-' + isDark"
            :source="
              isDark
                ? `/animation/dark/whitepaper_loop.json`
                : `/animation/whitepaper_loop.json`
            "
            :delay="2"
            :autoload="true"
            :re-play="true"
            :unobserve="true"
            :infinite="true"
            class="tw-absolute sm:tw--left-16 sm:tw--top-10 tw-z-1"
          />
        </div>
      </div>
      <div
        class="
            tw-block 
            md:tw-hidden 
            btn-content 
            tw-pt-32 
            tw-relative
            tw-text-center
            sm:tw-pr-5
            tw-bottom-1
            md:tw-bottom-5
            lg:tw-bottom-20"
      >
        <a href="/docs/whitepaper_ridotto.pdf" target="_blank">
          <simple-button class="tw-w-36 tw-m-auto">
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.64327 10.8745C8.88082 10.8745 9.07353 11.067 9.07353 11.3046C9.07353 11.5421 8.88105 11.7348 8.6435 11.7348L1.18763 11.737C0.950059 11.7371 0.757353 11.5445 0.757353 11.307C0.757353 11.0694 0.949812 10.8768 1.18737 10.8767L8.64327 10.8745ZM4.85706 0.271019L4.91544 0.26709C5.13321 0.26709 5.31318 0.428917 5.34169 0.638869L5.34559 0.697237L5.34501 8.546L7.47958 6.4123C7.63231 6.25957 7.8713 6.24569 8.03969 6.37066L8.08792 6.41235C8.24059 6.56509 8.25447 6.80402 8.1295 6.97241L8.08786 7.02064L5.22153 9.88634C5.06892 10.039 4.8301 10.0529 4.66171 9.92815L4.61348 9.88651L1.74384 7.02081C1.57575 6.85294 1.57556 6.58063 1.74343 6.41253C1.89603 6.25968 2.13499 6.24563 2.30347 6.37049L2.35175 6.41207L4.48472 8.54198L4.48529 0.697237C4.48529 0.479474 4.64714 0.2995 4.85706 0.271019L4.91544 0.26709L4.85706 0.271019Z"
                fill="white"
              />
            </svg>
            download pdf
          </simple-button>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import SimpleButton from '~/components/atoms/simple-button'
import Animation from '~/components/molecules/animation.vue'

@Component({
  components: { SimpleButton, Animation },
})
export default class Whitepaper extends Vue {
  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>

<style lang="scss" scoped>
.content-flex-whitepaper {
  @screen md {
    display: flex;
    flex-direction: row;
    > div {
      width: 50%;
    }
  }
}
.p-rel {
  position: relative;
  height: 400px;
  > div {
    transform: translateX(-50%);
    left: 50% !important;
    top: -10px !important;
  }
  ::v-deep .animation-lottie {
    width: 700px !important;
  }
}
.btn-content {
  svg {
    display: inline;
  }
}
</style>
