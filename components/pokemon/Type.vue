<template>
  <div
    class="tabType"
    :style="`background-color: ${getColor(
      type.type.name
    )}; box-shadow: 0 4px 14px 0 ${getColor(type.type.name)}`"
  >
    {{ type.type.name }}
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  methods: {
    getColor(type) {
      const bgColors = {
        normal: '#A8A090',
        fighting: '#A05038',
        flying: '#98A8F0',
        poison: '#B058A0',
        ground: '#E9D6A4',
        rock: '#B8A058',
        bug: '#A8B820',
        ghost: '#6060B0',
        steel: '#A8A8C0',
        fire: '#F05030',
        water: '#3899F8',
        grass: '#78C850',
        electric: '#F8D030',
        psychic: '#F870A0',
        ice: '#58C8E0',
        dragon: '#7860E0',
        dark: '#705746',
        fairy: '#E79FE7',
        unknown: '#778899',
        shadow: '#2F4F4F',
      }
      return bgColors[type]
    },
  },
}
</script>

<style>
.tabType {
  padding: 5px 40px;
  margin: 7px;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  font-weight: bold;
}
</style>