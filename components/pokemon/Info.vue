<template>
  <div class="containerInfo">
    <h2 class="infoTitle title">info</h2>
    <p>Height: {{ pokemonInfo.height }}</p>
    <p>weight: {{ pokemonInfo.weight }}</p>
    <p>ability: {{ abilities }}</p>
    <p>experience: {{ pokemonInfo.experience }}</p>
  </div>
</template>

<script>
export default {
  props: {
    pokemonInfo: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    abilities() {
      const ability = this.pokemonInfo?.ability?.join(', ')
      return ability
    },
  },
}
</script>

<style lang="scss">
.containerInfo {
  background-color: $color-info;
}
.infoTitle {
  color: $color-info;
}
</style>