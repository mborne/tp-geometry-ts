import Coordinate from "./Coordinate";

export default class Enveloppe {
  private bottomLeft: Coordinate;
  private topRight: Coordinate;
constructor(bottomLeft: Coordinate,topRight: Coordinate ) {
    this.bottomLeft = bottomLeft ? bottomLeft : [];
    this.topRight = topRight ? topRight : [];
}

isEmpty() : boolean {
    return this.bottomLeft.length === 0 || this.topRight.length ===0
}

}