import { Employee } from "../../Human/staff/Employee";
import { Booking } from "../Booking";
import { Flight } from "../Flight";
import { Route } from "../route";
export class Airline {
    public router: Route[]=[]
    public employee: Employee[]=[];
    private name :string;
    private address :string;
    private bookings: Booking[] = [];
    constructor(name :string, address :string){
        this.name = name;
        this.address = address;
    }
   
    addBooking(booking: Booking){
        this.bookings.push(booking);
    }
    getNumberOfPassenger(): number{
        let countpassenger:number = 0
        this.bookings.forEach(booking=>{
            if(booking.getReturnTicket()){
                countpassenger += 1
            };
        });
        return countpassenger;
    };
    //  getMealsByFlight(flight1: Flight) {
        
    // }
};
