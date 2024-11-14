import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry {

    private points?: Array<Point>;

    constructor(points?: Array<Point>){
        this.points = points ? points : [];
    }

    GetType(): string {
        return "Ligne";
    }

    IsEmpty(): boolean {

        return this.GetNumPoints() == 0 ? true : false;
    }

    Clone(): LineString {
        
        let n_pts : Array<Point> = [];
        this.points.forEach((pts) => {
            n_pts.push(pts.Clone());
        })

        return new LineString(n_pts);
    }

    Translate(dx: number, dy: number){
        
        this.points.forEach((pt) => {
            pt.Translate(dx,dy);
        }
        )
    }

    GetNumPoints() : number {
        return this.points.length;
    }
    
    GetPointN(n:number) : Point{
        return this.points[n];
    }

  }