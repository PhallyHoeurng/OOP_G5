import { Employee } from './Employee'

export class Co_Pilot extends Employee{
    public employee: Employee;
    public salary: number;
    constructor(firstName:string, lastName:string, dateOfbirth:string,gender:string, phoneNumber:number, position:string, manager:string, salary:number){
        super(firstName, lastName, dateOfbirth, gender, phoneNumber, position, manager);
        this.salary = salary;
    }
   getsalary():number{
    return this.salary;
   }
}