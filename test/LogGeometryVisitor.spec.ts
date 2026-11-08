import { describe, it, expect } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import Linestring from "../src/Linestring";

describe("test LogGeometryVisitor", () => {
    function visitAndCapture(geometry: Point | Linestring): string[] {
        const messages: string[] = [];
        const visitor = new LogGeometryVisitor((message) => messages.push(message));
        geometry.accept(visitor);
        return messages;
    }

    it("should log an empty point", () => {
        expect(visitAndCapture(new Point())).to.deep.equal(["Je suis un point vide."]);
    });

    it("should log a point", () => {
        expect(visitAndCapture(new Point([2.0, 3.0]))).to.deep.equal([
            "Je suis un point avec x=2 et y=3."
        ]);
    });

    it("should log an empty LineString", () => {
        expect(visitAndCapture(new Linestring())).to.deep.equal(["Je suis une polyligne vide."]);
    });

    it("should log a LineString", () => {
        const g = new Linestring([
            new Point([0.0, 0.0]),
            new Point([1.0, 1.0]),
            new Point([5.0, 5.0])
        ]);
        expect(visitAndCapture(g)).to.deep.equal([
            "Je suis une polyligne définie par 3 point(s)."
        ]);
    });
});