import { generateId } from "../Utils/generateId.js"



export class Snack {

    constructor(name, price, img) {
        this.id = generateId()
        this.name = name
        this.price = price
        this.img = img
    }



    get Template() {
        return `
        <div class="col-md-4">
          <img class="drinks m-3" src="${this.img}" alt="Mountain Dew Pic">
          <button type="button" onclick="app.snackController.buySnacks('${this.id}')" class="btn btn-success">$${this.price} Buy ${this.name}</button>

        </div>
        
         `
    }

}