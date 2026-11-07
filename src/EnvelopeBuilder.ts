import Coordinate from "./Coordinate";
import Enveloppe from "./Enveloppe";

export default class EnvelopeBuilder {
private xMin: number = Number.POSITIVE_INFINITY;
  private yMin: number = Number.POSITIVE_INFINITY;
  private xMax: number = Number.NEGATIVE_INFINITY;
  private yMax: number = Number.NEGATIVE_INFINITY;


  insert(coordinate: Coordinate): void {
    if (coordinate.length < 2) {
      return; 
    }
    this.xMin = Math.min(this.xMin, coordinate[0]);
    this.yMin = Math.min(this.yMin, coordinate[1]);
    this.xMax = Math.max(this.xMax, coordinate[0]);
    this.yMax = Math.max(this.yMax, coordinate[1]);
  }

  build(): Enveloppe {
    if (this.xMin === Number.POSITIVE_INFINITY) {
      return new Enveloppe(); 
    }
    return new Enveloppe([this.xMin, this.yMin], [this.xMax, this.yMax]);
  }
}



