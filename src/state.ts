import Vue from 'vue'
import Vuex from 'vuex'
import web3Module, { Web3State } from './stores/web3-api.store'
import themeModule, { ThemeState } from './stores/theme.store'

Vue.use(Vuex)
export interface State {
  web3: Web3State;
  theme: ThemeState
}

export default new Vuex.Store<State>({
  modules: {
    web3: web3Module,
    theme: themeModule,
  }
})