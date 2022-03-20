import { ActionContext } from "vuex";
import { State } from "~/state";

export interface ThemeState {
  color: string
}

export type Context = ActionContext<ThemeState, State>;

export default {
  namespaced: true,
  state: (): ThemeState => ({
    color: "dark",
  }),
  mutations: {
    setTheme(state, color) {
      state.color = color
    }
  },
  actions: {
    toggleTheme(context) {
      const color = this.state.theme === "dark" ? "light" : "dark"
      context.commit("setTheme", color)
    },
    setTheme(context, color) {
      context.commit("setTheme", color)
    }
  },
}
