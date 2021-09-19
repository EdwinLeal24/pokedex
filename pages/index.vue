<template>
  <div class="container">
    <Header @inputChange="handleSearch($event)" />
    <Spinner v-if="loading" />
    <section v-else class="pokemonsGrid">
      <nuxt-link
        v-for="pokemon in filterPokemons(search)"
        :key="pokemon.id"
        :to="`/pokemon/${pokemon.id}`"
      >
        <Card :pokemon="pokemon" />
      </nuxt-link>
    </section>

    <button v-if="pokemons.length" class="buttonMore" @click="showMore">
      <p>Show me more</p>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      pokemons: [],
      offset: 0,
    }
  },
  computed: {
    loading() {
      return !this.pokemons.length
    },
  },

  async mounted() {
    await this.fetchPokemons(0)
  },
  methods: {
    handleSearch(event) {
      this.search = event
    },

    filterPokemons(keyword) {
      const pokemonsfiltered = this.pokemons
        .filter((pokemon) => pokemon.name.includes(keyword))
        .sort((a, b) => a.id - b.id)
      return pokemonsfiltered
    },

    async fetchPokemons(offset) {
      const apiUrl = 'https://pokeapi.co/api/v2/pokemon/'
      let pokemonsUrls = []
      try {
        const res = await fetch(`${apiUrl}?offset=${offset * 30}&limit=30`)
        const results = await res.json()
        pokemonsUrls = results.results
      } catch (error) {
        console.error('An error ocurred', error)
      }
      for (const pokemon of pokemonsUrls) {
        fetch(pokemon.url)
          .then((res) => res.json())
          .then((result) => this.pokemons.push(result))
      }
    },

    async showMore() {
      this.offset++
      await this.fetchPokemons(this.offset)
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
.buttonMore {
  background: #7928ca;
  border-radius: 10px;
  border-style: none;
  color: #fff;
  cursor: pointer;
  margin: 15px 0;
  padding: 15px;
}
.buttonMore:hover {
  box-shadow: 0 4px 14px 0 rgb(121 40 202 / 60%);
}
</style>