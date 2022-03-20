<template>
  <b-carousel-list
    class="
      tw-border-hidden
      tw-shadow-none
      tw-top-1
      tw-pt-5
      tw-pb-5
      tw-left-1/2
      tw-transform
      tw--translate-x-1/2
      tw-absolute
      tw-w-full
      md:tw-w-5/5
      lg:tw-w-4/5
    "
    icon-pack="fa"
    :data="team"
    :arrow="true"
    :arrow-hover="false"
    :items-to-show="itemsToShow"
    :items-to-list="1"
    :repeat="false"
    :has-drag="true"
    :has-grayscale="false"
    :has-opacity="false"
    v-model="teamSelected"
  >
    <template slot="item" slot-scope="props">
      <team-member
        :item="props"
        :team-selected="teamSelected"
        :screen-break-point="screenBreakPoint"
      />
    </template>
  </b-carousel-list>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import TeamMember from '~/components/molecules/team-member.vue'
import { BreakPoint } from '~/model/break-points'
import team from '~/data/team.json'

@Component({
  components: { TeamMember },
})
export default class TeamList extends Vue {
  screenBreakPoint: string = ''
  teamSelected?: number = 0
  team = team
  private interv: any

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  get itemsToShow() {
    if (this.screenBreakPoint === 'xs') {
      this.teamSelected = 2
      return 1
    }
    if (this.screenBreakPoint === 'md' || this.screenBreakPoint === 'sm') {
      this.teamSelected = 1
      return 3
    }
    this.teamSelected = 0
    return 5
  }

  private winWidth() {
    this.interv = setInterval(() => {
      var w = window.innerWidth
      if (w <= BreakPoint.ss) {
        this.screenBreakPoint = 'xs'
      } else if (w >= BreakPoint.ss && w <= BreakPoint.sm) {
        this.screenBreakPoint = 'sm'
      } else if (w >= BreakPoint.sm && w <= BreakPoint.lg) {
        this.screenBreakPoint = 'md'
      } else {
        this.screenBreakPoint = 'lg'
      }
    }, 100)
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
}
</script>

<style lang="scss" scoped>
::v-deep .carousel-slide {
  display: flex;
  justify-content: center;
}
::v-deep .carousel-arrow {
  .has-icons-left {
    border: 1px solid #626795;
    left: 0px !important;
    height: 40px;
    width: 40px;
    background-color: transparent !important;
    background: url(/images/extra/arrow-left.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px;
    &:hover {
      opacity: 0.5;
    }
  }
  .has-icons-right {
    border: 1px solid #626795;
    right: 0px !important;
    height: 40px;
    width: 40px;
    background-color: transparent !important;
    background: url(/images/extra/arrow-right.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px;
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
