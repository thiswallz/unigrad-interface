<template>
    <img v-if="!video"
        :src="image"
        onerror="this.src='/images/placeholder.png'"
        class="tw-w-full tw-h-full tw-object-cover"
      />
    <video
      v-else
      class="tw-w-full tw-h-full tw-object-cover"
      autoplay
      muted
      loop
      :poster="image"
      >
      <source :src="video" type="video/mp4">
      Your browser does not support HTML video.
    </video>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class FancyImage extends Vue {
  @Prop({ default: '/images/placeholder.png', required: true }) image: string
  @Prop({ default: null, required: false }) video: string
}
</script>
