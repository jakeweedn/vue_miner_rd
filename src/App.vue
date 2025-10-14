// JS
<script setup>
import { computed, onMounted, ref } from 'vue'
import { AppState } from './AppState.js'
import { cheeseService } from './services/CheeseService.js'
import { Upgrade } from './models/Upgrade.js'
import Shop from './components/Shop.vue'

// const cheese = ref(0)
const cheese = computed(() => AppState.cheese)

const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)

onMounted(() => {
  setInterval(addAutoUpgrades, 3000)

})






function mine() {
  console.log('We will increase the cheese count')
  cheeseService.mine()


}

function addAutoUpgrades() {
  console.log('Is the function working?')
  cheeseService.addAutoUpgrades()

}


</script>


// HTML
<template>

  <main class="container-fluid">

    <h1 class="text-center" id="siteTitle">Vue Miner</h1>

    <p>Cheese: {{ cheese }} </p>



    <section class="row">
      <div class="col-md-6">

        <Shop />

      </div>


      <!-- Commenting out the Shop:  -->


      <!-- <h1>Click Upgrades</h1>

  <section v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">


    <button class="w-25 my-3"> Buy {{ upgrade.name }} </button>

  </section>

  <h1>Automatic Upgrades</h1>




  <section v-for="upgrade in autoUpgrades" :key="upgrade.name">


    <button class="w-25 my-3"> Buy {{ upgrade.name }} </button>


  </section> -->


      <div class="col-md-6">

        <img @click="mine()" class="img-fluid"
          src="https://png.pngtree.com/png-vector/20231224/ourmid/pngtree-cheese-slice-of-swiss-variety-on-a-png-image_10952858.png"
          alt="cheese picture">

        <article>
          <h2>ClickUpgrade Quantities</h2>

          <div v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">

            <p> {{ upgrade.name }}: {{ upgrade.quantity }}</p>

          </div>


          <h2>AutoUpgrade Quantities</h2>

          <div v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">

            <p> {{ upgrade.name }}: {{ upgrade.quantity }}</p>

          </div>
        </article>

      </div>
    </section>
  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

main {

  background-image: url("https://eos.org/wp-content/uploads/2023/11/age-of-moon.jpg;")
}

article {
  background-color: blue;
  color: red;

}

#siteTitle {

  font-size: 48px;
}
</style>