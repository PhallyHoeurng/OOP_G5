import { Trip } from "./Trip";
import { Aeroplanes } from "./Aeroplanes";
import { Meal} from "../Medical/Meal";
import { Route } from "./route";
export class Flight {
    public aeroplanes: Aeroplanes;
    public trip : Trip[] = [];
    public meals : Meal[]=[];
    public route : Route[]=[];
    private startDate : string;
    private endDate : string;
    private flightNumber : string;
    private gate : string;

    constructor(startDate : string, endDate : string, flightNumber : string, gate: string){
        this.startDate = startDate;
        this.endDate = endDate;
        this.flightNumber = flightNumber;
        this.gate = gate;
    }

    addMeal(meal: Meal) {
        this.meals.push(meal);
    }
}