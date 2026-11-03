import Geometry from "./Geometry"
import Point from "./Point"

export default class Linestring implements Geometry {

    private points: Point[];

    constructor(points?:Point[]){
        this.points = points ? points : []; // comme ça le point est toujours défini comme un tableau vide pour éviter le plantage
    }
    
    getType(): string {
        return "LineString"
    }

    getNumPoints(): number {
        return this.points.length 
    }

    getPointN (n: number){
        return this.points[n];
    }

    isEmpty(): boolean {
        return this.points.length === 0;
    }
}
