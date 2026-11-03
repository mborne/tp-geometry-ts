import { describe, it, expect } from "vitest";
import Linestring from "../src/Linestring";
import Point from "../src/Point";

describe("test Linestring", () => {
    it("test default constructor", () => {
        const g = new Linestring ();
        expect(g.getNumPoints()).to.equal(0); // Permet de vérifier que si on mets un tableau vide ça va bien nous retourner 0
    });

    it("test constructor with points", () => {
        const g = new Linestring ([
            new Point([0.0,0.0]),
            new Point ([3.0,4.0])
        ]);
        expect(g.getNumPoints()).to.equal(2);
    });

    it("should return expected points with getPointN", () => {
        const g = new Linestring ([
            new Point([0.0,0.0]),
            new Point ([3.0,4.0])
        ]);
        expect(g.getPointN(0).x()).to.equal(0.0);
        expect(g.getPointN(0).y()).to.equal(0.0);

        expect(g.getPointN(1).x()).to.equal(3.0);
        expect(g.getPointN(1).y()).to.equal(4.0);

        expect(g.getPointN(2)).to.equal(undefined);
    });

    it("should return 'Linestring' for getType()", () => {
        const g = new Linestring ();
        expect (g.getType()).to.equal("LineString");
    });

    it("return True or False if the coordinates of Point are empty", () => {
        const g = new Linestring ();
        expect(g.isEmpty()).to.be.true;
    });
});

