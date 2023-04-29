import {Flight} from "./Flight";
export class Trip {
    private flight: Flight[] = []
    private country: string;
    constructor(country: string) {
         this.country = country;
    }
    
    addFlight(flight: Flight) {
        this.flight.push(flight);
    }
}