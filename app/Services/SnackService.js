import { ProxyState } from "../AppState.js";
import { SnackController } from "../Controllers/SnackController.js";



class SnackService {

    serviceClick() {
        console.log("Hi from your service controller", money);

        ProxyState.money += 0.25

    }

    buyDrink() {


    }



}



export const snackService = new SnackService()