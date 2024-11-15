import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Enveloppe from "../src/Enveloppe";
import EnveloppeBuilder from "../src/EnveloppeBuilder";


describe("test geometry abstract", () => {
    it("texte point", () => {
        const p = new Point([3.0,4.0]);
        console.log(p.AsText());
        expect(p.AsText()).to.equal("POINT (3 4)");
      
    
        
    });
    it("texte ligne", () => {
        const p = new Point([3.0,4.0]);
        const p2 = new Point([7.0,2.0]);
        const ls = new LineString([p,p2]);
        console.log(ls.AsText());
        expect(ls.AsText()).to.equal("LINESTRING(3 4, 7 2)");
    });

});