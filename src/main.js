// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vue from "vue"
import { Toast, Navbar, Carousel } from "buefy"
import DefaultLayout from "~/layouts/Default.vue"
import state from '~/state'

Vue.use(Navbar)
Vue.use(Carousel)
Vue.use(Toast)

export default function(Vue, { router, head, isClient, appOptions }) {
  head.htmlAttrs = { lang: "en", class: "dark" }
  head.meta.push({
    name: "cache-control",
    content: "public, max-age=300",
  })
  head.meta.push({
    name: "viewport",
    content:
      "user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi",
  })

  appOptions.store = state


  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
}

// icons
import Icon from "vue-awesome/components/Icon"

import "vue-awesome/icons/flag"
import "vue-awesome/icons/beer"
import "vue-awesome/icons/lightbulb"
import "vue-awesome/icons/moon"
import "vue-awesome/icons/angle-right"
import "vue-awesome/icons/angle-left"
import "vue-awesome/icons/envelope"

Vue.component("v-icon", Icon)

require("~/main.scss")
