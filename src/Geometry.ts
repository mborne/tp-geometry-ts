import Enveloppe from "./Enveloppe";
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry {
    getType(): string;

    isEmpty(): boolean;

    translate(dx:number, dy:number);

    clone(): Geometry;

    getEnvelope(): Enveloppe;

    accept(visitor: GeometryVisitor)
}