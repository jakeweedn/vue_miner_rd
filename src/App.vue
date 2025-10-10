// JS
<script setup>
import { computed, ref } from 'vue'
import { AppState } from './AppState.js'
import { cheeseService } from './services/CheeseService.js'

// const cheese = ref(0)
const cheese = computed(() => AppState.cheese)

const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)


function mine() {
  console.log('We will increase the cheese count')
  cheeseService.mine()


}


</script>


// HTML
<template>
  <h1 class="text-center">Vue Miner</h1>
  {{ cheese }}

  <section v-for="upgrade in clickUpgrades"> </section>

  <section v-for="upgrade in autoUpgrades"> </section>

  <button class="w-25 my-3"> Buy Upgrade {{ clickUpgrades }} </button>

  <img @click="mine()" class="img-fluid"
    src="https://png.pngtree.com/png-vector/20231224/ourmid/pngtree-cheese-slice-of-swiss-variety-on-a-png-image_10952858.png"
    alt="cheese picture">




</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";
</style>