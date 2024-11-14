import Geometry from  "./Geometry";
import Point from "./Point";

export default class Linestring implements Geometry {
    private points: Array<Point>;
  
    constructor(points: Array<Point> = []) {
      this.points = points ;
    }
  
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
        if (n>this.getNumPoints() || n<0 ||this.isEmpty()){
            return new Point();
        }
      return this.points[n];
    }

    isEmpty(): boolean {
        
        return this.points.length === 0 
    }
  
    translate(dx :number, dy:number): void {
        function translater(point: Point) {
            point.translate(dx,dy);
          }

        if (!this.isEmpty()){
        this.points.forEach(translater)
        }
    }
  }
  