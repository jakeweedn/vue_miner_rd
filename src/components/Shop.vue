<script setup>
import { AppState } from '@/AppState.js';
import { Upgrade } from '@/models/Upgrade.js';
import { cheeseService } from '@/services/CheeseService.js';
import { computed, onMounted } from 'vue';


const clickUpgrades = computed(() => AppState.clickUpgrades)
const autoUpgrades = computed(() => AppState.autoUpgrades)









function buyUpgrade(upgrade) {

    console.log("We will buy an upgrade", upgrade)
    cheeseService.buyUpgrade(upgrade)
}



</script>


<template>



    <div class="col-md-3">
        <h4>Click Upgrades</h4>

        <section v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">


            <button :disabled="AppState.cheese < upgrade.price" @click="buyUpgrade(upgrade)"
                class="btn btn-info w-25 my-3"> {{ upgrade.price }} 🧀</button>

            {{ upgrade.name }}

        </section>

    </div>




    <div class="col-md-3">
        <h4>Automatic Upgrades</h4>


        <section v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">


            <button :disabled="AppState.cheese < upgrade.price" @click="buyUpgrade(upgrade)"
                class="btn btn-danger w-25 my-3"> {{ upgrade.price }} 🧀 </button>

            {{ upgrade.name }}




        </section>

    </div>



    <!-- Commented this out, but keep it, because it's a useful reference for v-if,v-else!: -->

    <!-- <h3> ClickUpgrade Prices </h3>

    <section v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">

        <p v-if="upgrade.isUnlocked"> {{ upgrade.name }}: {{ upgrade.price }} </p>

        <p v-else> {{ upgrade.name }} not available for purchase </p>


    </section>

    <h3> AutoUpgrade Prices </h3>

    <section v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">

        <p v-if="upgrade.isUnlocked"> {{ upgrade.name }}: {{ upgrade.price }} </p>

        <p v-else> {{ upgrade.name }} not available for purchase </p>


    </section> -->


</template>


<style lang="scss" scoped></style>