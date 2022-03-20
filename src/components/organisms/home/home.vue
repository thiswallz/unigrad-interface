<template>
  <section data-test-id="home" class="home tw-relative" id="home">
    <animation
      :source="`/animation/RARE.json`"
      :autoload="true"
      :infinite="true"
      class="
        super-card
        tw-absolute tw-z-1
        sm:tw-top-36 sm:tw-right-4
        tw-transform
        sm:transform-none
        tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2
      "
    />
    <div class="tw-hidden sm:tw-inline sm:tw-fixed tw-z-50 sm:tw-right-20">
      <ul>
        <li
          v-for="(social, index) of socialIcons"
          :key="'k' + index"
          class="tw-mt-5"
        >
          <a
            :aria-label="social.name"
            target="_blank"
            :hreffix="social.link"
            class="hover:tw-opacity-50"
          >
            <img alt="" class="tw-w-5 hover:tw-opacity-50" :src="social.icon" />
          </a>
        </li>
      </ul>
      <div
        class="tw-z-10 tw-ml-3 tw-w-40 tw-mt-4 tw-bg-white tw-w-px tw-h-40"
      ></div>
    </div>
    <div class="animated-text sm:tw-w-4/5 md:tw-w-full half-title">
      <div class="tw-relative tw-font-semibold tw-text-center tw-flex">
        <div
          class="
            text-gradient
            tw-z-10 tw-ml-10 tw-text-rd-highlight
            sm:tw-text-left sm:tw-ml-0
          "
        >
          BUILT ON BLOCKCHAIN
        </div>
        <div
          class="
            right-line
            tw-bg-gradient-to-r
            tw-from-indigo-500
            tw-to-transparent
            tw-z-10
            tw-ml-4
            tw-w-40
            tw-h-px
            tw-mt-2
          "
        ></div>
      </div>
      <div
        class="
          text-h1
          tw-z-10 tw-text-center tw-mt-4
          sm:tw-text-left sm:tw-w-4/5
        "
      >
        Reinventing <br class="tw-block sm:tw-hidden" />
        Grading services
      </div>
      <div class="sub-head tw-z-10 tw-text-center tw-mt-4 sm:tw-text-left">
        Built on top of blockchain, unhackable protocol.
        <br class="sm:tw-block tw-hidden" />
        Unigrad offers proof of ownerships to collectors,
        <br class="sm:tw-block tw-hidden" />
        and future transactions fees for every trade to the grading company.<br
          class="sm:tw-block tw-hidden"
        /><br class="sm:tw-block" />

        Security for collectors and buyers,
        <br class="sm:tw-block tw-hidden" />
        since is unhackable, item cannot be fake
        <br class="sm:tw-block" />
        Grading companies today earns just when they grade, now you earn always.
        <br class="sm:tw-block tw-hidden" />
        <br class="sm:tw-block" />
        Collectors and companies earns tokens for every transaction made.
        <br class="sm:tw-block tw-hidden" />
        <br class="sm:tw-block" />
        Collectors can list items for sale and connect to Ebay/Amazon/Others,
        <br class="sm:tw-block tw-hidden" />
        With the unigrad seal you can be sure that the real owner is selling.
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Animation from "~/components/molecules/animation.vue";
import socials from "~/data/socials.json";

@Component({
  components: { Animation },
})
export default class Home extends Vue {
  imageSrc = "/images/";

  get isDark() {
    return this.$store.state.theme.color === "dark";
  }
  get socialIcons() {
    return socials.map((social) => ({
      ...social,
      icon: this.isDark
        ? `${this.imageSrc}socials/dark/${social.icon}`
        : `${this.imageSrc}socials/${social.icon}`,
    }));
  }
  mounted() {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      // ugly
      const main = document.querySelector(".home .animated-text");
      //main?.classList?.remove("animated-transition")
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            main?.classList?.add("animated-transition");
            observer.disconnect();
            return;
          }
          main?.classList?.remove("animated-transition");
        });
      });
      const wrapper = document.querySelector(".home");
      if (wrapper) {
        observer.observe(wrapper);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.super-card {
  width: 550px;
  top: 680px !important;
  @screen ss {
  width: 600px;
  top: 600px !important;
  }
  @screen sm {
    right: -450px !important;
    top: 200px !important;
    left: unset !important;
  }
    @screen md{
  width: 750px;
    right: -600px !important;
    }
}
.home {
  height: 820px;
  @screen xs {
    height: 740px;
  }
  @screen sm {
    height: 500px;
  }
  ::v-deep .animation-lottie {
    transition: opacity 1s linear;
  }
  ::v-deep .hidden-lottie {
    transition: visibility 0s 1s, opacity 1s linear;
  }
}
.home-links a {
  margin-right: 1rem;
}
.super-cube {
  width: 950px;
  left: calc(50% - 620px) !important;
  top: 390px !important;
  @screen xs {
    top: 290px !important;
  }
  @screen ss {
    top: 230px !important;
  }
  @screen sm {
    width: 1000px;
    left: unset !important;
    right: -150px !important;
    top: -140px !important;
  }
  @screen md {
    width: 1200px;
    top: -190px !important;
    right: calc(50% - 700px) !important;
  }
}
.dark {
  .right-line {
    @apply tw-from-white #{!important};
  }
}
.animated-text {
  opacity: 0;
}
@media (prefers-reduced-motion: no-preference) {
  .animated-text {
    transition: opacity 2s ease;
  }
}
.animated-transition {
  opacity: 1;
}
.half-title {
  max-width: 1000px;
}
</style>
