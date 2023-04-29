// import { Passenger } from "../Human/Passenger";
import { Trip } from "./Trip";
import { Tickets } from "../Medical/Tickit";
export class Booking{
    // public passenger : Passenger[]=[];
    public trip : Trip[]= [];
    public ticket : Tickets;
    private price : number;
    constructor(price : number){
        this.price = price;
    }
    addTrip(trip: Trip){
        this.trip.push(trip)
    }
}