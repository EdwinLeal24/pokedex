<template>
  <div class="evolution">
    <h2 class="evolutionTitle title">evolutions</h2>
    <nuxt-link
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      :to="`/pokemon/${pokemon.id}`"
    >
      <div class="avatar">
        <img :src="pokemon.image" alt="arrow back" class="pokemonAvatar" />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style lang="scss">
.evolution {
  background-color: $color-evolution;
  color: #fff;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
  overflow-x: scroll;
  place-items: flex-start;
  width: 80%;
}
.evolutionTitle {
  color: $color-evolution;
}
.avatar {
  display: flex;
  justify-content: center;
  height: 7rem;
  width: 7rem;
  margin: 15px;
  background-color: #e85382;
  border-radius: 100%;
  border: 3px solid gray;
  padding: 10px;
  cursor: pointer;
}
</style>