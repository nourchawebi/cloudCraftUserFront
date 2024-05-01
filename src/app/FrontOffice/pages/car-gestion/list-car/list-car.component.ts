import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {Car} from "../../../models/car";
import {CarService} from "../../../services/car.service";

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit{

  cars: Car[] | undefined;

  constructor(public crudApi: CarService, private http:HttpClient, private formBuilder:FormBuilder, private router:Router) {
  }

  ngOnInit(): void {
    this.crudApi.getAll().subscribe(value => this.cars = value);
  }

  update(car: Car){
    this.crudApi.dataForm=this.formBuilder.group(car);
    this.crudApi.dataForm.value.id = car.carId;
    this.crudApi.choixmenu="M";
    this.router.navigate(['/add_car']);


  }


}
