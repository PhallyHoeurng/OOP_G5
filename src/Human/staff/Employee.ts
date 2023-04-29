import { Person } from "./Person";
import { Pilot } from "./Pilot";
import { Co_Pilot } from "./Co_Pilot";

export class Employee extends Person {
    public position: string;
    public pilot : Pilot[]=[];
    public co_pilot: Co_Pilot[] = [];
    constructor(firstName:string, lastName:string, dateOfbirth:string,gender:string, phoneNumber:number, position:string){
        super(firstName,lastName,dateOfbirth,gender,phoneNumber)
        this.position = position;
    }
}