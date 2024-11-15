import Enveloppe from "./Enveloppe";

export default interface Geometry{
    GetType(): string;
    IsEmpty(): boolean;
    Translate(dx:number,dy:number);
    Clone(): Geometry;
    GetEnveloppe() : Enveloppe;
}