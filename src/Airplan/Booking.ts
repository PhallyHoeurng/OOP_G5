import { Passenger } from "../Human/Passenger";
import { Trip } from "./Trip";
import { Tickets } from "../Medical/Tickit";
export class Booking{
    public passenger : Passenger[]=[];
    public Trip : Trip;
    public ticket : Tickets;
    private price : number;
    private returetickit: undefined;
    constructor(price : number, returetickit){
        this.price = price;
        this.returetickit = returetickit;
    }
}