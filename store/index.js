export const state = () => ({
  pokemon: []
})

export const mutations = {
  setPokemon(state, pokemon) {
    state.pokemon = pokemon
  }
}

export const getters = {
  getPokemon(state) {
    return state.pokemon
  }
}

export const actions = {
  async fetchPokemon({commit}, {id}) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokemon = await res.json()
        commit('setPokemon', pokemon)
      } catch (error) {
        console.error(error)
      }
  }
}
