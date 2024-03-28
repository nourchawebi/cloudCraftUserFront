import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Motorized} from "./motorized";
import {Car} from "./car";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) {
  }

  getMotorized(){
    return this.http.get<[Motorized]>("http://localhost:8081/motorized");
  }

  getCarsByMotorized() {
    return this.http.get<[Car]>("http://localhost:8081/motorized_cars")
  }

  getAddress(longitude:Number,latitude:Number):Observable<any>{
    return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+longitude+","+latitude+".json?types=place&access_token=pk.eyJ1IjoiYWNocmVmczkiLCJhIjoiY2xrOHZhbHFtMDdpbjNlbzVib3EzNWZ4MSJ9.cS91fXGH_gJUcL_XNx8mxw")
  }

  saveLocation(location:any){
    console.log(location)
    this.http.post("http://localhost:8081/location/1",location).subscribe();
  }
}
