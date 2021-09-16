<template>
  <div class="header">
    <img :src="logo" alt="Pokemon logo" />
    <input
      v-model="search"
      type="text"
      placeholder="Buscar Pokémon"
      @input="$emit('inputChange', $event.target.value)"
    />
  </div>
</template>

<script>
import logo from '../static/img/pokemon-23.svg'
export default {
  data() {
    return {
      search: '',
    }
  },
  computed: {
    logo() {
      return logo
    },
  },
}
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
}

input {
  background-color: #f3f3f3;
  border-radius: 50px;
  border: none;
  padding: 15px;
  margin: 10px 0;
  text-align: center;
}
input:focus {
  outline: none;
}
</style>