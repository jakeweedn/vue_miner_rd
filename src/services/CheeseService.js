import { AppState } from "@/AppState.js"


class CheeseService {

    mine() {
        console.log('Mining in the service')
        AppState.cheese += 1



    }


}

export const cheeseService = new CheeseService()