<template>
  <div>
    <nuxt-link to="/">
      <ArrowBack />
    </nuxt-link>
    <div class="container">
      <section>
        <div class="name">
          <p class="number">#0{{ pokemon.id }}</p>
          <p>{{ pokemon.name }}</p>
        </div>
        <div class="headerInfo">
          <img
            :src="pokemonImage"
            :alt="`Pokemon ${pokemon.name}`"
            class="pokemonImg"
          />
        </div>

        <div class="types">{types}</div>

        <div class="bodyInfo">
          <!-- <div>
            <ColumnInfo info="{info1}" />
            <ColumnInfo info="{info2}" />
          </div>
          <div class="stats">{stats}</div>
          <div>
            <ColumnInfo info="{info1}" />
            <ColumnInfo info="{info2}" />
          </div> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  fetch() {
    const pokemonId = this.$route.params.pokemonId
    this.$store.dispatch('fetchPokemon', { id: pokemonId })
  },
  computed: {
    ...mapGetters(['getPokemon']),
    pokemonImage() {
      return this.pokemon?.sprites?.other?.dream_world?.front_default
    },
    pokemon() {
      console.log(this.getPokemon)
      return this.getPokemon
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  place-items: center;
}
section {
  display: flex;
  place-items: center;
  flex-direction: column;
  background: #fff;
  width: 50%;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgb(216, 1, 40, 0.2);
  padding-top: 50px;
  margin: 50px;
}
.info {
  display: flex;
  flex-direction: column;
}
.name {
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
}
.headerInfo {
  width: 80%;
  height: 130px;
  border-radius: 10px;
  background: rgb(255, 163, 246);
  background: linear-gradient(
    90deg,
    rgba(255, 163, 246, 1) 15%,
    rgba(233, 97, 255, 1) 40%
  );
}
.pokemonImg {
  position: relative;
  top: -80px;
  width: 10rem;
}
p {
  font-weight: bold;
  margin: 0;
}
.number {
  color: rgba(224, 35, 255, 1);
}
.types {
  width: 82%;
}
.bodyInfo {
  display: flex;
  width: 100%;
  height: 300px;
  margin-top: 50px;
  padding: 0 30px;
  border-radius: 50px;
  background: rgb(255, 163, 246);
  background: linear-gradient(
    35deg,
    rgba(255, 163, 246, 1) 15%,
    rgba(233, 97, 255, 1) 40%
  );
}
.arrowImage {
  transform: rotate(-90deg);
  width: 3rem;
}
.backArrow {
  position: absolute;
  height: 4rem;
  width: 4rem;
  margin: 15px;
  background-color: #e85382;
  border-radius: 100%;
  border: 3px solid gray;
  padding: 10px;
  cursor: pointer;
}
.stats {
  display: flex;
  flex-direction: column;
}
</style>