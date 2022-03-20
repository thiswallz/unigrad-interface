<template>
  <div>
    <b-navbar
      :fixed-top="true"
      class="
        header
        tw-pr-3
        md:tw-pr-16
        tw-pl-3
        md:tw-pl-20
        lg:tw-pr-36 lg:tw-pl-36
      "
    >
      <template #brand>
        <a
          aria-label="Logo"
          href="/"
          class="logo tw-mt-5 md:tw-mt-0"
          :class="!isDark ? 'logo--dark' : ''"
        ></a>
     
      </template>
      <template #start> </template>

      <template #end> </template>
    </b-navbar>
    <div
      class="
        layout
        tw-ml-5 tw-mr-5
        md:tw-mr-20 md:tw-ml-20
        lg:tw-mr-36 lg:tw-ml-36
      "
    >
      <slot />
    </div>
    <svg
      class="tw-absolute tw-top-6 bg-gradient tw-z-1"
      width="627"
      height="686"
      viewBox="0 0 627 686"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.7" filter="url(#filter0_f_231_1102)">
        <path
          d="M430.516 -92L145.702 138.01L42.8416 489.354L-53.9986 4.84021L430.516 -92Z"
          fill="yellowgreen"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_231_1102"
          x="-249.999"
          y="-288"
          width="876.514"
          height="973.354"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="98"
            result="effect1_foregroundBlur_231_1102"
          />
        </filter>
      </defs>
    </svg>
    <div class="particles tw-z-0">
      <particle class="tw-left-80 tw-absolute bg-gradient-fast tw-top-56" />
      <particle class="tw-right-40 tw-absolute bg-gradient tw-top-96" />
      <particle
        class="tw-right-24 tw-absolute bg-gradient tw-top-96 sm:tw-top-48"
      />
      <particle
        class="tw-right-10 tw-absolute bg-gradient tw-top-96 sm:tw-top-48"
      />
      <particle
        class="tw-right-0 tw-absolute bg-gradient tw-top-96 sm:tw-top-48"
      />
    </div>
    <v-footer
      class="
        md:tw-pr-20 md:tw-pl-20
        lg:tw-pl-36 lg:tw-pr-36
        footer
      "
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ThemeSelector from "~/components/atoms/theme-selector.vue";
import Particle from "~/components/atoms/particle.vue";
import Footer from "./Footer.vue";

@Component({
  components: { ThemeSelector, Particle, "v-footer": Footer },
})
export default class Default extends Vue {
  get currentPath() {
    return this.$route.path;
  }

  get isDark() {
    return this.$store.state.theme.color === "dark";
  }

  mounted() {
    const isBrowser = typeof window !== "undefined";
    this.checkTheme();
    if (isBrowser) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
          this.checkTheme();
        });
    }
  }

  handleChangeTheme() {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      if (this.isDark) {
        localStorage.setItem("theme", "light");
      } else {
        localStorage.setItem("theme", "dark");
      }
      this.checkTheme();
    }
  }

  checkTheme() {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        this.$store.commit("theme/setTheme", "dark");
      } else {
        setTimeout(() => {
          document.documentElement.classList.remove("dark");
        });
        this.$store.commit("theme/setTheme", "light");
      }
    }
  }
  handleScroll(goTo: string) {
    setTimeout(() => {
      document.querySelector(goTo)?.scrollIntoView({
        behavior: "smooth",
      });
    });
  }
}
</script>

