import { Flight } from '../../Airplan/Flight';
import { Employee } from '../staff/Employee'
export class Pilot  extends Employee {
    public flight: Flight[] = [];
    public employee: Employee;
    public salary: number;
    constructor(firstName:string, lastName:string, dateOfbirth:string,gender:string, phoneNumber:number, position:string, manager:string, salary:number){
        super(firstName, lastName, dateOfbirth, gender, phoneNumber, position, manager);
        this.salary = salary;
    }
<<<<<<< HEAD
    getsalary():number{
        return this.salary;
    }
    addflights(flight: Flight){
        this.flight.push(flight);
    }
   getflight(date: string){
    // let listAllFlight = []
    let test:Flight[]=[];
    for (let listflight of this.flight){
        if (listflight["startDate"] === date){
            test.push(listflight);
        }
   }
   return test;

}

}

=======
    
    addflights(flight: Flight){
        this.flight.push(flight);
    }
    getflight(date: string){
        let test:Flight[]=[];
        for (let listflight of this.flight){
            if (listflight["startDate"] === date){
                test.push(listflight);
            }
    }
    return test;
    }
}
>>>>>>> f3c5b16ae5224fa4c0e3d73b50a4dedc2013821a
