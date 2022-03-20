<template>
  <section
    data-test-id="solution"
    class="solution tw-mt-4 tw-mb-30"
    id="solution"
  >
    <div class="" style="max-width:1250px">
      <div class="mt-4 tw-flex tw-flex-col sm:tw-flex-row">
        <div class="sm:tw-w-1/2 sm:tw-flex ">
          <div class="fixed-box ">
            <div class="text-h1 tw-z-10 tw-text-center  sm:tw-text-left ">
              A POWERFUL APP
            </div>
            <div
              class="sub-head  tw-mb-10 sm:tw-mb-10 tw-z-10 tw-text-center tw-mt-6 sm:tw-text-left"
            >
              The utopian home of decentralized gambling, delivering the best
              in-class experience the Blockchain has to offer.
              <br class="sm:tw-block tw-hidden" />
            </div>

            <fancy-card
              v-for="(solution, index) of solutions"
              @click="handleSolutionSelection(solution)"
              :key="'k' + index"
              :selected="solution.selected"
            >
              <template #left>
                <img
                  alt="solution"
                  class="tw-ml-1 tw-pt-3 tw-p-2 tw-mt-3 xs:tw-p-2 xs:tw-pt-5 ss:tw-p-3 sm:tw-mt-0 tw--top-5"
                  :src="
                    isDark
                      ? `${imageSrc}cards/dark/${solution.icon}`
                      : `${imageSrc}cards/${solution.icon}`
                  "
                />
              </template>
              <template #main>
                <div class="fancy-title text-h3 ">
                  {{ solution.name }}
                </div>
                <div
                  class="tw-text-left sub-text tw-mt-2"
                  :class="solution.selected ? 'sub-text--active' : ''"
                >
                  {{ solution.description }}
                </div>
              </template>
            </fancy-card>
          </div>
        </div>
        <div class="tw-w-full sm:tw-w-1/2 tw-relative">
          <transition name="fade" mode="out-in">
            <video
              class="
              tw-left-1/2
              tw-transform
              tw--translate-x-1/2
              tw-absolute
              tw-top-14
              tw-right-20
"
              muted=""
              preload="auto"
              id="video"
              autoplay=""
              loop=""
              :key="solutionCover"
            >
              <source
                :key="solutionCover"
                :src="`/videos/${solutionCover}`"
                type="video/mp4"
              />
            </video>
          </transition>
          <div class="iphone"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import FancyCard from "~/components/atoms/fancy-card.vue";
import solutions from "~/data/solutions.json";

interface Solution {
  name: string;
  link: string;
  icon: string;
  cover: string;
  description: string;
  selected?: boolean;
}

@Component({
  components: { FancyCard },
})
export default class Solutions extends Vue {
  imageSrc = '/images/';
  solutions: Solution[] = solutions;

  get isDark() {
    return this.$store.state.theme.color === "dark";
  }
  get solutionCover() {
    return this.solutions.find((solution) => solution.selected)?.cover;
  }

  handleSolutionSelection(solution: Solution) {
    this.solutions = this.solutions.map((item) => {
      item.selected = false;
      if (solution.name === item.name) {
        item.selected = true;
      }
      return item;
    });
  }
}
</script>

<style lang="scss">
.solution {
  height: 1220px;
  @screen ss {
    height: 1220px;
  }
  @screen sm {
    height: 640px;
  }
  @screen md {
    height: 650px;
  }
  video {
    width: 240px !important;
    -webkit-box-reflect: below 25px
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.2)
      );
    @screen sm {
      left: unset !important;
      right: -38px !important;
      top: 27px !important;
    }
  }
}
.iphone {
  background: url(/images/iphone.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 300px 550px;
  height: 600px;
  width: 300px !important;
  position: absolute;
  z-index: 9;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top: 22px;
  -webkit-box-reflect: below -62px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
  @screen sm {
    margin-left: unset;
    margin-right: unset;
    left: unset;
    right: 50px;
    top: -10px;
  }
}

.fixed-box {
  @screen md {
    max-width: 500px;
  }
}
</style>
