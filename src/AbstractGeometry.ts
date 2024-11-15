import Enveloppe from "./Enveloppe";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import WktVisitor from "./WktVisitor";

export default abstract class AbstractGeometry implements Geometry {
    
    abstract GetType(): string;
    abstract IsEmpty(): boolean ;
    abstract Translate(dx: number, dy: number);
    abstract Clone(): Geometry;
    abstract GetEnveloppe(): Enveloppe;
    abstract Accept(visitor: GeometryVisitor);
    
    AsText():String {
        const wktv = new WktVisitor();
        this.Accept(wktv);
        return wktv.GetResult();
    };
}