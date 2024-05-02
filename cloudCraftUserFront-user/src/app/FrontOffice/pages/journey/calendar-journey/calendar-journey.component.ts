import {Component, OnInit} from '@angular/core';
import {
  DayService,
  WeekService,
  WorkWeekService,
  MonthService,
  AgendaService,
  EventSettingsModel
} from '@syncfusion/ej2-angular-schedule';
import {JourneyService} from "../../../services/journey.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-calendar-journey',
  providers: [WeekService],
  // specifies the template string for the Schedule component
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]='selectedDate'
  [eventSettings]='eventSettings'></ejs-schedule>`
})
export class CalendarJourneyComponent implements OnInit{

  constructor(private activatedRoute:ActivatedRoute, private journeyService:JourneyService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res=>{
      this.id=Number(res.get("id"))
    })
  }

  id:number=0;


  public data: object [] = [{
    id: 2,
    eventName: 'Meeting',
    startTime: new Date(2018, 1, 15, 10, 0),
    endTime: new Date(2018, 1, 15, 12, 30),
    isAllDay: false
  }];
  public selectedDate: Date = new Date(2018, 1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data,
    fields: {
      id: 'id',

      subject: { name: 'eventName' },
      isAllDay: { name: 'isAllDay' },
      startTime: { name: 'startTime' },
      endTime: { name: 'endTime' },
    }
  };


}