<style lang="scss">
.navbar-start {
  @screen md {
    margin-left: 100px;
  }
  @screen lg {
    margin-left: 200px;
  }
}
#app .header,
#app .footer {
  @screen xl {
    padding-left: 15% !important;
    padding-right: 15% !important;
  }
  @screen 2xl {
    padding-left: 20% !important;
    padding-right: 20% !important;
  }
}
#app .layout {
  @screen xl {
    margin-left: 15% !important;
    margin-right: 15% !important;
  }
  @screen 2xl {
    margin-left: 20% !important;
    margin-right: 20% !important;
  }
}
.navbar-dropdown {
  .navbar-item {
    &:hover {
      background: linear-gradient(
          359.41deg,
          rgba(227, 135, 193, 0.2) 0.51%,
          rgba(255, 216, 89, 0.2) 52.03%,
          rgba(105, 9, 198, 0.2) 54.09%
        ),
        linear-gradient(359.41deg, #4509c6 0.51%, #6909c6 99.44%);
      box-shadow: 0px 16px 16px rgba(105, 9, 198, 0.2);
      color: #fff !important;
    }
  }
}
.navbar-item {
  text-transform: uppercase;
  font-weight: 500;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: transparent !important;
  opacity: 0.7;
}
.navbar-item.has-dropdown:focus .navbar-link,
.navbar-item.has-dropdown:hover .navbar-link,
.navbar-item.has-dropdown.is-active .navbar-link {
  background-color: transparent !important;
}
.navbar-dropdown {
  border-top: 2px solid transparent !important;
  background-color: rgba(255, 255, 255, 1) !important;
  opacity: 1;
}
.navbar-item,
.navbar-link {
  color: unset !important;
  opacity: 0.9;
}
.navbar-menu.is-active {
  background: unset;
}

.logo {
  width: 200px;
  background-size: contain !important;
  background: url(/images/logo.png) center no-repeat;
}

.header.navbar {
  margin-bottom: 20px;
  min-height: 80px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.buttons {
  margin-left: 20px;
  svg {
    cursor: pointer;
    @apply tw-inline;
  }
}
.dark {
  .navbar-dropdown {
    .navbar-item {
      &:hover {
        background: linear-gradient(
          157.51deg,
          rgba(3, 34, 210, 0.3) 6.95%,
          rgba(161, 79, 240, 0.3) 53.91%,
          rgba(105, 9, 198, 0.3) 81.69%
        );
        box-shadow: 0px 24px 64px rgba(98, 17, 100, 0.58);
      }
    }
  }
  a.navbar-burger {
    @apply tw-text-white;
  }
  .navbar-dropdown {
    background-color: #010022 !important;
    opacity: 1 !important;
  }
}
.header {
  .navbar-link:not(.is-arrowless)::after {
    border-color: #403988 !important;
  }
}
.header {
  .navbar-link:not(.is-arrowless)::after,
  .select:not(.is-multiple):not(.is-loading)::after {
    border: 2px solid transparent;
    border-radius: 2px;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: 0.625em;
    margin-top: -0.4375em;
    pointer-events: none;
    position: absolute;
    top: 50%;
    transform: rotate(-45deg);
    transform-origin: center;
    width: 0.625em;
  }
}
.header {
  .selected-line {
    background: linear-gradient(
      103.62deg,
      #a14ff0 -40.41%,
      #7455ef -10.59%,
      #dec79f 29.18%,
      #6909c6 95.93%
    );
    animation: animated-border 16s ease infinite;
    background-size: 200% 200%;
    position: absolute;
    bottom: -2px;
    left: 8px;
    height: 3px !important;
  }

  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
.dark {
  .header {
    .navbar-link:not(.is-arrowless)::after {
      border-color: #fff !important;
    }
    .selected-line {
      background: linear-gradient(
        122.69deg,
        rgba(161, 79, 240, 1) 30.52%,
        rgba(227, 135, 193, 1) 51.49%,
        rgba(105, 9, 198, 1) 69.61%
      );
      animation: animated-border 16s ease infinite;
      background-size: 200% 200%;
    }
    border-bottom: 1px solid rgba(185, 187, 205, 0.5);
  }
}
.bg-gradient {
  animation: fadein 12s ease-in alternate infinite;
}
.bg-gradient-fast {
  animation: fadein 11.5s ease-out alternate infinite;
}
</style>
