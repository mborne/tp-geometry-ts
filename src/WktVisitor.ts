import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "./WktWriter";

export default class WktVisitor implements GeometryVisitor {

    private Buffer : String;


    VisitPoint(point: Point):void{
            if (point.IsEmpty()){
              this.Buffer = "POINT EMPTY";
            }
            else {
                this.Buffer = "POINT ("+ point.x() +" "+ point.y() +")";
            }
           
    }


    VisitLineString(lineString: LineString) {
        if (lineString.IsEmpty()){
            this.Buffer = "LINESTRING EMPTY";
        }
        else {
            
            const coords = [];
            
            for (let i = 0; i < lineString.GetNumPoints(); i++) {
                const point = lineString.GetPointN(i);
                coords.push(point.x() + " " + point.y());  
            }
            
            this.Buffer =`LINESTRING(${coords.join(", ")})`; 

        }
    }
    

    GetResult():String{
        return this.Buffer;
    }
}