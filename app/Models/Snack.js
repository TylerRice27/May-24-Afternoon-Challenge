import { generateId } from "../Utils/generateId"



export class Snack {

    constructor(name, price) {
        this.id = generateId()
        this.name = name
        this.price = price
    }



}