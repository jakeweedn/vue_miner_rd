import { AppState } from "@/AppState.js"


class CheeseService {

    mine() {
        console.log('Mining in the service')
        AppState.cheese++



    }


}

export const cheeseService = new CheeseService()