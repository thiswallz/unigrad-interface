<template>
  <div class="simple-button tw-uppercase" @click="$emit('click')">
    <span>
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({
  components: {},
})
export default class SimpleButton extends Vue {
  get isDark() {
    return this.$store.state.theme.color === "dark"
  }
}
</script>

<style lang="scss" scoped>
.simple-button {
  border-radius: 6px;
  background: linear-gradient(
    96.56deg,
    #7a27cb 1.05%,
    #411996 26.44%,
    #7455ef 70.35%,
    #f0cef8 96.74%,
    #e387c1 138.72%
  );
  box-shadow: 0px 10px 28px rgba(247, 231, 204, 0.5),
    inset 3px 8px 1px rgba(239, 214, 206, 0.1);
  cursor: pointer;
  font-weight: 500;
  padding: 0.3rem;
  height: 38px;
  span {
    color: #fff;
    font-size: 10px;
    line-height: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &:hover {
    opacity: 0.7;
  }
}
.dark {
  .simple-button {
    background: rgba(25, 28, 112, 0.5);
    box-shadow: none;
    span {
      color: #a6f2f9;
    }
  }
}
</style>
