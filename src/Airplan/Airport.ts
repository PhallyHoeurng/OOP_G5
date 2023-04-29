import { Route } from "./route";
export class Airport {
    public router: Route[]=[];
    private name : string;
    constructor(name : string) {
        this.name = name;
    }
}