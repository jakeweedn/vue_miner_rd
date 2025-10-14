import { AppState } from "@/AppState.js"


class CheeseService {

    mine() {
        console.log('Mining in the service')

        let clickUpgradeTotal = 0;

        for (let i = 0; i <= 1; i++) {

            clickUpgradeTotal += AppState.clickUpgrades[i].quantity * AppState.clickUpgrades[i].multiplier



        }

        AppState.cheese += 1 + clickUpgradeTotal;



        // AppState.cheese += AppState.clickUpgrades[0].quantity * AppState.clickUpgrades[0].multiplier + AppState.clickUpgrades[1].quantity * AppState.clickUpgrades[1].multiplier + 1

        //Got the clunky way from moon_miner, but can I remember the less clunky way to write this or look up in references? Yes, see collectAutoUpgrades() in Moon Miner! 



    }

    buyUpgrade(upgrade) {

        console.log('Passed to the service')

        if (AppState.cheese < upgrade.price) {
            alert("Not enough cheese!")
        }

        else {

            upgrade.quantity += 1;
            AppState.cheese -= upgrade.price

            upgrade.price += 1

            //Draw upgrade quanities to the page: Vue method-computed! See App.vue in reference




        }




    }

    addAutoUpgrades() {

        let autoUpgradeTotal = 0;

        for (let i = 0; i <= 1; i++) {

            autoUpgradeTotal += AppState.autoUpgrades[i].quantity * AppState.autoUpgrades[i].multiplier



        }

        AppState.cheese += autoUpgradeTotal


    }

}

export const cheeseService = new CheeseService()