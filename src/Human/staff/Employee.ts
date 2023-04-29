import { Person } from "./Person";
import { Pilot } from "./Pilot";
import { Co_Pilot } from "./Co_Pilot";

export class Employee extends Person {
    public position: string;
    public pilot : Pilot[]=[];
    public co_pilot: Co_Pilot[] = [];
    public manager : string ;
    constructor(firstName:string, lastName:string, dateOfbirth:string,gender:string, phoneNumber:number, position:string, manager:string){
        super(firstName,lastName,dateOfbirth,gender,phoneNumber)
        this.position = position;
        this.manager = manager;
    }
}