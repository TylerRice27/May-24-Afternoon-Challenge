import { ProxyState } from "../AppState.js";
import { SnackController } from "../Controllers/SnackController.js";
import { Snack } from "../Models/Snack.js";



class SnackService {

    serviceClick() {
        console.log("Hi from your service controller", money);

        ProxyState.money += 0.25

    }

    buySnacks(id) {
        // I will be passing id here and I also need use the find function to find the item ID that I want to buy.
        // debugger
        const buyOneSnacks = ProxyState.snacks.find(s => s.id == id)
        console.log(id, "SnackService buy the right item");

        let money = ProxyState.money

        if (money >= buyOneSnacks) {
            money - buyOneSnacks.price
            console.log("you can buy ");

        }
    }



}



export const snackService = new SnackService()