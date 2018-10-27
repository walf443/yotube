export const state = () => ({
  categories: []
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  }
}

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const categories = await app.$axios.$get(
      "./tricks.json"
    )
    commit("setCategories", categories)
  }
}
