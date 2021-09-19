<template>
  <div class="card">
    <Spinner v-if="!img" />
    <img v-else :src="img" :alt="`Pokemon ${name}`" class="imagePokemon" />
    <br />
    <div class="sectionName">
      <p class="name">
        <span class="pokemonId"># {{ pokemonNumber }}</span> {{ name }}
      </p>
    </div>
  </div>
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
    img() {
      return this.pokemon.sprites.other.dream_world.front_default
    },
    pokemonNumber() {
      return this.pokemon.id
    },
    name() {
      return this.pokemon.species.name
    },
  },
}
</script>

<style lang="scss">
.card {
  background: rgb(255, 197, 249);
  background: $background-card;
  border-radius: 20px;
  cursor: pointer;
  display: inline-grid;
  grid-template-rows: 75% 25%;
  height: 200px;
  margin: 25px 0;
  vertical-align: middle;
  width: 200px;
}
.card:hover {
  box-shadow: 0 4px 14px 0 rgb(121 40 202 / 60%);
}
.imagePokemon {
  grid-row-end: 2;
  justify-self: center;
  position: relative;
  top: -40px;
  width: 7rem;
}
.sectionName {
  grid-row-end: 3;
  justify-self: center;
  background-color: #655f66;
  color: #ffffff;
  margin-bottom: 12px;
  padding: 5px;
  border-radius: 15px;
  width: 80%;
  z-index: 1;
}
.pokemonId {
  color: $color-primary;
}
.name {
  display: flex;
  justify-content: space-around;
}
</style>