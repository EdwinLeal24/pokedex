<template>
  <div class="stats">
    <h2 class="statsTitle title">Stats</h2>
    <p v-for="stat in stats" :key="stat.stat.name">
      <span class="statsSubtitle subtitle">{{ stat.stat.name }} :</span>
      <span>{{ stat.base_stat }}%</span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    stats: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
}
</script>

<style lang="scss">
.stats {
  background-color: $color-stats;
}
.statsTitle,
.statsSubtitle {
  color: $color-stats;
  text-transform: capitalize;
}
</style>