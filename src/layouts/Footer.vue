<template>
  <div id="footer" class="tw-mt-10" :class="isDark ? 'bgDark' : ''">
 
    <!-- start container -->
    <div class="tw-pt-1 tw-pb-5 tw-pl-5 tw-pr-5">
      <div
        class="
          lg:tw-flex
          md:tw-flex
          tw-overflow-hidden 
          tw-text-white 
          tw-pt-16 
          tw-pb-5"
      >
        <div
          class="
            containerText
            tw-w-full
            lg:tw-w-54
            tw-leading-5
            tw-pb-4
            sub-text"
          style="font-size:.8em"
        >
          <!-- Column 1 Content -->

          <img
            style="max-width: 140px; height: auto"
            class=" sub-text tw-pb-4 md:tw-w-1/2"
            src="/images/logo.png"
            alt="Logo"
          />Based on complete transparency, <br />
          anonymity, security, and fairness,<br />Unigrad is a fully scalable
          alternative
          <br />
          to centralized proof of ownership for grading <br />
          companies.<br /><br />
          Listing, Blochain seal and more.
        </div>
        <div
          class="
            textTitle
            tw-overflow-hidden
            sm:tw-w-1/2
            md:tw-w-1/2
            lg:tw-w-96
            lg:tw-mr-36
          "
        >
          <!-- Column 2 Content -->
          <h4 class="tw-text-white tw-text-base tw-font-bold">TECHNOLOGY</h4>
          <ul class="nav navbar-nav">
            <li id="navi-2" class="tw-leading-7 tw-mt-4 tw-text-sm">
              <a
                class="textLink  tw-font-thin hover:tw-opacity-50"
              >
                Audit
              </a>
            </li>
            <li id="navi-1" class="tw-leading-7 tw-mt-2 tw-text-sm">
              <a
                class="textLink  tw-font-thin hover:tw-opacity-50"
                >Whitepaper</a
              >
            </li>
          </ul>
        </div>
        <div
          class="
            textTitle
            tw-w-full tw-overflow-hidden
            sm:tw-px-1 sm:tw-w-1/2
            lg:tw-w-1/2
            tw-pb-2
            lg:tw-mr-16
            tw-mt-8
            md:tw-mt-0"
        >
          <!-- Column 3 Content -->
          <h4 class="tw-text-white  tw-text-base  tw-pb-4 tw-font-bold">
            LEGAL
          </h4>
          <ul class="">
            <li id="navi-2" class="tw-leading-7 tw-mb-2 tw-text-sm">
              <a
                class="textLink lg:tw-mt-2 tw-font-thin hover:tw-opacity-50"
              >
                Privacy Policy
              </a>
            </li>
            <li id="navi-1" class="tw-leading-6 tw-mt-2 tw-text-sm">
              <a
                class="textLink  tw-font-thin hover:tw-opacity-50"
                >Terms of Use</a
              >
            </li>
          </ul>
        </div>
        <div
          class="
            textTitle
            tw-w-full 
            tw-overflow-hidden
            lg:tw-px-2 lg:tw-w-1/2
            tw-pb-6
            tw-mt-8
            md:tw-mt-0"
        >
          <!-- Column 4 Content -->
          <h4 class="tw-text-white tw-text-base tw-mt-0 tw-font-bold">
            CONTACT
          </h4>
          <ul>
            <li id="navi-2" class="tw-leading-5 tw-mt-4 tw-text-sm">
              <a class=" tw-text-white text-small hover:tw-opacity-50">
                Soon 
              </a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Start footer bottom -->
      <!-- end container -->
    </div>
    <div
      class="tw-p-5 md:tw-m-5 md:tw-p-0 md:tw-pt-5"
      style="border-top: 1px solid #ffffff1a;"
    >
      <h4
        class=" 
              containerText
              sub-text
              tw-opacity-80 
              tw-leading-1 
              tw-text-xs 
              tw-pb-5
              tw-tracking-widest 
              tw-mt-0"
      >
        COPYRIGHTS(C) 2022-UNIGRAD. ALL RIGHTS RESERVED.
      </h4>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Footer extends Vue {
  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>
<style lang="scss" scoped>
#footer {
  position: relative;
  background-color: #040404;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    @screen lg {
      background-repeat: no-repeat;
      left: 300px;
    }
  }
}
.containerText {
  color: #d8dbf1;
}
.textLink {
  color: #d8dbf1;
  position: relative;
}

.bgDark {
  background-color: #040404 !important;
  .textLink {
    color: #a6f2f9;
  }
  .icons {
    position: relative;
  }
}
.cubes {
  right: unset !important;
  min-width: 1000px;
  bottom: 500px;
  @screen sm {
    bottom: 700px;
    right: 0px !important;
    min-width: 750px;
    width: 750px !important;
  }
  @screen md {
    bottom: 300px;
  }
  @screen lg {
    right: 0px !important;
  }
}
</style>
