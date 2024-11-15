import Enveloppe from "./Enveloppe";
import GeometryVisitor from "./GeometryVisitor";

export default interface Geometry{
    GetType(): string;
    IsEmpty(): boolean;
    Translate(dx:number,dy:number);
    Clone(): Geometry;
    GetEnveloppe() : Enveloppe;
    Accept(lgv:GeometryVisitor);
    AsText():String;

}