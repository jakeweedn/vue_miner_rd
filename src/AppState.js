import { reactive } from 'vue'
import { Upgrade } from './models/Upgrade.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({



  cheese: 0,


  /** @type {Upgrade[]} */

  clickUpgrades: [
    new Upgrade({
      id: '234f',
      name: 'Dynamite',
      price: 7,
      quantity: 0,
      multiplier: 3

    }),

    new Upgrade({
      id: '132g',
      name: 'Tabasco Sauce',
      price: 9,
      quantity: 0,
      multiplier: 4

    })


  ],

  /** @type {Upgrade[]} */
  autoUpgrades: [

    new Upgrade({
      id: '8c24',
      name: 'Sunflower Seed',
      price: 3,
      quantity: 0,
      multiplier: 6,

    }),

    new Upgrade({
      id: '78bn',
      name: 'Pepperoni',
      price: 4,
      quantity: 0,
      multiplier: 5,
    })


  ],



  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null
})

