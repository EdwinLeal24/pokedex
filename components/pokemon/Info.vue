<template>
  <div class="containerInfo">
    <h2 class="infoTitle title">Info</h2>
    <p>
      <span class="infoSubtitle subtitle">Height :</span>
      <span>{{ pokemonInfo.height }}</span>
    </p>
    <p>
      <span class="infoSubtitle subtitle">Weight :</span>
      <span>{{ pokemonInfo.weight }}</span>
    </p>
    <p>
      <span class="infoSubtitle subtitle">Ability :</span>
      <span>{{ abilities }}</span>
    </p>
    <p>
      <span class="infoSubtitle subtitle">Experience :</span>
      <span>{{ pokemonInfo.experience }}</span>
    </p>
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
.infoTitle,
.infoSubtitle {
  color: $color-info;
}
</style>