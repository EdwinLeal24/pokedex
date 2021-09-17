export const state = () => ({
  pokemon: [],
  evolutions: [],
  pokemonsEvolutions: []
})

export const mutations = {
  setPokemon(state, pokemon) {
    state.pokemon = pokemon
  },
  setEvolutionChain(state, evolutions) {
    state.evolutions = evolutions
  },
  addPokemonEvolution(state, pokemons) {
    state.pokemonsEvolutions = pokemons
  }
}

export const getters = {
  getPokemon(state) {
    return state.pokemon
  },
  getEvolutions(state) {
    return state.evolutions
  },
  getPokemonsEvolutions(state) {
    return state.pokemonsEvolutions
  },
}

export const actions = {
  async fetchPokemon({commit}, {id, keyword}) {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokemon = await res.json()
        commit('setPokemon', pokemon)
      } catch (error) {
        console.error(error)
      }
  },
  async fetchEvolutionChain({commit}, {url}) {
    try {
      const res = await fetch(url)
      const data = await res.json()
      const evolutionUrl = data.evolution_chain.url
      try {
        const fetchEvolution = await fetch(evolutionUrl)
        const evelutionChain = await fetchEvolution.json()
        commit('setEvolutionChain', evelutionChain)
      } catch (err) {
        console.error(err) 
      }
    } catch (err) {
      console.error(err)
    }
  },
  async fetchPokemonsEvolution({commit}, {names}) {
    try {
      const pokemons = []
      const url = 'https://pokeapi.co/api/v2/pokemon/'
      for (let i = 0; i < names.length; i++) {
        if(names[i]) {
          const name = names[i]
        const res = await fetch(url+name)
        pokemons.push(await res.json())
        }
        
      }
      commit('addPokemonEvolution', pokemons)
    } catch (error) {
      console.error('error evolutions', error)
    }
  }
}
