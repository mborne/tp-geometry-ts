import { describe, it, expect } from "vitest";
import Enveloppe from "../src/Enveloppe";

describe("test Enveloppe", () => {
    it("should be empty by default", () => {
        const e = new Enveloppe();
        expect(e.isEmpty()).to.be.true;
    });

    it("should not be empty with two corners", () => {
        const e = new Enveloppe([0.0, 1.0], [2.0, 3.0]);
        expect(e.isEmpty()).to.be.false;
    });

    it("should return NaN bounds when empty", () => {
        const e = new Enveloppe();

        expect(e.getXmin()).toBeNaN();
        expect(e.getYmin()).toBeNaN();
        expect(e.getXmax()).toBeNaN();
        expect(e.getYmax()).toBeNaN();
    });

    it("should return the right bounds", () => {
        const e = new Enveloppe([0.0, 1.0], [2.0, 3.0]);
        expect(e.getXmin()).to.equal(0.0);
        expect(e.getYmin()).to.equal(1.0);
        expect(e.getXmax()).to.equal(2.0);
        expect(e.getYmax()).to.equal(3.0);
    });

    it("should format with toString()", () => {
        const e = new Enveloppe([0.0, 1.0], [2.0, 3.0]);
        expect(e.toString()).to.equal("[0, 1, 2, 3]");
    });
});