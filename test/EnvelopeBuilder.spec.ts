import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {
    it("should build an empty envelope if nothing is inserted", () => {
        const builder = new EnvelopeBuilder();
        expect(builder.build().isEmpty()).to.be.true;
    });

    it("should build the envelope of the example", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0, 1.0]);
        builder.insert([2.0, 0.0]);
        builder.insert([1.0, 3.0]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.false;
        expect(result.toString()).to.equal("[0, 0, 2, 3]");
    });

    it("should handle a single coordinate", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([5.0, 7.0]);
        expect(builder.build().toString()).to.equal("[5, 7, 5, 7]");
    });

    it("should ignore empty coordinates", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([]);
        expect(builder.build().isEmpty()).to.be.true;
    });
});