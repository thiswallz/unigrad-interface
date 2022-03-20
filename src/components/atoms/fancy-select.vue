<template>
  <div
    class="
      select-box
      tw-h-full tw-w-36 tw-relative tw-block tw-uppercase tw-z-20
    "
  >
    <div
      class="
        select-box__current
        tw-whitespace-nowrap
        tw-relative
        tw-cursor-pointer
        tw-outline-none
        tw-h-full
        tw-w-36
        tw-items-center
        tw-pl-4
        tw-rounded-sm
        tw-border-2
      "
      tabindex="1"
      :style="{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: color,
      }"
    >
      <div v-for="(option, index) in list" :key="index">
        <div
          class="select-box__value tw-font-medium"
          :class="selected.label == option.label ? 'tw-py-2 tw-mb-1' : ''"
        >
          <input
            class="select-box__input"
            type="radio"
            :id="index"
            v-on:change="onChange(option)"
            name="filter"
            checked="checked"
          />
          <span class="select-box__input-text">{{ option.label }} </span>
        </div>
      </div>
      <img
        class="select-box__icon"
        :src="isDark ? 'images/sorting-dark.svg' : 'images/sorting.svg'"
        alt="Arrow Icon"
        aria-hidden="true"
      />
    </div>
    <ul
      class="
        select-box__list
        tw-rounded-sm tw-border-2 tw-border-t-0
      "
      :style="{
        borderColor: borderColor,
        backgroundColor: backgroundColor,
        color: color,
      }"
    >
      <li v-for="(option, index) in list" 
          :key="index">
        <label
          class="select-box__option tw-p-2"
          :for="index"
          v-if="option.label != 'sort by'"
          aria-hidden="aria-hidden"
          >{{ option.label }}</label
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({
  components: {},
})
export default class FancySelect extends Vue {
  @Prop({
    default: () => [
      {
        value: 1,
        label: "Asc",
      },
      {
        value: 2,
        label: "Desc",
      },
    ],
  })
  list: any[]
  @Prop( { required: false, default: 'transparent' } ) backgroundColor: string
  @Prop( { required: false, default: '#A7A9BA' } ) borderColor: string
  @Prop({ required: false }) color: string
  selected = { label: "sort by" }

  mounted() {
    this.list.push({ value: -1, label: "sort by" })
  }

  onChange(event) {
    this.selected = event
    this.$emit("change", event)
  }

  get isDark() {
    return this.$store.state.theme === "dark"
  }
}
</script>

<style lang="scss" scoped>
.select-box__current:focus + .select-box__list {
  opacity: 1;
  -webkit-animation-name: none;
  animation-name: none;
}
.select-box__current:focus + .select-box__list .select-box__option {
  cursor: pointer;
}
.select-box__current:focus .select-box__icon {
  -webkit-transform: translateY(-50%) rotate(180deg);
  transform: translateY(-50%) rotate(180deg);
}
.select-box__icon {
  position: absolute;
  top: 50%;
  right: 15px;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 12px;
  -webkit-transition: 0.2s ease;
  transition: 0.2s ease;
}
.select-box__value {
  display: -webkit-box;
  display: flex;
}
.select-box__input {
  display: none;
}
.select-box__input:checked + .select-box__input-text {
  display: block;
}
.select-box__input-text {
  display: none;
  width: 100%;
  margin: 0;
}
.select-box__list {
  position: absolute;
  width: 100%;
  list-style: none;
  opacity: 0;
  -webkit-animation-name: HideList;
  animation-name: HideList;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-timing-function: step-start;
  animation-timing-function: step-start;
}
.select-box__option {
  display: block;
}
.select-box__option:hover,
.select-box__option:focus {
  //HOVER OPTIONS
  // color: #fff;
  // background-color: #546c84;
}

@-webkit-keyframes HideList {
  from {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  to {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}

@keyframes HideList {
  from {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  to {
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
  }
}
</style>
