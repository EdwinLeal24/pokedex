<template>
  <section class="profileHeader">
    <div class="bgImage">
      <Spinner v-if="!pokemonImage" />
      <img
        v-else
        :src="pokemonImage"
        :alt="`Pokemon ${pokemon.name}`"
        class="pokemonImage"
      />
    </div>
    <div class="headerName">
      <h2 class="number">#0{{ pokemon.id }}</h2>
      <h2 class="profileName">{{ pokemon.name }}</h2>
    </div>

    <div class="types">
      <Type v-for="type in pokemon.types" :key="type.slot" :type="type" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    pokemonImage() {
      return this.pokemon?.sprites?.other?.dream_world?.front_default
    },
  },
}
</script>

<style lang="scss">
.profileHeader {
  margin: 20px 0;
  place-items: center;
  flex-direction: column;
}
.bgImage {
  display: flex;
  justify-content: center;
  place-items: center;
  width: 80%;
  height: 130px;
  border-radius: 10px;
  background: $background-card;
}
.pokemonImage {
  position: relative;
  top: -40px;
  width: 8rem;
}
.headerName {
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  z-index: 1;
}
.number {
  color: $color-primary;
}
.profileName {
  background-color: #696969;
  color: white;
  border-radius: 10px;
  padding: 0 5px;
}
.types {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 82%;
}
</style>