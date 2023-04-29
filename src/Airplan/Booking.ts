import { Trip } from "./Trip";
import { Tickets } from "../Medical/Tickit";
export class Booking{
    public trip : Trip[]= [];
    public ticket : Tickets;
    private price : number;
    constructor(price : number, private returnTicket: boolean){
        this.price = price;
    };
    addTrip(trip: Trip){
        this.trip.push(trip);
    };
    getReturnTicket(): boolean {
        return this.returnTicket
    };
};