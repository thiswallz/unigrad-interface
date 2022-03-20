<template>
<div class="tw-mb-14">
  <div class="tw-z-10 tw-uppercase tw-font-bold tw-mt-5" :class="titleSize">
    {{ title }}
  </div>
  <div class="sub-text tw-z-10" :class="parapraghsSize">
    <div>
      <span v-for="(parapragh, index) in parapraghs" :key="index" class="tw-block tw-mt-2">
        {{ parapragh }}
      </span>
    </div>
    <ul class="tw-list-disc tw-mt-5 tw-ml-12">
      <li v-for="(text, index) in list" :key="index"> {{ text }} </li>
    </ul>
  </div>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class PostSection extends Vue {
  @Prop({ required: true }) title!: string
  @Prop({ required: false }) parapraghs!: string[]
  @Prop({ required: false }) list!: string[]
  @Prop({ default: 'tw-text-3xl', required: false }) titleSize!: string
  @Prop({ default: 'tw-text-xl',  required: false }) parapraghsSize!: string
}
</script>
