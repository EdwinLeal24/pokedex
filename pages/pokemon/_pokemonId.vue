<template>
  <div>
    <nuxt-link to="/">
      <BackHome />
    </nuxt-link>
    <div class="profile">
      <nuxt-link :to="`/pokemon/${pokemon.id - 1}`">
        <Arrow v-if="pokemon.id > 1" />
      </nuxt-link>
      <ProfileCard :pokemon="pokemon" />
      <nuxt-link :to="`/pokemon/${pokemon.id + 1}`">
        <Arrow direction="right" />
      </nuxt-link>
    </div>
    <div class="profileBody">
      <section class="sectionBody">
        <Info :pokemon-info="pokemonInfo" />
        <Stats :stats="pokemon.stats" />
        <Evolutions :pokemons="pokemonsEvolutions" />
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['getPokemon', 'getEvolutions', 'getPokemonsEvolutions']),
    pokemon() {
      return this.getPokemon
    },
    pokemonInfo() {
      const height = this.pokemon?.height?.toString().split('').join(',')
      const kilo = this.pokemon?.weight
        ?.toString()
        .split('')
        .slice(0, 2)
        .join('')
      const grams = this.pokemon?.weight?.toString().split('').slice(2)
      const weight = kilo?.length > 2 ? `${kilo},${grams} kg` : `${kilo} kg`
      const ability = this.pokemon?.abilities?.map(
        (ability) => ability.ability.name
      )
      const experience = this.pokemon?.base_experience
      return {
        height: height?.length > 1 ? `${height} m` : `0,${height} m`,
        weight,
        ability,
        experience,
      }
    },
    pokemonStats() {
      const stats = this.pokemon?.stats.map((stat) => stat)
      return stats
    },
    pokemonsEvolutions() {
      const pokemons = this.getPokemonsEvolutions.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.other.dream_world.front_default,
        }
      })
      return pokemons
    },
  },
  async mounted() {
    const pokemonId = this.$route.params.pokemonId
    await this.fetchPokemon({ id: pokemonId })
    await this.fetchEvolutionChain({
      url: this.pokemon?.species?.url,
    })
    const name1 = this.getEvolutions?.chain?.species?.name
    const name2 = this.getEvolutions?.chain?.evolves_to[0]?.species?.name
    const name3 =
      this.getEvolutions?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name
    await this.fetchPokemonsEvolution({
      names: [name1, name2, name3],
    })
  },
  methods: {
    ...mapActions([
      'fetchPokemon',
      'fetchEvolutionChain',
      'fetchPokemonsEvolution',
    ]),
  },
}
</script>

<style>
.profile {
  display: flex;
  place-items: center;
  justify-content: center;
}
.profileBody {
  display: flex;
  justify-content: center;
}
section {
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgb(216, 1, 40, 0.2);
  display: flex;
  padding: 50px 0;
  width: 50%;
}
.sectionBody {
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-bottom: 20px;
  width: 80%;
}
.bodyInfo {
  background: rgb(255, 163, 246);
  background: linear-gradient(
    35deg,
    rgba(255, 163, 246, 1) 15%,
    rgba(233, 97, 255, 1) 40%
  );
  border-radius: 50px;
  display: flex;
  height: 300px;
  margin-top: 50px;
  padding: 0 30px;
  width: 100%;
}
</style>