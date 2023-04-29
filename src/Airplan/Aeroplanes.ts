import { Pilot } from "../Human/staff/Pilot";
import {Passenger } from "../Human/Passenger";
import { Flight } from "./Flight";
import { Layout } from "./Layout";
export class Aeroplanes {
    private pilot : Pilot;
    public passenger: Passenger[]=[];
    public Flight: Flight;
    public layout: Layout;
    public registration : string;
    constructor(registration : string){
        this.registration = registration;
    }
}