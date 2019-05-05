import {findCategoryByName, findCategoryLevel, utils} from "../utils/trick";
import Global = NodeJS.Global;

interface GlobalState {
  currentCategory: utils.Category | null;
  currentLevel: utils.Level | null;
  categories: utils.Category[];
}

export const state: () => GlobalState = () => ({
  currentCategory: null,
  currentLevel: null,
  categories: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setCurrent(state: GlobalState, category: utils.Category | null, level: utils.Level | null) {
    state.currentCategory = category;
    state.currentLevel = level;
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const categories = await app.$axios.$get(
      "./tricks.json"
    );
    commit("setCategories", categories);
  },
  async routeChanged ({ commit, state }, { route }) {
    const components = route.fullPath.split('/');
    if (components.length > 1 && state != null) {
        const category = findCategoryByName(state.categories, components[1]);
        if (category != null) {
            if (components.length > 2) {
                const level = findCategoryLevel(state.categories, category.name, components[2]);

                commit('setCurrent', category, level);
            } else {
                commit('setCurrent', category, null);
            }
        } else {
            commit('setCurrent', null, null);
        }
    } else {
        commit('setCurrent', null, null);
    }
  },
}
