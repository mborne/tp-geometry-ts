import "mocha";
import { expect } from "chai";
import LengthVisitor from "../src/LengthVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";


describe("test LengthVisitor", () => {
    
    it("test accept", () => {
        const visitor = new LengthVisitor();
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,5.0]);
        const points = new LineString([p1,p2]);
        const geoms = new GeometryCollection([p1,points]);
        const pEmpty = new Point();
        const pointsEmpty = new LineString();
        const geomsEmpty = new GeometryCollection();

        expect(pEmpty.accept(visitor)).to.equal(0);
        expect(p1.accept(visitor)).to.equal(0);
        expect(pointsEmpty.accept(visitor)).to.equal(0);
        expect(points.accept(visitor)).to.equal(5);
        expect(geomsEmpty.accept(visitor)).to.equal(0);
        expect(geoms.accept(visitor)).to.equal(5);
    });
});