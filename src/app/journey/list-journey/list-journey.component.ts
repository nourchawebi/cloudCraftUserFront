import { Component } from '@angular/core';
import {DataService} from "../../data.service";
import {Motorized} from "../../motorized";
@Component({
  selector: 'app-list-journey',
  templateUrl: './list-journey.component.html',
  styleUrls: ['./list-journey.component.css'],
})
export class ListJourneyComponent {

  constructor(private dataService: DataService) {
  }

  participate(journeyId:Number){
    this.dataService.addParticipation(1,journeyId);
  }

  motorized:Motorized[] = [];
  ngOnInit(){

      this.dataService.getMotorized().subscribe((data:Motorized[])=>
    {
      this.motorized = data
    } );
  }
}
