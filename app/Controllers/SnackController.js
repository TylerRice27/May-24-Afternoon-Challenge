import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
import { snackService } from "../Services/SnackService.js";


function _drawSnacks() {
    let snacks = ProxyState.snacks
    let template = ``
    snacks.forEach(s => template += s.Template)
    console.log(template);
    document.getElementById('shop-items').innerHTML = template
}


export class SnackController {

    constructor() {

        console.log("Hey This Is Your Controller");
        _drawSnacks()
    }



    addMoney() {

        snackService.serviceClick()
    }

}

