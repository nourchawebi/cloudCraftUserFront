import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Motorized} from "../models/motorized";
import {Car} from "../models/car";
import {Observable} from "rxjs";
import {LocationComponent} from "../pages/location/location.component";
import {Location} from "../models/location";
import {UserprofileService} from "./userprofile/userprofile.service";


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient, private up:UserprofileService) {
  }

  getMotorized(){
    const headers = this.up.createAuthorization();
    return this.http.get<[Motorized]>("http://localhost:8081/motorized",{headers});

  }

  getCarsByMotorized() {
    const headers = this.up.createAuthorization();
    return this.http.get<[Car]>("http://localhost:8081/car",{headers})
  }

  getAddress(longitude:Number,latitude:Number):Observable<any>{
    return this.http.get("https://api.mapbox.com/geocoding/v5/mapbox.places/"+longitude+","+latitude+".json?types=place&access_token=pk.eyJ1IjoiYWNocmVmczkiLCJhIjoiY2xrOHZhbHFtMDdpbjNlbzVib3EzNWZ4MSJ9.cS91fXGH_gJUcL_XNx8mxw")
  }

  saveLocation(location:any){
    const headers = this.up.createAuthorization();
    this.http.post("http://localhost:8081/location/1",location,{headers}).subscribe();
  }


  getLocation():Observable<Location>{
    const headers = this.up.createAuthorization();
    return this.http.get<Location>("http://localhost:8081/location/1",{headers});
  }

    addParticipation(idCarpooled: Number, idJourney: number | undefined){
    const headers = this.up.createAuthorization();
    return this.http.post("http://localhost:8081/participation/"+idCarpooled+"/"+idJourney,null,{headers});
  }

  checkParticipation(journeyId: number | undefined) {
    const headers = this.up.createAuthorization();
    this.http.post(`http://localhost:8081/participation/journey/${journeyId}`,null,{headers}).subscribe();
  }
}
