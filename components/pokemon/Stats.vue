<template>
  <div class="stats">
    <h2 class="statsTitle title">stats</h2>
    <p v-for="stat in stats" :key="stat.stat.name">
      {{ stat.stat.name }}: {{ stat.base_stat }}%
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
.statsTitle {
  color: $color-stats;
}
</style>