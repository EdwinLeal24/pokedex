<template>
  <div class="container">
    <Header @inputChange="handleSearch($event)" />
    <section class="pokemonsGrid">
      <nuxt-link
        v-for="pokemon in filterPokemons(search)"
        :key="pokemon.id"
        :to="`/pokemon/${pokemon.id}`"
      >
        <Card :pokemon="pokemon" />
      </nuxt-link>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      pokemons: [],
    }
  },
  mounted() {
    const pokemonsLimit = 50
    const getPokemon = async (id) => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        this.pokemons.push(await res.json())
      } catch (error) {
        console.error('An error ocurred', error)
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
}
.pokemonsGrid {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgb(216, 1, 40, 0.2);
  display: grid;
  gap: 0 30px;
  grid-template-columns: repeat(auto-fit, 200px);
  height: 100%;
  justify-content: center;
  margin-top: 15px;
  overflow-y: auto;
  padding: 20px;
  width: 90%;
}
</style>