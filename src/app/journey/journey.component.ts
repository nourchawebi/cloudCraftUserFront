import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../data.service";
import {Motorized} from "../motorized";
import {Car} from "../car";

@Component({
  selector: 'app-root',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.css']
})
export class JourneyComponent {

  journey = {
    day:"",
    leavingTime:"",
    returnTime:"",
    availablePlaces:0,
    car: {},
    traject: {}
  };

  state =true;

  constructor(private http:HttpClient, private dataService: DataService) {
  }

  cars:Car[] = [];
  ngOnInit(){

    this.dataService.getCarsByMotorized().subscribe((data:Car[])=>
    {
      console.log(data)
      this.cars = data
    } )
  }

  updateTraject(newItem: any) {
    let fields = [];
    for(let i in newItem){
      fields.push({"latitude":newItem[i][0],"longitude":newItem[i][1]})
    }
    this.journey.traject= fields
  }

  addJourney(){
    this.http.post("http://localhost:8081/journey",this.journey).subscribe();
  }

  currentFieldsetIndex: number = 0;

  onCarChange(car:Car){
    this.journey.car=car;
  }

  nextFieldset() {
    if(this.currentFieldsetIndex==1)
      this.currentFieldsetIndex++;
    if(this.currentFieldsetIndex==0)
      if(this.journey.returnTime!=""&&this.journey.leavingTime!=""&&this.journey.day!=""&&this.journey.availablePlaces!=0)
      this.currentFieldsetIndex++;
  }

  prevFieldset() {
    this.currentFieldsetIndex--;
  }

  protected readonly onprogress = onprogress;
}
