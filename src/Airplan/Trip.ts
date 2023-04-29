// import { Booking } from "./Booking";
import {Flight} from "./Flight";
export class Trip {
    // private booking : Booking;
    private flight: Flight[] = []
    private country: string;
    constructor(country: string) {
         this.country = country;
    }
    addFlight(flight: Flight) {
        this.flight.push(flight);
    }
}