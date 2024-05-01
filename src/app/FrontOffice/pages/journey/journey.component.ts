import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../../services/data.service";
import {Motorized} from "../../models/motorized";
import {Car} from "../../models/car";
import {Router} from "@angular/router";
import {LocationService} from "../../services/location.service";
import {JourneyService} from "../../services/journey.service";

@Component({
  selector: 'app-root',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {

  journey = {
    day:"",
    price:0,
    leavingTime:"",
    returnTime:"",
    availablePlaces:0,
    car: {},
    traject: [],
  };

  state =true;

  constructor(private http:HttpClient, private journeyService:JourneyService, private dataService: DataService,private router:Router) {
  }

  cars:Car[] = [];
  ngOnInit(){

    this.dataService.getCarsByMotorized().subscribe((data:Car[])=>
    {
      this.cars = data
    } )
  }

  updateTraject(newItem: any) {
    let fields: any= [];
    let namelocation

    for(let i in newItem){

      this.dataService.getAddress(newItem[i][0],newItem[i][1]).subscribe(value =>
        fields.push({"longitude":newItem[i][0],"latitude":newItem[i][1],"nameLocation":value.features[0].place_name}))
    }
    this.journey.traject= fields
  }

  addJourney(){
//    this.http.post("http://localhost:8081/journey",this.journey).subscribe();
    this.journeyService.createData(this.journey).subscribe()
    this.router.navigate(["/list_journey"])
  }

  currentFieldsetIndex: number = 0;

  onCarChange(car:Car){
    this.journey.car=car;
  }

  nextFieldset() {
    if(this.currentFieldsetIndex==1)
      this.currentFieldsetIndex++;
    if(this.currentFieldsetIndex==0)
      if(this.journey.returnTime!=""&&this.journey.leavingTime!=""&&this.journey.day!=""&&this.journey.price!=0)
      this.currentFieldsetIndex++;
  }

  prevFieldset() {
    this.currentFieldsetIndex--;
  }

  protected readonly onprogress = onprogress;
}
