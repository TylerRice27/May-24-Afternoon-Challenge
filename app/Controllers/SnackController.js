import { snackService } from "../Services/SnackService.js";




export class SnackController {

    constructor() {

        console.log("Hey This Is Your Controller");

    }



    addMoney() {

        snackService.serviceClick()
    }

}

