import VueRouter from "vue-router"
import { Store } from "vuex";

declare module "vue/types/vue" {
  interface Vue {
    $router: VueRouter
    $store: Store<any>
    $web3: any
    $web3Connection: any
    $web3Context: any
  }
}

