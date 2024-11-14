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
      return this.points.length;
    }

    
  
    getPointN(n : number): Point {
      return this.points[n];
    }

    isEmpty(): boolean {
        if (this.points.length === 1){
            return this.getPointN(0).isEmpty()
        }
        return this.points.length === 0
    }
  
  }
  