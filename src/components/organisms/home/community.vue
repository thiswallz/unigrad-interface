<template>
  <section data-test-id="community" class="community tw-mt-4 " id="community">
    <div>
      <div
        class="text-h1 tw-z-10 tw-text-center"
      >
        Join the community
      </div>
      <div
        class="
          sub-text
          tw-z-10 tw-text-lg tw-text-center tw-mt-4 
          sm:tw-w-3/3
        "
      >
        Stronger Together.
      </div>
      <div class="tw-flex tw-justify-center tw-mt-10 tw-m-10">
        <div
          class="community-container tw-max-w-3xl 
          tw-flex-wrap tw-flex-row sm:tw-flex-col tw-w-full tw-justify-around 
          tw-flex tw-rounded-md sm:tw-rounded-full tw-p-2 tw-mt-5 tw-h-40 sm:tw-h-20 "
        >
          <a
            v-for="(social, index) of socials"
            :key="'k' + index"
            target="_blank"
            :href="social.link"
            :aria-label="social.name"
            class="hover:tw-opacity-50 tw-mt-1 tw-w-1/3 sm:tw-w-auto tw-self-center 
              tw-flex tw-justify-center 
             "
          >
            <img
              alt="social link"
              class="tw-m-1 hover:tw-opacity-50 tw-cursor-pointer tw-h-8 "
              :src="social.icon"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import socials from '~/data/socials.json'

@Component({
  components: {},
})
export default class Community extends Vue {
  imageSrc = '/images/'

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  get socials() {
    return socials.map((social) => ({
      ...social,
      icon: this.isDark
        ? `${this.imageSrc}socials/dark/${social.icon}`
        : `${this.imageSrc}socials/${social.icon}`,
    }))
  }
}
</script>

<style lang="scss">
.community {
  height: 350px;
  @screen sm {
    height: 270px;
  }
}
.community-container {
  background-color: rgba(255, 255, 255, 0.4);
}
.dark {
  .community-container {
    background-color: rgba(0, 0, 36, 0.5);
  }
}
</style>
