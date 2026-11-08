import Geometry from "./Geometry"
import Point from "./Point"
import EnvelopeBuilder from "./EnvelopeBuilder";
import Enveloppe from "./Enveloppe";

export default class Linestring implements Geometry {

    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points ? points : []; // comme ça le point est toujours défini comme un tableau vide pour éviter le plantage
    }

    getType(): string {
        return "LineString"
    }

    getNumPoints(): number {
        return this.points.length
    }

    getPointN(n: number) {
        return this.points[n];
    }

    isEmpty(): boolean {
        return this.points.length === 0;
    }

    translate(dx: number, dy: number) {
        for (let index of this.points) {
            index.translate(dx, dy);
        }
    }

    clone(): Linestring {
        const pointcopied = this.points.map(point => point.clone());
        return new Linestring(pointcopied)
    }

    getEnvelope(): Enveloppe {
        const builder = new EnvelopeBuilder();
        for (const point of this.points) {
            builder.insert(point.getCoordinate());
        }
        return builder.build();
    }

}
