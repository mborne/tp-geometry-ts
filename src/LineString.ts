import Geometry from  "./Geometry";
import Point from "./Point";

export default class Linestring implements Geometry {
    private points: Array<Point>;
  
    constructor(points: Array<Point> = []) {
      this.points = points ;
    }
  /*
    isEmpty() boolean {
      return this.points;
    }*/
    getType(): string {
      return "LineString";
    }
  
    getPoints(): Array<Point> {
      return this.points;
    }
  
    getNumPoints(): number {
      return this.points.lastIndexOf(this.points[-1])-1;
    }

    
  
    getPointN(n : number): Point {
      return this.points[n];
    }
  
  }
  