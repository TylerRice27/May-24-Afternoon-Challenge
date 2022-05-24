import { SnackController } from "../Controllers/SnackController.js";


class SnackService {

    serviceClick() {
        console.log("Hi from your service controller");

    }

}



export const snackService = new SnackService()