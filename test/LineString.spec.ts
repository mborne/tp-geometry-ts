import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";


describe("test LineString", () => {
    it("test à vide", () => {
        const ls = new LineString();
        expect(Number.isNaN(ls.GetNumPoints));
        expect(Number.isNaN(ls.GetPointN));
        expect(ls.GetNumPoints()).to.equal(0);
        expect(ls.IsEmpty()).to.equal(true);
        
    });
    it("test GetType, GetPointN et GetNumPoints", () => {

        const p = new Point([2.0,2.0]);
        const p2 = new Point([3.0,4.0]);
        const ls = new LineString([p,p2]);

        expect(ls.GetType()).to.equal("Ligne");
        expect(ls.GetPointN(0)).to.equal(p);
        expect(ls.GetNumPoints()).to.equal(2);
        expect(ls.IsEmpty()).to.equal(false);
    });
    it("testons la translacion de tout les puntos de la ligne", () => {

        const p = new Point([2.0,2.0]);
        const p2 = new Point([3.0,4.0]);
        const ls = new LineString([p,p2]);
        ls.Translate(1.0,2.0)
        const pt_result = new Point([3.0,4.0]);
        expect(ls.GetPointN(0)).to.deep.equal(pt_result)
    });
    it("testons le clonage de la ligne", () => {
        const p = new Point([2.0,2.0]);
        const p2 = new Point([3.0,4.0]);
        const ls = new LineString([p,p2]);
        const ls_clone = ls.Clone();
        ls_clone.Translate(4.0,4.0);
        // Test si la translation diffère de la ligne d'origine
        expect(ls_clone.GetPointN(0)).not.equal(ls.GetPointN(0));
        console.log(ls.GetPointN(0));
        console.log(ls_clone.GetPointN(0));
        
    });
    it("testons l'enveloppage d'une ligne", () => {
        const p = new Point([2.0,2.0]);
        const p2 = new Point([3.0,4.0]);
        const ls = new LineString([p,p2]);
        expect(ls.GetEnveloppe())
        
    });
});