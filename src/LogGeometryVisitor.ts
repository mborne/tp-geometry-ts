import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import Linestring from "./Linestring";

export default class LogGeometryVisitor implements GeometryVisitor {

    constructor(
        private readonly log: (message: string) => void = (message) => console.log(message)
    ) {}

    visitPoint(point: Point) {
        if (point.isEmpty()) {
            this.log("Je suis un point vide.");
        } else {
            this.log(`Je suis un point avec x=${point.x()} et y=${point.y()}.`);
        }
    }

    visitLineString(lineString: Linestring) {
        if (lineString.isEmpty()) {
            this.log("Je suis une polyligne vide.");
        } else {
            this.log(`Je suis une polyligne définie par ${lineString.getNumPoints()} point(s).`);
        }
    }
}