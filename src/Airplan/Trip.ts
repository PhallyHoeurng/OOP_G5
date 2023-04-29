import { Booking } from "./Booking";
export class Trip {
    private booking : Booking;
    private country: string;
    constructor(country: string) {
         this.country = country;
    }
}