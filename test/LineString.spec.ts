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
   
});