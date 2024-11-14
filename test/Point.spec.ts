import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("test getType", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getType()).to.equal("Point");
    });
    it("test isEmpty", () => {
        const p1 = new Point();
        const p2 = new Point([3.0,4.0]);
        expect(p2.isEmpty()).to.equal(false);
        expect(p1.isEmpty()).to.equal(true);
    });
});

describe("test LineString", () => {
    const p1 = new Point([3.0,4.0]);
    const p2 = new Point([2.0,5.0]);
    const points = new LineString([p1,p2]);

    it("test default constructor", () => {
        const pointsEmpty = new LineString();
        expect(pointsEmpty.getNumPoints()).to.equal(0);
        expect(Number.isNaN(pointsEmpty.getPointN(1)));
    });
    it("test constructor with coordinates", () => {
        expect(points.getNumPoints()).to.equal(2);
        expect(points.getPointN(1)).to.equal(p2);

    });
    it("test getType", () => {
        expect(points.getType()).to.equal("LineString");
    });
    it("test isEmpty", () => {
        const pointsEmpty = new LineString();
        expect(points.isEmpty()).to.equal(false);
        expect(pointsEmpty.isEmpty()).to.equal(true);
    });
});

