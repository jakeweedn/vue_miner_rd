import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({



  cheese: 0,

  upgrades: 0

  clickUpgrades: [
    new Upgrade({
      id: '234f',
      name: 'Dynamite',
      quantity: 2,
      multiplier: 3

    }),

    new Upgrade({
      id: '132g',
      name: 'Tabasco Sauce',
      quanity: 3,
      multiplier: 4

    })


  ],

  autoUpgrades: [
    new Upgrade({
      id: '8c24',
      name: 'Sunflower Seed',
      quantity: 8,
      multiplier: 6,

    }),

    new Upgrade({
      id: '78bn',
      name: 'Pepperoni',
      quanity: 7,
      multiplier: 5,
    })


  ],



  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})

