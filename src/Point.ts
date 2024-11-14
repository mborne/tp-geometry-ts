import Coordinate from "./Coordinate";
import Geometry from  "./Geometry";

export default class Point implements Geometry {
  private coordinate: Coordinate;

  constructor(coordinate: Coordinate  = []) {
    this.coordinate = coordinate ;
  }

  isEmpty(): boolean {
    return Number.isNaN(this.x())||Number.isNaN(this.y());
  }

  translate(dx :number, dy :number) :void {
    if (!this.isEmpty()){
    this.coordinate[0] = this.x() + dx;
    this.coordinate[1] = this.y() + dy;
    }
  }

  clone() : Geometry {
      return new Point([this.x(),this.y()])
  }

  getType(): string {
    return "Point";
  }

  getCoordinate(): Coordinate {
    return this.coordinate;
  }

  x(): number {
    if (this.coordinate.length === 0)
      {
        return Number.NaN
      }
    return this.coordinate[0];
  }

  y(): number {
    if (this.coordinate.length === 0)
      {
        return Number.NaN
      }
    return this.coordinate[1];
  }

}
