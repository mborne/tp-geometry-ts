import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        it("test default constructor", () => {
            const l = new LineString();  
            expect(l.getPoints()).to.deep.equal([]);  
            expect(l.getNumPoints()).to.equal(0);  
        });
    });
    it("test constructor with coordinates", () => {
        it("test constructor with coordinates", () => {
            const p1 = new Point([3.0, 4.0]);  
            const p2 = new Point([2.0, 7.0]);  
            const l = new LineString([p1, p2]);  
        
            
            expect(l.getPoints().map(p => p.getCoordinate())).to.deep.equal([[3.0, 4.0], [2.0, 7.0]]);
            expect(l.getPointN(1)).to.equal(p2);  
            expect(l.getNumPoints()).to.equal(2);  
        });
        
    });
    it("test getType()", () => {
        const p1 = new Point([3.0,4.0]);
        const p2 = new Point([2.0,7.0]);
        const l = new LineString([p1,p2]);
        expect(l.getType()).to.deep.equal("LineString");     
    });
});