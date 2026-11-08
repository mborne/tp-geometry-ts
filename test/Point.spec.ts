import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0, 4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0, 4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });

    it("should return 'Point' for getType()", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });

    it("return True or False if the coordinates of Point are empty", () => {
        const g = new Point([]);
        expect(g.isEmpty()).to.be.true;
    });

    it("should translate a point", () => {
        const g = new Point([3.0, 4.0]);
        g.translate(1, 1);
        expect(g.getCoordinate()).to.deep.equal([4.0, 5.0]);
    });

    it("should translate a cloned point", () => {
        const g = new Point([3.0, 4.0]);

        const g2 = g.clone()
        g2.translate(1, 1);
        expect(g2.getCoordinate()).to.deep.equal([4.0, 5.0])
    });

    it("shouldn't translate an empty point", () => {
        const g = new Point();
        g.translate(1,1);
        expect(g.isEmpty()).to.be.true;
        expect(g.getCoordinate()).to.deep.equal([]);
    });

    it("should return an empty envelope for an empty point", () => {
        const p = new Point();
        expect(p.getEnvelope().isEmpty()).to.be.true;
    });

    it("should return the envelope of a point", () => {
        const p = new Point([3.0, 4.0]);
        const envelope = p.getEnvelope();
        expect(envelope.isEmpty()).to.be.false;
        expect(envelope.toString()).to.equal("[3, 4, 3, 4]");
    });
});

