import { ProxyState } from "../AppState.js";
import { Snack } from "../Models/Snack.js";
import { snackService } from "../Services/SnackService.js";


function _drawSnacks() {
    let snacks = ProxyState.snacks
    let template = ``
    snacks.forEach(s => template += s.Template)
    // console.log(template);
    document.getElementById('shop-items').innerHTML = template
}

function _drawMoney() {
    document.getElementById('money').innerText = ProxyState.money.toString()
}


export class SnackController {

    constructor() {
        //This didn't work
        // ProxyState.on('buySnacks', buySnacks)
        ProxyState.on('money', _drawMoney)
        console.log("Hey This Is Your Controller");





        _drawSnacks()
    }

    buySnacks() {
        snackService.buySnacks()

    }

    addMoney() {

        snackService.serviceClick()
        _drawMoney()
    }


}

