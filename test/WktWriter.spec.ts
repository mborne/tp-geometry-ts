import { describe, it, expect } from "vitest";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import Linestring from "../src/Linestring";
import Geometry from "../src/Geometry";

describe("test WktWriter", () => {
    const writer = new WktWriter();

    it("should write an empty Point", () => {
        expect(writer.write(new Point())).to.equal("POINT EMPTY");
    });

    it("should write a Point", () => {
        expect(writer.write(new Point([3.0, 4.0]))).to.equal("POINT(3 4)");
    });

    it("should keep decimals", () => {
        expect(writer.write(new Point([2.5, 4.25]))).to.equal("POINT(2.5 4.25)");
    });

    it("should write an empty LineString", () => {
        expect(writer.write(new Linestring())).to.equal("LINESTRING EMPTY");
    });

    it("should write a LineString", () => {
        const g = new Linestring([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0])
        ]);
        expect(writer.write(g)).to.equal("LINESTRING(0 0,1 1,5 5)");
    });

    it("should throw for an unsupported geometry type", () => {
        const unknown = {} as Geometry;
        expect(() => writer.write(unknown)).to.throw(TypeError);
    });
});