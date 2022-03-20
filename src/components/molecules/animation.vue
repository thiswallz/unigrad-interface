<template>
  <div class="wrapper">
    <div
      class="animation-card"
      :class="[hide ? 'hidden-lottie' : 'animation-lottie']"
      ref="animation"
    ></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import axios from 'axios'
import lottie, { AnimationItem } from 'lottie-web'

@Component({
  components: {},
})
export default class Animation extends Vue {
  @Prop() source!: string
  @Prop({ default: false }) rePlay?: boolean
  @Prop({ default: false }) autoload?: boolean
  @Prop({ default: false }) infinite?: boolean
  @Prop({ default: false }) unobserve?: boolean
  @Prop() delay?: number
  @Prop() alive?: number

  hide: boolean = false
  private animation: AnimationItem | null = null
  private sources: Record<string, string> = {}

  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }

  async mounted() {
    const { data } = await axios(this.source)
    this.sources[this.source] = data
    if (!this.rePlay) {
      await this.load()
    } else {
      this.observe()
    }
  }

  private observe() {
    this.loadAnimation(true)
    const wrapper = this.$refs.animation as Element

    if (wrapper) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(async (entry) => {
            if (entry.intersectionRatio > 0) {
              if (
                entry.isIntersecting &&
                Math.floor(entry.intersectionRatio) === 1
              ) {
                await this.load(true)
                if (this.unobserve) {
                  observer.unobserve(wrapper)
                }
              }
              return
            }
          })
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      )
      observer.observe(wrapper)
    }
  }

  private loadAnimation(lazy: boolean = false) {
    if (lazy) {
      this.hide = true
    }
    const data = this.sources[this.source]
    if (this.animation) {
      this.animation.destroy()
    }
    this.animation = lottie.loadAnimation({
      container: this.$refs.animation as Element,
      renderer: 'svg',
      loop: this.infinite,
      autoplay: lazy ? false : this.autoload,
      animationData: data,
    })
  }

  private async load(forcePlay: boolean = false) {
    if (this.animation) {
      //this.animation.destroy()
    }
    const data = this.sources[this.source]
    if (this.delay) {
      this.hide = true
      setTimeout(() => {
        if (this.autoload === true) {
          if (forcePlay) {
            this.animation.stop()
            this.animation.play()
          } else {
            this.loadAnimation()
          }
          this.hide = false
        }
      }, this.delay * 1000)
    } else {
      if (forcePlay) {
        this.animation.stop()
        this.animation.play()
      } else {
        this.loadAnimation()
      }
      this.hide = false
      if (this.alive) {
        setTimeout(() => {
          if (this.$refs.animation) {
            this.hide = true
          }
        }, this.alive * 1000)
      }
    }
  }
}
</script>
<style>
.animation-card {
   -webkit-animation: rotate 5s linear infinite;
  -moz-animation: rotate 5s linear infinite;
  animation: rotate 5s linear infinite;
}
@-webkit-keyframes rotate {
  100% {-webkit-transform: rotatey(360deg);}
}

@-moz-keyframes rotate {
  100% {-moz-transform: rotatey(360deg);}
}

@keyframes rotate {
  100% {transform: rotatey(360deg);}
}
.wrapper {
  -webkit-perspective: 45em;
  -moz-perspective: 45em;
  perspective: 45em;
}
</style>