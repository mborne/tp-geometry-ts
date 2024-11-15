import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";



export default class WktWriter {

 
    Write(Geometry: Geometry):String{

       

        if ( Geometry instanceof Point ){
            if (Geometry.IsEmpty()){
                return "POINT EMPTY";
            }
            else {
                return "POINT ("+ Geometry.x() +" "+ Geometry.y() +")";
            }
           

        }
        else if (Geometry instanceof LineString) {
            if (Geometry.IsEmpty()){
                return "LINESTRING EMPTY";
            }
            else {
                
                const coords = [];
                
                for (let i = 0; i < Geometry.GetNumPoints(); i++) {
                    const point = Geometry.GetPointN(i);
                    coords.push(point.x() + " " + point.y());  
                }
                
                return `LINESTRING(${coords.join(", ")})`; 

            }
           
        }
        else {
            throw new TypeError("geometry type not supported");
        }

    
    }
}