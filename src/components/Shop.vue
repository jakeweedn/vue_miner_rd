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

    <h1>Click Upgrades</h1>

    <section v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">


        <button :disabled="AppState.cheese < upgrade.price" @click="buyUpgrade(upgrade)"
            class="btn btn-secondary w-25 my-3"> Buy {{ upgrade.name }} </button>

    </section>

    <h1>Automatic Upgrades</h1>




    <section v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">


        <button :disabled="AppState.cheese < upgrade.price" @click="buyUpgrade(upgrade)"
            class="btn btn-secondary w-25 my-3"> Buy {{ upgrade.name }} </button>


    </section>

    <h3> ClickUpgrade Prices </h3>

    <section v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">

        <p v-if="upgrade.isUnlocked"> {{ upgrade.name }}: {{ upgrade.price }} </p>


    </section>

    <h3> AutoUpgrade Prices </h3>

    <section v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">

        <p v-if="upgrade.isUnlocked"> {{ upgrade.name }}: {{ upgrade.price }} </p>


    </section>


</template>


<style lang="scss" scoped></style>