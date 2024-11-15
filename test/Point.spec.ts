import "mocha";
import { expect } from "chai";
import Point from "../src/Point";

describe("test Point", () => {

    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.equal(undefined);
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
        expect(p.IsEmpty()).to.equal(true);
    });

    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.GetType()).to.equal("Point");
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
        expect(p.IsEmpty()).to.equal(false);
    });

    it("testons la translacion du punto", () => {
        let p = new Point([3.0,4.0]);
        p.Translate(1.0,1.0);
        expect(p.getCoordinate()).to.deep.equal([4.0,5.0]);
    });

    it("testons le clonage du point", () => {
        const p = new Point([3.0,4.0]);
        const p_clone = p.Clone();
        expect(p_clone.getCoordinate()).to.deep.equal([3.0,4.0]);
        p_clone.Translate(2.0,2.0);
        console.log(p);
        console.log(p_clone);
    });
    it("testons l'enveloppage du point unique", () => {
        const p = new Point([3.0,4.0]);
        console.log(p.GetEnveloppe());
        
    });
});



