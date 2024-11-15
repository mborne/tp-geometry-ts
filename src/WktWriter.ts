import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";



export default class WktWriter {

 
    Write(Geometry: Geometry):String{

        let msg = "";

        if ( Geometry instanceof Point ){
            if (Geometry.IsEmpty()){
                msg = "POINT EMPTY";
            }
            else {
                msg = "POINT ("+ Geometry.x() +" "+ Geometry.y() +")";
            }
           

        }
        else if (Geometry instanceof LineString) {
            if (Geometry.IsEmpty()){
                msg = "LINESTRING EMPTY";
            }
            else {
                msg = "LINESTRING (";
          
                const coords = [];
                
                for (let i = 0; i < Geometry.GetNumPoints(); i++) {
                    const point = Geometry.GetPointN(i);
                    coords.push(point.x() + " " + point.y());  
                }
                
                msg += coords.join(", "); 
                
                msg += ")";
            }
           
        }
        else {
            throw new TypeError("geometry type not supported");
        }

        return msg;
    }
}