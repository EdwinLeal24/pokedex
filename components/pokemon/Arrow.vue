<template>
  <div class="arrow">
    <img
      :src="arrow"
      alt="arrow back"
      class="arrowImage"
      :style="`transform: rotate${deg(direction)}`"
    />
  </div>
</template>

<script>
import arrowBack from 'static/img/up-arrow.svg'

export default {
  props: {
    direction: {
      type: String,
      default: 'left',
    },
  },
  computed: {
    arrow() {
      return arrowBack
    },
  },
  methods: {
    deg(direction) {
      const directions = {
        right: '(90deg)',
        down: '(180deg)',
        left: '(-90deg)',
      }
      return directions[direction]
    },
  },
}
</script>

<style>
.arrow {
  height: 4rem;
  width: 4rem;
  margin: 15px;
  background-color: #e85382;
  border-radius: 100%;
  border: 3px solid gray;
  padding: 10px;
  cursor: pointer;
}
.arrow:hover {
  box-shadow: 0 4px 14px 0 rgb(121 40 202 / 60%);
}
</style>