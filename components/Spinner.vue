<template>
  <div class="spinner"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.spinner {
  animation: spin 1s ease infinite;
  border-radius: 50%;
  border: 4px dotted rgba(0, 0, 0, 0.1);
  border-left-color: $color-primary;
  height: 36px;
  width: 36px;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>