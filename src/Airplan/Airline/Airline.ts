import { Employee } from "../../Human/staff/Employee";
import { Route } from "../route";
export class Aline {
    public router: Route[]=[]
    public employee: Employee[]=[];
    private name :string;
    private address :string;
    constructor(name :string, address :string){
        this.name = name;
        this.address = address;
    }
}