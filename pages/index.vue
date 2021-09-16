<template>
  <div class="container">
    <Header @inputChange="handleSearch($event)" />
    <section class="layout">
      <nuxt-link
        v-for="pokemon in filterPokemons(search)"
        :key="pokemon.id"
        :to="`/pokemon/${pokemon.id}`"
      >
        <PokemonCard :pokemon="pokemon" />
      </nuxt-link>
    </section>
  </div>
</template>

<script>
import '../assets/css/globalStyle.css'

export default {
  data() {
    return {
      search: '',
      pokemons: [],
    }
  },
  mounted() {
    const pokemonsLimit = 15
    const getPokemon = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        this.pokemons.push(await res.json())
      } catch (error) {
        console.error(error)
      }
    }

    for (let i = 1; i <= pokemonsLimit; i++) {
      getPokemon(i)
    }
    return this.pokemons
  },
  methods: {
    handleSearch(event) {
      this.search = event
    },
    filterPokemons(keyword) {
      const pokemonsfiltered = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(keyword)
      )
      return pokemonsfiltered
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  place-items: center;
  height: 100vh;
}
.layout {
  display: grid;
  justify-content: center;
  gap: 0 30px;
  grid-template-columns: repeat(auto-fit, 200px);
  overflow-y: auto;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgb(216, 1, 40, 0.2);
  height: 100%;
  /* min-height: 100vh; */
  width: 90%;
  margin-top: 15px;
}
</style>