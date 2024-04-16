import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Motorized} from "../../entities/motorized";
import {Journey} from "../../entities/journey";
import {Participation} from "../../entities/participation";
import {Router} from "@angular/router";
import {JourneyService} from "../../services/journey.service";
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-list-journey',
  templateUrl: './list-journey.component.html',
  styleUrls: ['./list-journey.component.css'],
})
export class ListJourneyComponent {

  constructor(private dataService: DataService,private router:Router,private crudApi:JourneyService, private formBuilder:FormBuilder) {
  }

  userchecked:boolean[]= []

  participate(journeyId:Number){
    this.dataService.addParticipation(1,journeyId).subscribe(
      value => this.ngOnInit()
    );
  }

  showTraject(journey:Journey){
    this.crudApi.dataForm = this.formBuilder.group(Object.assign({},journey));
    this.router.navigate(['/map'], { state: { example: "journey" } },)
  }

  motorized:Motorized[] = [];
  ngOnInit(){

      this.dataService.getMotorized().subscribe((data:Motorized[])=>
    {
      this.motorized = data
      console.log(data)
    } );
  }

  checkParticipation(journey: Journey) {
    var i;
    for( i=0;i<journey.participations.length;i++)
      if (journey.participations[i].carpooled.userId==1)
        return true
    return false;
  }

  search(b:string) {
    console.log(b)
  }
}
