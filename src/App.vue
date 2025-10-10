// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { cheeseService } from './services/CheeseService.js'

// const cheese = ref(0)
const cheese = computed(() => AppState.cheese)

function mine() {
  console.log('We will increase the cheese count')
  cheeseService.mine()


}


</script>


// HTML
<template>
  <h1>Hello</h1>
  {{ cheese }}

  <img @click="mine()" class="img-fluid"
    src="https://png.pngtree.com/png-vector/20231224/ourmid/pngtree-cheese-slice-of-swiss-variety-on-a-png-image_10952858.png"
    alt="cheese picture">

</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
</style>