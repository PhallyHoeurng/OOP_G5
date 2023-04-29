import { Passenger } from "../Human/Passenger";
import { Layout } from "./Layout";
export class Seat {
    private passenger: Passenger;
    public layout: Layout;
    private seatId :number;
    constructor(seatId :number){
        this.seatId = seatId;
    }
}