import Enveloppe from "./Enveloppe";
import LineString from "./LineString";
import Point from "./Point";

export default interface GeometryVisitor{
   VisitPoint(point:Point);
   VisitLineString(lineString: LineString)
}