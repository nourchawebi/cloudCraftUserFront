import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-car',
  templateUrl: './car-gestion.component.html',
  styleUrls: ['./car-gestion.component.css']
})
export class CarGestionComponent {
  /*carManufacturer : string = "car manufacturer";
  carModel : string = "car model";
  carYear: any = new Date();
  capacity: number = 0;*/

  car = {
    carManufacturer : "",
    carModel : "",
    carYear : "",
    capacity: 0
  }
  constructor(private http:HttpClient) {
  }
  addCar(){
    /*this.carModel = carModel;
    this.carYear = carYear;
    this.capacity = capacity;
    console.log(this.capacity)*/

    this.http.post("http://localhost:8081/car", this.car).subscribe()
  }
}
