import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Motorized} from "./motorized";
import {Car} from "./car";


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
}
