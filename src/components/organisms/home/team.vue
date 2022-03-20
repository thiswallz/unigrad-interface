<template>
  <section
    data-test-id="team"
    class="team ss:tw-pt-10 sm:tw-pt-20 md:tw-lr-10 md:tw-pr-10"
    id="team"
  >
    <div class="tw-relative tw-flex tw-flex-col">
      <div
        class="
          tw-flex
          tw-justify-center
          tw-relative
          tw-font-semibold
          tw-text-center
          tw-px-10
        "
      >
        <div
          class="
            text-gradient
            tw-z-10 tw-uppercase tw-text-rd-highlight
            tw-text-left
          "
        >
          passionate & dedicated experts
        </div>
        <div
          class="
            right-line
            tw-bg-gradient-to-r
            tw-from-indigo-500
            tw-to-transparent
            tw-z-10
            tw-ml-4
            tw-w-24
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
        "
      >
        Meet our team
      </div>
      <div
        class="
          tw-relative
          tw-z-10
          tw-text-xl
          tw-text-center
          tw-mt-4
          sm:tw-ml-2
          md:tw-left-1/2
          md:tw-transform
          md:tw--translate-x-1/2
          md:tw-absolute
          md:tw-w-full    
          md:tw-top-24
              
        "
        style="max-width:1200px;"
      >
        <team-list />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TeamList from '~/components/organisms/home/team-list.vue'

@Component({
  components: { TeamList },
})
export default class Team extends Vue {
  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>

<style lang="scss">
.team {
  height: 450px;
  @screen ss {
    height: 400px;
  }
  @screen sm {
    height: 480px;
  }
  @screen md {
    height: 500px;
  }
}
</style>
