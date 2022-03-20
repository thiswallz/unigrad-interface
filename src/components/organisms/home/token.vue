<template>
  <section
    data-test-id="token"
    class="token tw-pt-5 sm:tw-mt-20 tw-mt-20 tw-relative"
    id="token"
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
          tokenomics
        </div>
        <div
          class="
            right-line
            tw-bg-gradient-to-r
            tw-from-indigo-500
            tw-to-transparent
            tw-z-10
            tw-ml-4
            tw-w-20
            tw-h-px
            tw-mt-2
          "
        ></div>
      </div>
      <div
        class="
          text-h1
          tw-z-10
          tw-text-center
          tw-mt-4
          tw-ml-2
          tw-mr-2
        "
      >
        TOKEN MODEL
      </div>
      <div
        class="
          tw-relative
          tw-z-10
          tw-text-xl
          tw-text-center
          tw-mt-4
          tw-ml-10
          tw-mr-10
          sm:tw-ml-2
        "
      ></div>
      <div
        class="
          tw-grid tw-grid-cols-1
          md:tw-grid-cols-2
          tw-absolute
          tw-left-1/2
          tw-w-full
          ss:tw-w-4/5
          tw-max-w-5xl
          tw-transform
          tw-mt-28
          tw--translate-x-1/2
        "
      >
        <animation
          :re-play="true"
          :key="'t' + isDark"
          :source="
            isDark
              ? `/animation/dark/token.lottie.json`
              : `/animation/token.lottie.json`
          "
          class="
            tw-w-96 tw-absolute tw-left-1/2 tw--translate-x-1/2 tw-transform
            md:tw-relative
          "
        />
        <div class="tw-relative tw-pt-96 md:tw-pt-10"  >
          <fancy-table :rows="data" :isHeaderVisible="false" 
          class="
          ss:tw-max-w-sm
          tw-w-full
          ss:tw-absolute
          sm:tw-relative
          ss:tw-left-1/2
          ss:tw-transform
          ss:tw--translate-x-1/2
          
          ">
            <template #default="{ row, index, rows }">
              <div class="tw-flex tw-p-1 tw-text-xs" :class="index + 1 == rows.length ? '' : 'tw-mb-2.5'">
                <div class="tw-flex-none tw-w-10">
                  {{ row.porcent }}
                </div>  
                <div class="tw-flex-basis-1/4">
                  <div class="tw-flex table-token-title">
                    <div class="tw-mt-px">
                      <rhombus :color="row.iconColor" />
                    </div>
                    &nbsp;
                    {{ row.title }}
                  </div>
                </div>
                <div class="tw-flex-1 tw-text-right tw-font-bold">
                  {{ row.price }}
                </div>
              </div>
            </template>
          </fancy-table>
        </div>
      </div>
    </div>
    <div class="activator tw-absolute tw-bottom-56"></div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Animation from '~/components/molecules/animation.vue'
import Rhombus from '~/components/atoms/rhombus.vue'
import FancyTable from '~/components/molecules/fancy-table.vue'
import tokentable from "~/data/token-table.json";

@Component({
  components: { Animation, FancyTable, Rhombus },
})
export default class Token extends Vue {
  imageSrc = '/images/'
  data = tokentable

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>

<style lang="scss" scoped>
.token {
  height: 850px;

  @screen ss {
  height: 800px;
  }
  @screen md {
    height: 550px;
  }
}
.dark .table-token-title{
  color: #a7a9ba
}
</style>
