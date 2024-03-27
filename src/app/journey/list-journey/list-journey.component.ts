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

  motorized:Motorized[] = [];
  ngOnInit(){

      this.dataService.getMotorized().subscribe((data:Motorized[])=>
    {
      console.log(data[0].userId)
      this.motorized = data
    } )
  }
}
