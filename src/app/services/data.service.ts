import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Motorized} from "../entities/motorized";
import {Car} from "../entities/car";
import {Observable} from "rxjs";
import {LocationComponent} from "../location/location.component";
import {Location} from "../entities/location";


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
    return this.http.get<[Car]>("http://localhost:8081/car")
  }

  getAddress(longitude:Number,latitude:Number):Observable<any>{
    return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+longitude+","+latitude+".json?types=place&access_token=pk.eyJ1IjoiYWNocmVmczkiLCJhIjoiY2xrOHZhbHFtMDdpbjNlbzVib3EzNWZ4MSJ9.cS91fXGH_gJUcL_XNx8mxw")
  }

  saveLocation(location:any){
    this.http.post("http://localhost:8081/location/1",location).subscribe();
  }


  getLocation():Observable<Location>{
    return this.http.get<Location>("http://localhost:8081/location/1");
  }

  addParticipation(idCarpooled:Number,idJourney:Number){
    return this.http.post("http://localhost:8081/participation/"+idCarpooled+"/"+idJourney,null);
  }

  checkParticipation(journeyId: number) {
    this.http.post(`http://localhost:8081/journey/${journeyId}`,null).subscribe();
  }
}