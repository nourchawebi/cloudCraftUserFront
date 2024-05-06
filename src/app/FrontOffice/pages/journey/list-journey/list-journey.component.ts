import { Component } from '@angular/core';
import {DataService} from "../../../services/data.service";
import {Motorized} from "../../../models/motorized";
import {Journey} from "../../../models/journey";
import {Participation} from "../../../models/participation";
import {Router} from "@angular/router";
import {JourneyService} from "../../../services/journey.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Evented} from "mapbox-gl";
import {LocationService} from "../../../services/location.service";
import {end} from "@popperjs/core";
import {UserprofileService} from "../../../services/userprofile/userprofile.service";
@Component({
  selector: 'app-list-journey',
  templateUrl: './list-journey.component.html',
  styleUrls: ['./list-journey.component.css'],
})
export class ListJourneyComponent {

  constructor(private userProfileService:UserprofileService,private dataService: DataService,private locationService:LocationService,private router:Router,private crudApi:JourneyService, private formBuilder:FormBuilder, private journeyService:JourneyService) {
  }

  showTraject(journey:Journey){
    this.journeyService.selectedJourney=journey
    this.router.navigate(['/home/map'])
  }

  searchCriteria={
    maximumPrice:30,
    day:"all"
  }

  locationNames:string[] = [];
  motorized:Motorized[] = [];
  fmotorized:Motorized[] = [];
  journey:Journey[] = [];

  checkedUsers:boolean[] = [];
  checkedLocation:boolean[] = [];

  ngOnInit(){

      this.dataService.getMotorized().subscribe((data:Motorized[])=>
    {
      this.motorized =data
      for (let i=0; i< this.motorized.length;i++)
        this.checkedUsers[i] = true;
    } );


    this.locationService.getLocationNames().subscribe(value =>{
      this.locationNames = value
      for (let i=0; i< this.locationNames.length;i++)
        this.checkedLocation[i] = true;
    });

    this.search();
  }

  search() {
    this.fmotorized = []
    this.journey = []
    this.journey = this.journey.filter(journey => journey.traject.map(value1 => value1.nameLocation).includes(this.locationNames[5]));

    this.fmotorized = this.motorized.filter((value,index) => this.checkedUsers[index])
      this.fmotorized.map(value1 => value1.journeys.map(value =>{
        value.motorized = value1
        for(let locationName of this.locationNames.filter((n,i)=>this.checkedLocation[i])){
          if(value.traject.map((location,index) => location.nameLocation).includes(locationName)){
            this.journey.push(value)
            break
          }
        }
      }));

    this.journey = this.journey.filter(journey => journey.price < this.searchCriteria.maximumPrice)
    if(this.searchCriteria.day!="all")
      this.journey = this.journey.filter(journey => journey.day == this.searchCriteria.day)
  }

  showCalendar(motorized: Motorized) {
    this.journeyService.dataForm = this.formBuilder.group(motorized);
    this.router.navigate(['/calendar']);
  }
}
