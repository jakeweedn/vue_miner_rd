import { AppState } from "@/AppState.js"

export class Upgrade {
    constructor(data) {

        this.id = data.id
        this.name = data.name
        this.price = data.price
        this.quantity = data.quantity
        this.multiplier = data.multiplier

    }

    get isUnlocked() {

        return AppState.cheese >= this.price
    }



}