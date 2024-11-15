import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import Enveloppe from "../src/Enveloppe";
import EnveloppeBuilder from "../src/EnveloppeBuilder";

describe("test Enveloppe", () => {
    it("Buildage de l'enveloppe", () => {

    const builder = new EnveloppeBuilder();

        builder.Insert([-1.0,1.0]);
        builder.Insert([2.0,0.0]);
        builder.Insert([1.0,3.0]);
      
        const result = builder.Build();

        expect(result.GetXmax()).to.equals(2.0);
        expect(result.GetYmax()).to.equals(3.0);
        expect(result.GetXmin()).to.equals(-1.0);
        expect(result.GetYmin()).to.equals(0.0);

        
        console.log(result.ToString());

        
        
    });
});