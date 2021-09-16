<template>
  <div class="backArrow">
    <img :src="arrow" alt="arrow back" class="arrowImage" />
  </div>
</template>

<script>
import arrowBack from '../static/img/up-arrow.svg'

export default {
  computed: {
    arrow() {
      return arrowBack
    },
  },
}
</script>

<style>
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
</style>