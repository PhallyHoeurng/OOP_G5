export class Flight {
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
}