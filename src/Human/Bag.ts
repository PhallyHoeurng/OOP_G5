export class Bag{
    public color: string
    public size : string;
    private label: string
    private  weight : string;
    constructor(color: string, size: string, label: string, weight: string){
        this.color = color;
        this.size = size;
        this.label = label;
        this.weight = weight;
    }
}