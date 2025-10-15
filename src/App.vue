// JS
<script setup>
import { computed, onMounted, ref } from 'vue'
import { AppState } from './AppState.js'
import { cheeseService } from './services/CheeseService.js'
import { Upgrade } from './models/Upgrade.js'
import Shop from './components/Shop.vue'

// const cheese = ref(0)
const cheese = computed(() => AppState.cheese)
let cheesePerClick = computed(() => {

  let clickUpgradeTotal = 0;

  for (let i = 0; i <= 1; i++) {

    clickUpgradeTotal += AppState.clickUpgrades[i].quantity * AppState.clickUpgrades[i].multiplier



  }

  return 1 + clickUpgradeTotal
})

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



    <section class="row">

      <h1 class="text-center bungee-shade-regular" id="siteTitle">Vue Miner </h1>

      <div class="d-flex justify-content-center">
        <img @click="mine()" class="img-fluid moon" src="@/assets/img/moon-image.png" alt="moon">

        <!-- "https://www.australiangeographic.com.au/wp-content/uploads/2024/09/Untitled-design-1.png"  -->

      </div>

    </section>



    <section class="row">
      <div id="cheese-count">
        <h1 class="text-center mdi mdi-cheese">{{ cheese }} </h1>
        <h5 class="mdi mdi-mouse-left-click">Cheese per click: {{ cheesePerClick }} </h5>

      </div>

    </section>




    <section class="row bg-yellow">

      <Shop />







      <div class="col-md-3">



        <h4>ClickUpgrade Stats </h4>

        <div v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">

          <p>{{ upgrade.name }}: {{ upgrade.quantity }} ➡️ {{ upgrade.quantity * upgrade.multiplier }} </p>

        </div>

      </div>

      <div class="col-md-3">

        <h4>AutoUpgrade Stats</h4>

        <div v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">

          <p> {{ upgrade.name }}: {{ upgrade.quantity }} ➡️ {{ upgrade.quantity * upgrade.multiplier }} </p>

        </div>


      </div>

    </section>


  </main>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

main {

  background-image: url("https://images.stockcake.com/public/6/c/5/6c58d620-94bc-46ff-9fa7-3a11b597854b_large/mystical-purple-sky-stockcake.jpg");
}

// article {
//   background-color: blue;
//   color: red;

// }

#siteTitle {

  font-size: 48px;

}

.moon {

  width: 900px;
  height: 1200px;

  margin: -250px;
}

#cheese-count {

  background-color: orange;
}

.bungee-shade-regular {
  font-family: "Bungee Shade", sans-serif;
  font-weight: 400;
  font-style: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Bungee+Shade&display=swap');
</style>
