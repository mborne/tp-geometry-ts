import Enveloppe from "./Enveloppe";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";


export default class LogGeometryVisitor implements GeometryVisitor{

    constructor(
        private log = console.log
){

}
    VisitPoint(point: Point) {
        if (point.IsEmpty()){
            this.log("Je suis un point vide.");
        } else {
            this.log(`Je suis un point avec x=${point.x()} et y=${point.y()}.`)
        }
      
    }


    VisitLineString(lineString: LineString) {
        if (lineString.IsEmpty()){
            this.log("Je suis une polyligne vide.");
        } else {
            this.log(`Je suis une polyligne définie par ${lineString.GetNumPoints()} points.`);
        }
      
    }
   

}