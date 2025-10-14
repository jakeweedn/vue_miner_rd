<script setup>
import { AppState } from '@/AppState.js';
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


        <button @click="buyUpgrade(upgrade)" class="w-25 my-3"> Buy {{ upgrade.name }} </button>

    </section>

    <h1>Automatic Upgrades</h1>




    <section v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">


        <button @click="buyUpgrade(upgrade)" class="w-25 my-3"> Buy {{ upgrade.name }} </button>


    </section>

    <h3> ClickUpgrade Prices </h3>

    <section v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">

        <p> {{ upgrade.name }}: {{ upgrade.price }} </p>


    </section>

    <h3> AutoUpgrade Prices </h3>

    <section v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">

        <p> {{ upgrade.name }}: {{ upgrade.price }} </p>


    </section>





    <h2>ClickUpgrade Quantities</h2>

    <section v-for="upgrade in AppState.clickUpgrades" :key="upgrade.name">

        <p> {{ upgrade.name }}: {{ upgrade.quantity }}</p>

    </section>


    <h2>AutoUpgrade Quantities</h2>

    <section v-for="upgrade in AppState.autoUpgrades" :key="upgrade.name">

        <p> {{ upgrade.name }}: {{ upgrade.quantity }}</p>

    </section>



</template>


<style lang="scss" scoped></style>