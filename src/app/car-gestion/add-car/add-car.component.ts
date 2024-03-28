import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {
  car = {
    manufacturer : "",
    model : "",
    year : "",
    capacity: 0
  }
  constructor(private http:HttpClient) {
  }
  addCar(){
    this.http.post("http://localhost:8081/car", this.car).subscribe()
  }
}
