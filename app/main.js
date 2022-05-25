import { SnackController } from "./Controllers/SnackController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  //Dont capitalize the instance on this the one to the left of the equal sign
  snackController = new SnackController;

}

window["app"] = new App();
