export class Person {
    private firstName: string;
    private lastName: string;
    private dateOfbirth : string;
    public gender: string;
    public phoneNumber: number;
    constructor(firstName:string, lastName:string, dateOfbirth:string,gender:string, phoneNumber:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfbirth = dateOfbirth;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
    }
}