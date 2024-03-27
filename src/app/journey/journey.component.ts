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
    day:new Date(),
    leavingTime:new Date(),
    returnTime:new Date(),
    availablePlaces:0,
    traject: {}
  };

  state =true;

  constructor(private http:HttpClient, private dataService: DataService) {
  }

  cars:Car[] = [];
  ngOnInit(){

    this.dataService.getCarsByMotorized().subscribe((data:Car[])=>
    {
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

  nextFieldset() {
    console.log("aa"+this.currentFieldsetIndex)
    this.currentFieldsetIndex++;
  }

  prevFieldset() {
    this.currentFieldsetIndex--;
  }
}
