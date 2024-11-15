import Point from "./Point"
import LineString from "./LineString";

export default interface Geometry {
    visitPoint(point: Point): void;
    visitLineString(points: LineString): void;
}