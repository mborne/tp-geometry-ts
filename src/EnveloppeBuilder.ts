import Coordinate from "./Coordinate";
import Enveloppe from "./Enveloppe";

export default class EnveloppeBuilder {

    
    private xvals : Array<number> = [];
    private yvals : Array<number> = [];

    Insert(coordinate:Coordinate){
        this.xvals.push(coordinate[0]);   
        this.yvals.push(coordinate[1]);   
    }

    Build() : Enveloppe{

        const xmin = Math.min(...this.xvals);
        const xmax = Math.max(...this.xvals);
        const ymin = Math.min(...this.yvals);
        const ymax = Math.max(...this.yvals);
        const a = [xmin,ymin];
        const b = [xmax,ymax];
        const new_env = new Enveloppe(a,b);

        return new_env;
    }

}