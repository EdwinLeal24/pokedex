<template>
  <div class="header">
    <img :src="logo" alt="Pokemon logo" />
    <input
      v-model="search"
      type="text"
      :placeholder="placeholder"
      @focus="placeholder = ''"
      @blur="placeholder = 'Buscar Pokémon'"
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
      placeholder: 'Buscar Pokémon',
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
  box-shadow: 0 4px 14px 0 #6d6d6d;
  margin: 10px 0;
  padding: 15px;
  text-align: center;
}
input:focus {
  outline: none;
}
</style>