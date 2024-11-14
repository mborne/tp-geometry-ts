import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        this.points = points ? points : [] ;
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.getNumPoints() == 0 ? true : false;
    }

    getNumPoints() {
        return this.points ? this.points.length : 0;
    }

    getPointN(n:number) {
        return this.points ? this.points[n] : Number.NaN;
    }
}