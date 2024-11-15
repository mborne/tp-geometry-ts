import Coordinate from "./Coordinate";
import EnveloppeBuilder from "./EnveloppeBuilder";



export default class Enveloppe {

    private bottomleft : Coordinate;
    private topright : Coordinate;

    constructor (bottomleft : Coordinate,topright : Coordinate ){

        this.bottomleft = bottomleft;
        this.topright = topright;

        //const Builder = new EnveloppeBuilder();

        
    }

    IsEmpty() : boolean {
        return this.bottomleft.length == 0 ? true : false;
    }

    GetYmin(): number {
        return this.bottomleft[1]>this.topright[1] ? this.topright[1] : this.bottomleft[1];
    }

    GetYmax(): number {
        return this.bottomleft[1]>this.topright[1] ? this.bottomleft[1] : this.topright[1];
    }

    GetXmin(): number {
        return this.bottomleft[0]>this.topright[0] ? this.topright[0] : this.bottomleft[0];
    }

    GetXmax(): number {
        return this.bottomleft[0]>this.topright[0] ? this.bottomleft[0] : this.topright[0]; 
    }

    ToString():String {
        return "L'emprise de la forme correspond à "+this.bottomleft+" en bas à gauche, et "+this.topright+" en haut à droite.";
    }
}