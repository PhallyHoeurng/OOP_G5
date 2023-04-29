import { Passenger } from "./Human/Passenger";
import { Flight} from "./Airplan/Flight";
import { Booking } from "./Airplan/Booking";
import { Trip } from "./Airplan/Trip";
import { Bag } from "./Human/Bag";
import { Pilot } from "./Human/staff/Pilot";


let passenger1 = new Passenger("Phally", "Houn", "05-04-2002", "famele", 12345, "M0120023");
let booking1 = new Booking(20000);
let trip1 = new Trip("Cambodia");
let bags1 = new Bag("red", "S2", "Ms", "1k")
let flight1 = new Flight("11:am", "12:pm", "AASS01", "A1")
let flight2 = new Flight("11:am", "01:pm", "AASS01", "A1")


trip1.addFlight(flight1)
trip1.addFlight(flight2)
booking1.addTrip(trip1)
passenger1.addBooking(booking1)
passenger1.addBag(bags1)
console.log(passenger1)

let pilot1 = new Pilot("vi", "la", "30-09", "male", 1234, "pp", "sd", 2000)
let pilot2 = new Pilot("vi", "la", "30-09", "male", 1234, "pp", "sd", 2000)
pilot1.addflights(flight1)
pilot1.addflights(flight2)
console.log(pilot1.getflight("11:am"));

