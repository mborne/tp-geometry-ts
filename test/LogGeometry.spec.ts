import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LogGeometryVisitor from "../src/LogGeometryVisitor"
import LineString from "../src/LineString";
describe("test GeomLog", () => {

    it("test affichage point", () => {
   
        const p = new Point([3.0,1.0]);
        const visitor = new LogGeometryVisitor();
        expect(p.Accept(visitor));

        
    });

    it("test affichage ligne", () => {
   
        const p = new Point([3.0,1.0]);
        const p2 = new Point([4.0,1.0]);
        const ls = new LineString([p,p2]);
        const visitor = new LogGeometryVisitor();
        expect(ls.Accept(visitor));
        
        
    });
    it("tests vide", () => {
   
        const p = new Point();
        const ls = new LineString();
        const visitor = new LogGeometryVisitor();
        expect(p.Accept(visitor));
        expect(ls.Accept(visitor));
        
        

        
    });
});