import { Bag } from "./Bag";
import { Person } from "./staff/Person";

export class Passenger extends Person {
    bags : Bag[] = [];
    private PasportNumber: string;
    constructor(firstName:string, lastName:string, dateOfbirth:string,gender:string, phoneNumber:number){
        super(firstName,lastName,dateOfbirth,gender,phoneNumber)
        this.PasportNumber = this.PasportNumber;
    }
}