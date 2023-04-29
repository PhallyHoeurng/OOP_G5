import { Booking } from "../Airplan/Booking";
import { Bag } from "./Bag";
import { Person } from "./staff/Person";
export class Passenger extends Person {
    private bags : Bag[] = [];
    private booking: Booking[]=[]
    private PasportNumber: string;
    constructor(firstName:string, lastName:string, dateOfbirth:string, gender:string, phoneNumber:number, pasportNumber: string){
        super(firstName,lastName,dateOfbirth,gender,phoneNumber)
        this.PasportNumber = pasportNumber;
    }
    addBag(bag: Bag){
        this.bags.push(bag);
    }
    addBooking(booking: Booking){
        this.booking.push(booking);
    }
}