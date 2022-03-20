<template>
  <button class="fancy-button tw-uppercase" @click="$emit('click')">
    <slot />
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class FancyButton extends Vue {
  get isDark() {
    return this.$store.state.theme.color === 'dark'
  }
}
</script>

<style lang="scss" scoped>
button {
  background: linear-gradient(
    96.56deg,
    #7a27cb 1.05%,
    #411996 26.44%,
    #7455ef 70.35%,
    #f0cef8 96.74%,
    #e387c1 138.72%
  );
  border-radius: 4px;
  box-shadow: 0px 10px 28px rgb(247 231 204 / 50%),
    0px 24px 32px rgb(98 17 100 / 10%), inset 3px 8px 1px rgb(239 214 206 / 10%);
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  height: 45px;
  letter-spacing: 2px;
  width: 100%;
  @screen ss {
    padding: 0px 30px;
  }
  &:hover {
    box-shadow: unset;
    background: linear-gradient(
      157.51deg,
      #f985bc 6.95%,
      #a14ff0 53.91%,
      #6909c6 81.69%
    );
  }
}

.dark {
  button {
    background-image: radial-gradient(
        75.81% 341.44% at 64.52% 48.39%,
        #6808c5 0%,
        #e387c1 29.69%,
        #6808c5 100%
      ),
      linear-gradient(157deg, #a87cd3, #ffffff);
    background-origin: border-box;
    box-shadow: 2px 1000px 1px #24114a inset;
    border: 2px solid;
    border-image-source: radial-gradient(
      75.81% 341.44% at 64.52% 48.39%,
      #000000 0%,
      #e387c1 29.69%,
      #6909c6 100%
    );
    &:hover {
      box-shadow: unset;
      background: linear-gradient(
        157.51deg,
        #f985bc 6.95%,
        #a14ff0 53.91%,
        #6909c6 81.69%
      );
    }
  }
}
</style>
