import AbstractGeometry from "./AbstractGeometry";
import Enveloppe from "./Enveloppe";
import EnveloppeBuilder from "./EnveloppeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import LogGeometryVisitor from "./LogGeometryVisitor";
import Point from "./Point";
import WktVisitor from "./WktVisitor";

export default class LineString extends AbstractGeometry {

    private points?: Array<Point>;

    constructor(points?: Array<Point>){
        super();
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

    Accept(lgv : GeometryVisitor){
        lgv.VisitLineString(this);
      }

    GetEnveloppe(): Enveloppe {

        const env = new EnveloppeBuilder();
        this.points.forEach((pts) => {
            const coord = pts.getCoordinate();
            env.Insert(coord);
        })
        return env.Build();
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