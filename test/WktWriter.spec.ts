import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter";




describe("test Wkt Transformation", () => {
    it("test avec point", () => {
        
        const g = new Point([3.0,4.0]);
        const writer = new WktWriter();
        // "POINT(3.0 4.0)"
        const wkt = writer.Write(g);
        expect(wkt).to.equal("POINT (3 4)");

    });

    it("test avec ligne", () => {
        
        const p = new Point([2.0,2.0]);
        const p2 = new Point([3.0,4.0]);
        const p3 = new Point([5.0,-4.0]);
        const ls = new LineString([p,p2,p3]);
        const writer = new WktWriter();
        const wkt = writer.Write(ls);
        expect(wkt).to.equal("LINESTRING (2 2, 3 4, 5 -4)");
    });

    it("tests vide", () => {
        
        const p = new Point();
        const ls = new LineString();
        const writer = new WktWriter();
        const wkt = writer.Write(ls);
        const wkt2 = writer.Write(p);
        expect(wkt).to.equal("LINESTRING EMPTY");
        expect(wkt2).to.equal("POINT EMPTY");
    });
});