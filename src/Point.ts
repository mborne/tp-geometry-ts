import AbstractGeometry from "./AbstractGeometry";
import Coordinate from "./Coordinate";
import Enveloppe from "./Enveloppe";
import EnveloppeBuilder from "./EnveloppeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import LogGeometryVisitor from "./LogGeometryVisitor";
import WktVisitor from "./WktVisitor";

export default class Point extends AbstractGeometry{

  private coordinate?: Coordinate;

  constructor(coordinate?: Coordinate) {
    super();
    this.coordinate = coordinate ;
  }

  GetType(): string {
    return "Point";
  }

  IsEmpty(): boolean {
    return this.coordinate == null ? true : false;
  }

  Translate(dx: number, dy: number) {
    dx = this.x() + dx;
    dy = this.y() + dy;
    this.coordinate[0] = dx;
    this.coordinate[1] = dy;
  }

  Accept(lgv : GeometryVisitor){
    lgv.VisitPoint(this);
  }

  Clone(): Point {
    return new Point([this.x(),this.y()]);
  }

  GetEnveloppe(): Enveloppe {
    const env = new EnveloppeBuilder();
    env.Insert(this.getCoordinate());
    return env.Build();
}

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    return !this.IsEmpty() ? this.coordinate[0] : Number.NaN ;
  }

  y(): number {
    return !this.IsEmpty() ? this.coordinate[1] : Number.NaN ;
  }


}
